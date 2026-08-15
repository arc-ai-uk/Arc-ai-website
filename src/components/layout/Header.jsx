import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { nav } from '../../data/content'
import Button from '../ui/Button'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on route change / resize back to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-accent-secondary' : 'text-text-secondary hover:text-text-primary'
    }`

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between px-5 py-3 backdrop-blur-glass">
        <NavLink
          to="/"
          className="font-display text-xl font-bold bg-cta-gradient bg-clip-text text-transparent"
          onClick={() => setOpen(false)}
        >
          {/* TODO: replace text wordmark with real logo */}
          Arc-I
        </NavLink>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary" className="!px-5 !py-2.5 !text-sm">
            Book a Call
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-text-primary"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="glass-panel mx-auto mt-2 flex max-w-6xl flex-col gap-4 px-5 py-5 md:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" onClick={() => setOpen(false)}>
            Book a Call
          </Button>
        </nav>
      )}
    </header>
  )
}
