export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs sm:text-sm text-text-secondary ${className}`}
    >
      {children}
    </span>
  )
}
