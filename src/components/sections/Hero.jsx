import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import { whoWeAre } from '../../data/content'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Abstract gradient blobs — TODO: replace with real AI/tech imagery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-primary/25 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-0 h-64 w-64 rounded-full bg-accent-tertiary/15 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel inline-flex items-center gap-2 px-4 py-2 text-sm text-text-secondary"
        >
          <Sparkles size={16} className="text-accent-secondary" />
          AI-Powered Growth for Small Business
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl md:text-6xl"
        >
          Marketing, Web &amp; AI —{' '}
          <span className="bg-cta-gradient bg-clip-text text-transparent">Built as One</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {whoWeAre}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button to="/contact" variant="primary">
            Book a Discovery Call
          </Button>
          <Button to="/services" variant="secondary">
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
