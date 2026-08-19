import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { hasAdminRole } from '@/lib/supabase/authorization'

function redirectWithCookies(url: URL, response: NextResponse) {
  const redirectResponse = NextResponse.redirect(url)

  response.cookies.getAll().forEach((cookie) => {
    redirectResponse.cookies.set(cookie)
  })

  return redirectResponse
}

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  const { data, error } = await supabase.auth.getClaims()
  const claims = error ? undefined : data?.claims
  const loginUrl = new URL('/admin/login', request.url)

  if (request.nextUrl.pathname === '/admin/login') {
    return response
  }

  if (!claims?.sub) {
    return redirectWithCookies(loginUrl, response)
  }

  if (!hasAdminRole(claims)) {
    loginUrl.searchParams.set('error', 'not-authorized')
    return redirectWithCookies(loginUrl, response)
  }

  return response
}
