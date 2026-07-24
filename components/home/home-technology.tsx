import { Cpu, Leaf } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export function HomeTechnology() {
  return (
    <section className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Technology as an enabler"
            title="Agriculture leads. Technology supports."
            description="We are not a technology company. Mazowe University is an agricultural institution that intends to use technology — including artificial intelligence — as a practical tool to strengthen teaching, research, and farming outcomes."
          />

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Leaf className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold tracking-tight text-foreground">
                  Rooted in agriculture
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Every proposed program begins with sound agricultural science
                  and the real needs of Zimbabwean farmers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-accent/20 text-clay">
                <Cpu className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold tracking-tight text-foreground">
                  Enabled by technology
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Data, digital tools, and AI are intended to help interpret
                  research, improve decisions, and extend knowledge — never to
                  replace agricultural expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
