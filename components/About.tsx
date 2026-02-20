'use client';

import { motion } from 'framer-motion';
import { Eye, Brain, HeartHandshake } from 'lucide-react';
import { Reveal, GlowCard, staggerContainer, fadeInUp } from './animated';

const features = [
  {
    icon: Eye,
    title: 'Feel Seen & Heard',
    description:
      "You're not just an employee ID. We create spaces where your feelings, struggles, and growth are acknowledged without judgment.",
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    icon: Brain,
    title: 'Build Inner Strength',
    description:
      'Practical tools and guided sessions that help you manage stress, navigate conflict, and develop emotional resilience — on your terms.',
    gradient: 'from-cyan-400 to-teal-500'
  },
  {
    icon: HeartHandshake,
    title: 'Genuine Connection',
    description:
      "Join a supportive community of colleagues. Share experiences, learn together, and know that you're never facing challenges alone.",
    gradient: 'from-pink-400 to-rose-500'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      {/* Subtle horizontal divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Why Soulvora
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Because You <span className="gradient-text">Matter</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              Work should energize you, not drain you. Soulvora exists to make sure every
              employee has access to the emotional support they truly need.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map(({ icon: Icon, title, description, gradient }) => (
            <motion.div key={title} variants={fadeInUp}>
              <GlowCard className="group h-full">
                <div className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${gradient} p-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
