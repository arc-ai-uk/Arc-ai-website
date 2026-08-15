import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'

export default function CaseStudyCard({ caseStudy, index = 0 }) {
  return (
    <GlassCard
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-4"
    >
      {/* TODO: replace with real project imagery */}
      <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-glass-border bg-white/5 text-xs text-text-muted">
        Sample Project Image
      </div>

      <Badge>{caseStudy.tag}</Badge>
      <h3 className="font-display text-xl font-semibold text-text-primary">{caseStudy.client}</h3>

      <dl className="flex flex-col gap-3 text-sm">
        <div>
          <dt className="font-semibold text-accent-secondary">Problem</dt>
          <dd className="mt-1 leading-relaxed text-text-secondary">{caseStudy.problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-accent-secondary">Solution</dt>
          <dd className="mt-1 leading-relaxed text-text-secondary">{caseStudy.solution}</dd>
        </div>
        <div>
          <dt className="font-semibold text-accent-secondary">Result</dt>
          <dd className="mt-1 leading-relaxed text-text-secondary">{caseStudy.result}</dd>
        </div>
      </dl>

      <p className="mt-2 text-xs italic text-text-muted">
        Sample content — pending a real, verified client case study.
      </p>
    </GlassCard>
  )
}
