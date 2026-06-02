import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-bg scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...sectionAnim} className="mb-10 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="font-display text-4xl font-bold text-white">Skills</h2>
          <div className="mt-4 w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300"
            >
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg bg-surface border border-border text-slate-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
