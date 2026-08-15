import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import { contactInfo, businessTypes } from '../data/content'

const initialForm = { name: '', email: '', businessType: businessTypes[0], message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Please tell us a bit about your business.'
  return errors
}

export default function Contact() {
  usePageMeta(
    'Contact — Arc-I',
    'Get in touch with Arc-I or book a discovery call to see how AI, web, and marketing can grow your business.',
  )

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // TODO: replace with real submission endpoint (email service, CRM, or serverless function)
    console.log('Contact form submitted (mock):', form)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <section className="px-4 pt-20 pb-4 sm:pt-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Talk About Your Business"
            description="Fill out the form or reach out directly — we'll get back to you to schedule a discovery call."
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          <GlassCard initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="text-success" size={40} />
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  Thanks — message received!
                </h3>
                <p className="max-w-sm text-sm text-text-secondary">
                  This is a mock submission for demo purposes. We&apos;ll follow up soon to book
                  your discovery call.
                </p>
                <Button variant="secondary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-secondary">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-secondary focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-300">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-secondary">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-secondary focus:outline-none"
                    placeholder="you@business.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-300">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessType" className="mb-1.5 block text-sm font-medium text-text-secondary">
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-text-primary focus:border-accent-secondary focus:outline-none"
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-bg-secondary">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="w-full rounded-xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-secondary focus:outline-none"
                    placeholder="Tell us a bit about your business and what you're looking for..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </GlassCard>

          <div className="flex flex-col gap-6">
            <GlassCard initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                Book a Discovery Call
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Prefer to talk it through? Reach out directly and we&apos;ll find a time that
                works.
              </p>
              {/* TODO: replace placeholder contact details with real info */}
              <div className="mt-5 flex flex-col gap-3 text-sm text-text-secondary">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-accent-secondary transition-colors">
                  <Mail size={16} /> {contactInfo.email}
                </a>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> {contactInfo.phone}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> {contactInfo.address}
                </p>
              </div>
            </GlassCard>

            <GlassCard initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="font-display text-lg font-semibold text-text-primary">Follow Along</h3>
              {/* TODO: replace # placeholders with real social links */}
              <div className="mt-4 flex flex-col gap-2 text-sm">
                {contactInfo.socials.map((s) => (
                  <a key={s.label} href={s.href} className="text-text-secondary hover:text-accent-secondary transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  )
}
