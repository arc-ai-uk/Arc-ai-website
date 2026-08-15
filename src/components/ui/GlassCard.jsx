import { motion } from 'framer-motion'

/**
 * Frosted-glass panel primitive per CLAUDE.md 5.2 glass surface rules.
 * `as="li"` etc. lets callers swap the rendered element for semantics.
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  as: Tag = 'div',
  ...rest
}) {
  const MotionTag = motion[Tag] ?? motion.div

  return (
    <MotionTag
      className={`glass-panel shadow-glass p-6 sm:p-8 ${
        hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
