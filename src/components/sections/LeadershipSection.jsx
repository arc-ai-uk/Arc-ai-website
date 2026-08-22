import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { companyHead } from '../../data/content'

export default function LeadershipSection() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Leadership" title="Meet the Company Head" />

        <GlassCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-5 border-dashed text-center sm:flex-row sm:text-left"
        >
          {/* TODO: replace initials avatar with a real headshot photo */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-accent-secondary/50 bg-white/5 font-display text-2xl font-semibold text-accent-secondary">
            {companyHead.initials}
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary">
              {companyHead.name}
            </h3>
            <p className="text-sm text-accent-secondary">{companyHead.title}</p>
            {companyHead.bio.map((line, i) => (
              <p key={i} className="mt-2 text-sm leading-relaxed text-text-secondary">
                {line}
              </p>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
