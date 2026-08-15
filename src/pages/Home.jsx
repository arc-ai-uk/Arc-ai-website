import usePageMeta from '../hooks/usePageMeta'
import Hero from '../components/sections/Hero'
import TeamOverview from '../components/sections/TeamOverview'
import CredibilityStrip from '../components/sections/CredibilityStrip'
import PracticeAreaGrid from '../components/sections/PracticeAreaGrid'
import CaseStudyCard from '../components/sections/CaseStudyCard'
import TestimonialSection from '../components/sections/TestimonialSection'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import CTASection from '../components/sections/CTASection'
import { caseStudies } from '../data/content'

export default function Home() {
  usePageMeta(
    'Arc-I — AI, Web & Marketing for Small Business',
    'Arc-I combines marketing, full stack development, and data & AI under one roof to help small and local businesses compete and grow.',
  )

  const featured = caseStudies[0]

  return (
    <>
      <Hero />
      <TeamOverview />
      <CredibilityStrip />
      <PracticeAreaGrid />

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Featured Case Study"
            title="Real Problems, Real Outcomes"
            description="A sample of how the three Arc-I teams work together — full case studies are on their way."
          />
          <div className="mx-auto mt-12 max-w-md">
            <CaseStudyCard caseStudy={featured} />
          </div>
          <div className="mt-8 flex justify-center">
            <Button to="/case-studies" variant="secondary">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <CTASection />
    </>
  )
}
