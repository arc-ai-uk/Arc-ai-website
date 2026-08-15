import { Megaphone, Code2, BrainCircuit } from 'lucide-react'
import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'
import SectionHeading from '../ui/SectionHeading'
import { teams, whatWeDoIntro } from '../../data/content'

const icons = { Megaphone, Code2, BrainCircuit }

export default function TeamOverview({ full = false, showHeading = true }) {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <SectionHeading
            eyebrow="What We Do"
            title="Three Specialist Teams, One Connected Solution"
            description={whatWeDoIntro}
          />
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team, i) => {
            const Icon = icons[team.icon]
            const visibleSkills = full ? team.skills : team.skills.slice(0, 4)

            return (
              <GlassCard
                key={team.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cta-gradient text-bg-primary">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {team.name}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{team.summary}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {visibleSkills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                  {!full && team.skills.length > 4 && (
                    <Badge>+{team.skills.length - 4} more</Badge>
                  )}
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
