export const siteConfig = {
  name: 'Mazowe University of Agricultural Science',
  shortName: 'Mazowe University',
  abbreviation: 'MUAS',
  location: 'Mazowe District, Zimbabwe',
  status: 'Proposed institution — currently under development',
  tagline:
    'Advancing agriculture through education, applied research, and community.',
  email: 'info@mazoweuniversity.ac.zw',
  phone: '+263 (0) 000 000 000',
} as const

export type NavItem = {
  label: string
  href: string
  description?: string
}

export const mainNav: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    description: 'Our proposed vision, mission, and guiding principles.',
  },
  {
    label: 'Academics',
    href: '/academics',
    description: 'Planned faculties, programs, and areas of study.',
  },
  {
    label: 'Research',
    href: '/research',
    description: 'Intended research themes and applied science priorities.',
  },
  {
    label: 'Community',
    href: '/community',
    description: 'Proposed extension, outreach, and farmer engagement.',
  },
  {
    label: 'Admissions',
    href: '/admissions',
    description: 'Future admissions pathways and expressions of interest.',
  },
  {
    label: 'Contact',
    href: '/contact',
    description: 'Reach the development team and partnership office.',
  },
]
