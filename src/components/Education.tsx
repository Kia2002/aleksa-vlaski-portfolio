import { motion } from 'framer-motion'
import { education } from '../data/education'

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-surface scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...sectionAnim} className="mb-10 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Academic background</p>
          <h2 className="font-display text-4xl font-bold text-white">Education</h2>
          <div className="mt-4 w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-1">{item.degree}</h3>
                  <p className="text-accent font-medium">{item.institution}</p>
                  <p className="text-muted text-sm mt-1">{item.location}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="text-muted text-sm">{item.period}</p>
                  {item.gpa && (
                    <p className="text-slate-300 text-sm font-medium mt-1">GPA: {item.gpa}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
