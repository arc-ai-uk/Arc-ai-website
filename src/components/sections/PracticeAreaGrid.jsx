import { Megaphone, Mail, Globe, Smartphone, BarChart3, Bot } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { practiceAreas } from '../../data/content'

const icons = { Megaphone, Mail, Globe, Smartphone, BarChart3, Bot }

export default function PracticeAreaGrid() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Practice Areas"
          title="Where We Help You Grow"
          description="Every capability is built to feed the same goal: more customers finding you, and more of them buying."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => {
            const Icon = icons[area.icon]
            return (
              <GlassCard
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
                className="flex flex-col gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-glass-border text-accent-secondary">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{area.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
