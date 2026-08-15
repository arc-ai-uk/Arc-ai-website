import { motion } from 'framer-motion'
import { credibilityStats, credibilityLogos } from '../../data/content'

export default function CredibilityStrip() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel grid grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 sm:px-10">
          {credibilityStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-1 text-center"
            >
              <span className="font-display text-2xl font-bold text-accent-secondary sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-text-secondary sm:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* TODO: replace gray placeholder badges with real client logos */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-70">
          {credibilityLogos.map((logo) => (
            <div
              key={logo}
              className="flex h-10 w-28 items-center justify-center rounded-lg border border-glass-border bg-white/5 text-xs text-text-muted"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
