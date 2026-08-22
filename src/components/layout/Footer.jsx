import { NavLink } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { nav, brand, contactInfo } from '../../data/content'
import { LinkedinIcon, InstagramIcon, FacebookIcon } from '../ui/SocialIcons'

const socialIcons = {
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
}

export default function Footer() {
  return (
    <footer className="mt-24 px-4 pb-8">
      <div className="glass-panel mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <img src={`${import.meta.env.BASE_URL}ArcAi-Icon.png`} alt={brand.name} className="h-14 w-14 rounded-lg" />
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{brand.tagline}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="text-sm text-text-secondary hover:text-accent-secondary transition-colors"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted">
              Contact
            </h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-secondary transition-colors"
            >
              <Mail size={16} /> {contactInfo.email}
            </a>
            <p className="text-sm text-text-secondary">{contactInfo.phone}</p>
            <p className="text-sm text-text-secondary">{contactInfo.address}</p>

            <div className="mt-2 flex gap-3">
              {/* TODO: replace # placeholders with real social links */}
              {contactInfo.socials.map((s) => {
                const Icon = socialIcons[s.label]
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="glass-panel flex h-9 w-9 items-center justify-center text-text-secondary hover:text-accent-secondary transition-colors"
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border pt-6 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
