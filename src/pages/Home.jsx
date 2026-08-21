import usePageMeta from '../hooks/usePageMeta'
import Hero from '../components/sections/Hero'
import TeamOverview from '../components/sections/TeamOverview'
import PracticeAreaGrid from '../components/sections/PracticeAreaGrid'
import TestimonialSection from '../components/sections/TestimonialSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  usePageMeta(
    'Arc-I — AI, Web & Marketing for Small Business',
    'Arc-I combines marketing, Web & App development, and data & AI under one roof to help small and local businesses compete and grow.',
  )

  return (
    <>
      <Hero />
      <TeamOverview />
      <PracticeAreaGrid />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
