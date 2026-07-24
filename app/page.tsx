import { HomeHero } from '@/components/home/home-hero'
import { HomePillars } from '@/components/home/home-pillars'
import { HomeFocus } from '@/components/home/home-focus'
import { HomeTechnology } from '@/components/home/home-technology'
import { HomeAcademicsPreview } from '@/components/home/home-academics-preview'
import { HomeRoadmap } from '@/components/home/home-roadmap'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePillars />
      <HomeFocus />
      <HomeTechnology />
      <HomeAcademicsPreview />
      <HomeRoadmap />
      <CtaSection />
    </>
  )
}
