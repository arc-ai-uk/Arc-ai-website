import usePageMeta from '../hooks/usePageMeta'
import SectionHeading from '../components/ui/SectionHeading'
import CaseStudyCard from '../components/sections/CaseStudyCard'
import CTASection from '../components/sections/CTASection'
import { caseStudies } from '../data/content'

export default function CaseStudies() {
  usePageMeta(
    'Case Studies — Arc-I',
    'Sample case studies showing how Arc-I combines marketing, full stack, and data & AI to drive results.',
  )

  return (
    <>
      <section className="px-4 pt-20 pb-4 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Case Studies"
            title="Problems We Solve, Results We Aim For"
            description="These are illustrative sample projects — TODO: replace with real, verified client case studies once available."
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        description="Book a discovery call and let's map out what Arc-I could do for your business."
      />
    </>
  )
}
