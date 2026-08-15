import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-secondary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg leading-relaxed text-text-secondary">{description}</p>
      )}
    </motion.div>
  )
}
