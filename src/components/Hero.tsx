import { motion } from 'framer-motion'
import photo from '../assets/photo.JPG'
import cv from '../assets/cv.pdf'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24 w-full">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Photo — top on mobile, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center lg:justify-end lg:order-2"
          >
            <img
              src={photo}
              alt="Aleksa Vlaški"
              className="w-[260px] h-[320px] lg:w-[400px] lg:h-[500px] rounded-2xl object-cover object-top border border-accent/20 shadow-[0_0_40px_rgba(34,211,238,0.15)] lg:shadow-[0_0_60px_rgba(34,211,238,0.15)]"
            />
          </motion.div>

          {/* Text — below photo on mobile, left column on desktop */}
          <div className="lg:order-1">
            <motion.p
              {...fadeUp(0.1)}
              className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
            >
              Aleksa<br />Vlaški
            </motion.h1>
            <motion.p
              {...fadeUp(0.35)}
              className="font-display text-xl lg:text-2xl text-accent font-medium mb-6"
            >
              Full-Stack Developer
            </motion.p>
            <motion.p
              {...fadeUp(0.45)}
              className="text-slate-300 text-base lg:text-lg leading-relaxed mb-10 max-w-md"
            >
              Software engineer with hands-on full-stack experience in .NET and React, plus a machine learning background from academic research. Focused on backend architecture, API design, and integrating AI/LLM features into production systems, from RAG pipelines to natural-language booking flows. Delivered features in Agile teams both during a professional internship and in self-directed projects.
            </motion.p>
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
              <a
                href={cv}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200 text-sm"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-200 text-sm"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
