import { motion } from 'framer-motion'
import { infoCards } from '../data/about'

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-surface scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...sectionAnim} className="mb-10 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">About me</p>
          <h2 className="font-display text-4xl font-bold text-white">Who I am</h2>
          <div className="mt-4 w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            {...sectionAnim}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a software engineering graduate based in Belgrade, Serbia, with hands-on experience in full-stack web development and machine learning.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Proficient in C#, Swift and Java, I bring a strong foundation in algorithms, data structures, and database design to every project I work on. I enjoy solving real problems with code that is not just functional, but readable and maintainable.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              A practical problem-solver with proven ability to deliver in Agile team environments, I am currently putting these skills to work in a professional internship at Orion Innovation, and actively looking for opportunities to keep growing.
            </p>
          </motion.div>

          <motion.div
            {...sectionAnim}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {infoCards.map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-xl p-5">
                <p className="text-muted text-xs tracking-widest uppercase mb-1">{item.label}</p>
                <p className="text-white font-medium text-sm break-words">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
