import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { howWeWork } from '../../data/content'

export default function HowWeWork() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="How We Work" title="A Process Built for Small Business Speed" />

        <div className="mt-14 flex flex-col gap-10">
          {howWeWork.map((item, i) => {
            const reversed = i % 2 === 1
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className={`glass-panel flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 ${
                  reversed ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <span className="font-display text-4xl font-bold text-accent-primary/60 sm:text-5xl">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
