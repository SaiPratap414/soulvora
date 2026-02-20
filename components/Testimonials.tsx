'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Reveal, staggerContainer, fadeInUp } from './animated';

const testimonials = [
  {
    quote:
      "Soulvora gave me permission to ask for help. The counselling sessions changed how I handle stress — I'm calmer, more focused, and honestly, a better teammate now.",
    name: 'Priya M.',
    role: 'Software Engineer',
    avatar: '🧑‍💻'
  },
  {
    quote:
      "I was on the edge of burnout. The peer support circles reminded me that I wasn't alone. That alone was transformative.",
    name: 'James K.',
    role: 'Marketing Lead',
    avatar: '👨‍💼'
  },
  {
    quote:
      "The meditation library is my daily ritual now. Ten minutes of guided calm before meetings makes all the difference.",
    name: 'Aisha R.',
    role: 'Product Designer',
    avatar: '👩‍🎨'
  }
];

export default function Testimonials() {
  return (
    <section id="stories" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Employee Stories
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Voices That <span className="gradient-text">Inspire</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              Hear from real employees who found renewed energy, confidence, and
              connection through Soulvora.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map(({ quote, name, role, avatar }) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-card p-7 transition-colors hover:bg-card-hover"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="text-base leading-relaxed text-foreground/90">{quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-xl">
                  {avatar}
                </span>
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs text-muted">{role}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: 'radial-gradient(400px circle at 50% 0%, hsl(266 100% 64% / 0.04), transparent 60%)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
