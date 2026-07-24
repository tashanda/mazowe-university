import { FeatureSplit } from '@/components/feature-split'

export function HomeFocus() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <FeatureSplit
          eyebrow="Applied research"
          title="Research grounded in real agricultural challenges"
          description="The proposed research agenda will prioritise practical outcomes — from soil health and crop resilience to post-harvest systems — with findings intended to reach the farmers who need them most."
          points={[
            'Planned focus on soil science, crop science, and sustainable production',
            'Intended partnerships with farmers, industry, and government (subject to approval)',
            'Responsible use of data and technology to support research',
          ]}
          imageSrc="/images/research-soil-lab.png"
          imageAlt="Researcher examining soil samples and seedlings in an agricultural laboratory"
          cta={{ label: 'View research themes', href: '/research' }}
        />

        <FeatureSplit
          reversed
          eyebrow="Community extension"
          title="A university connected to its community"
          description="Extension and outreach are central to the proposed mission. Planned programs aim to share knowledge directly with smallholder farmers and rural communities across Mazowe District and beyond."
          points={[
            'Proposed farmer training and knowledge-sharing programs',
            'Intended field demonstrations and advisory services',
            'A future bridge between research and everyday farming practice',
          ]}
          imageSrc="/images/community-extension.png"
          imageAlt="Extension worker sharing information on a tablet with a group of smallholder farmers"
          cta={{ label: 'Explore community plans', href: '/community' }}
        />
      </div>
    </section>
  )
}
