import { motion } from 'framer-motion'
import { experience } from '../data/experience'

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-surface scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...sectionAnim} className="mb-10 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Where I've worked</p>
          <h2 className="font-display text-4xl font-bold text-white">Experience</h2>
          <div className="mt-4 w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="relative">
          {experience.length > 1 && <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />}
          <div className="flex flex-col gap-10 pl-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-12 top-6 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                      <p className="text-accent font-medium mt-1">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted text-sm">{job.period}</p>
                      <p className="text-muted text-sm">{job.location}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                        <span className="text-accent mt-0.5 shrink-0 text-xs">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
