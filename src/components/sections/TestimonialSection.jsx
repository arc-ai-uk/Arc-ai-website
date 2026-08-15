import { Quote } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/content'

export default function TestimonialSection() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What Clients Say" title="Trusted by Small Businesses" />

        {/* TODO: replace placeholder quotes with real testimonials */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <GlassCard
              key={t.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <Quote className="text-accent-secondary" size={28} />
              <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                <p className="text-xs text-text-muted">{t.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
