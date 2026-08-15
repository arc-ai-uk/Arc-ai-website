import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function CTASection({
  title = 'Ready to Grow With Arc-I?',
  description = "Tell us about your business — we'll show you exactly where AI, web, and marketing can move the needle.",
}) {
  return (
    <section className="px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="glass-panel mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-14 text-center sm:px-12"
      >
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-text-secondary">{description}</p>
        <Button to="/contact" variant="primary">
          Book a Discovery Call
        </Button>
      </motion.div>
    </section>
  )
}
