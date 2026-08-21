import usePageMeta from '../hooks/usePageMeta'
import SectionHeading from '../components/ui/SectionHeading'
import TeamOverview from '../components/sections/TeamOverview'
import CTASection from '../components/sections/CTASection'

export default function Services() {
  usePageMeta(
    'Services — Arc-I',
    'Explore the full skill set of Arc-I’s Marketing, Web & Apps, and Data & AI teams.',
  )

  return (
    <>
      <section className="px-4 pt-20 pb-4 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Services"
            title="Everything Your Business Needs, Under One Roof"
            description="Marketing, web & app development, and data & AI — three specialist teams, working from the same growth goal."
          />
        </div>
      </section>

      <TeamOverview full showHeading={false} />
      <CTASection
        title="Not Sure Where to Start?"
        description="Book a discovery call and we'll map out which team — or combination — fits your business best."
      />
    </>
  )
}
