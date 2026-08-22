import { motion } from 'framer-motion'
import { ChefHat, CookingPot, ShoppingCart } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import CTASection from '../components/sections/CTASection'
import { caseStudies } from '../data/content'

const icons = { ChefHat, CookingPot, ShoppingCart }

export default function OurWork() {
  usePageMeta(
    'Our Work — Arc-I',
    'Real Arc-I client results — see how marketing, web, and promotion work has grown revenue and client volume for small businesses.',
  )

  return (
    <>
      <section className="px-4 pt-20 pb-4 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Our Work"
            title="Real Businesses, Real Growth"
            description="A look at how Arc-I's marketing, web, and promotion work has translated into measurable results for our clients."
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          {caseStudies.map((study, i) => {
            const Icon = icons[study.icon]
            const reversed = i % 2 === 1

            return (
              <motion.div
                key={study.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.15, ease: 'easeOut' }}
              >
                <GlassCard
                  hover={false}
                  className={`flex flex-col gap-8 sm:flex-row sm:items-center ${
                    reversed ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* TODO: replace with a real photo of the business / their work */}
                  <div className="relative flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-accent-secondary/40 bg-white/5 sm:h-48 sm:w-56">
                    <div className="absolute -inset-6 bg-cta-gradient opacity-20 blur-2xl" />
                    <Icon className="relative text-accent-secondary" size={40} />
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-glass-border bg-bg-primary/60 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-text-muted">
                      Placeholder — pending real photo
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
                          {study.name}
                        </h3>
                        <p className="text-sm text-text-muted">
                          {study.location} &middot; {study.industry}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-2xl font-bold text-accent-secondary sm:text-3xl">
                          {study.stat}
                        </p>
                        <p className="text-xs uppercase tracking-widest text-text-muted">
                          {study.statLabel}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                      <p>
                        <span className="font-semibold text-text-primary">The Challenge — </span>
                        {study.challenge}
                      </p>
                      <p>
                        <span className="font-semibold text-text-primary">What Arc-I Did — </span>
                        {study.approach}
                      </p>
                      <p>
                        <span className="font-semibold text-text-primary">The Result — </span>
                        {study.result}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        description="Tell us about your business — we'll show you exactly where marketing, web, and AI can move the needle."
      />
    </>
  )
}
