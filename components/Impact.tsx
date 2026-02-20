'use client';

import { motion } from 'framer-motion';
import { Reveal, AnimatedCounter, staggerContainer, fadeInUp } from './animated';

const stats = [
  { value: 94, suffix: '%', label: 'Feel more supported at work', description: 'of employees using Soulvora' },
  { value: 3, suffix: 'x', label: 'Better stress management', description: 'compared to before joining' },
  { value: 87, suffix: '%', label: 'Would recommend to a colleague', description: 'employee satisfaction rate' },
  { value: 41, suffix: '%', label: 'Reduction in burnout symptoms', description: 'within first 90 days' }
];

export default function Impact() {
  return (
    <section id="impact" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Real Impact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Numbers That <span className="gradient-text">Speak</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              Real results from real people. Here's how Soulvora is making a tangible
              difference in employees' lives every day.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stats.map(({ value, suffix, label, description }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-6 text-center transition-colors hover:bg-card-hover"
            >
              {/* Top gradient line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-opacity group-hover:opacity-100" />

              <p className="text-4xl font-bold gradient-text md:text-5xl">
                <AnimatedCounter value={value} suffix={suffix} />
              </p>
              <p className="mt-3 text-base font-medium text-foreground">{label}</p>
              <p className="mt-1 text-sm text-muted">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
