import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { contactLinks } from '../data/contact'

const EMAILJS_SERVICE_ID = 'service_8oy4rrt'
const EMAILJS_TEMPLATE_ID = 'template_jv3ndhd'
const EMAILJS_PUBLIC_KEY = 'YjsOUqoBgrOJCQCSe'

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message, to_name: 'Aleksa' },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-bg scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...sectionAnim} className="mb-10 md:mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="font-display text-4xl font-bold text-white">Contact</h2>
          <div className="mt-4 w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            {...sectionAnim}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Whether you have a role to fill, a project to discuss, or just want to say hello, my inbox is open.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent/40 transition-colors duration-200 group"
                >
                  <span className="text-muted text-xs tracking-widest uppercase w-16 shrink-0">{item.label}</span>
                  <span className="text-slate-300 group-hover:text-accent transition-colors duration-200 text-sm min-w-0 truncate">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...sectionAnim}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-accent text-bg font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'success' && (
                <p className="text-center text-sm text-green-400">Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-red-400">Something went wrong. Try emailing me directly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
