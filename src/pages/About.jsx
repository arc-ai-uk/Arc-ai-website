import usePageMeta from '../hooks/usePageMeta'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import LeadershipSection from '../components/sections/LeadershipSection'
import HowWeWork from '../components/sections/HowWeWork'
import CTASection from '../components/sections/CTASection'
import { whoWeAre, ourGoal, whoWeWorkWith } from '../data/content'

export default function About() {
  usePageMeta(
    'About — Arc-I',
    'Learn who Arc-I is, our mission, and who we work with — small and local businesses underserved by big agencies.',
  )

  return (
    <>
      <section className="px-4 pt-20 pb-4 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="About Arc-I" title="Bringing AI Within Reach of Small Business" />
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          <GlassCard initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <h3 className="font-display text-xl font-semibold text-text-primary">Who We Are</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{whoWeAre}</p>
          </GlassCard>

          <GlassCard initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="font-display text-xl font-semibold text-text-primary">Our Goal</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{ourGoal}</p>
          </GlassCard>

          <GlassCard
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sm:col-span-2"
          >
            <h3 className="font-display text-xl font-semibold text-text-primary">Who We Work With</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">{whoWeWorkWith}</p>
          </GlassCard>
        </div>
      </section>

      <HowWeWork />
      <LeadershipSection />
      <CTASection />
    </>
  )
}
