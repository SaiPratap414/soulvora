'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircleHeart, BookOpen, Activity, Headphones, Users } from 'lucide-react';
import { Reveal, GlowCard, staggerContainer, fadeInUp } from './animated';

const services = [
  {
    icon: ShieldCheck,
    title: 'Confidential Counselling',
    description: 'Talk to licensed professionals in complete privacy. No records shared with your employer — ever.',
    color: 'text-violet-400'
  },
  {
    icon: MessageCircleHeart,
    title: '24/7 Emotional Support',
    description: "Feeling overwhelmed at 2 AM? We're here. Chat, call, or text whenever you need someone.",
    color: 'text-cyan-400'
  },
  {
    icon: BookOpen,
    title: 'Self-Paced Wellbeing Courses',
    description: 'Learn stress management, mindfulness, and emotional skills through bite-sized, practical modules.',
    color: 'text-pink-400'
  },
  {
    icon: Users,
    title: 'Peer Support Circles',
    description: 'Join moderated group sessions with colleagues who understand. Share, listen, and grow together.',
    color: 'text-amber-400'
  },
  {
    icon: Headphones,
    title: 'Guided Meditation & Calm',
    description: 'Access a growing library of guided sessions designed to help you decompress and reset.',
    color: 'text-emerald-400'
  },
  {
    icon: Activity,
    title: 'Personal Wellness Tracker',
    description: 'Monitor your mood, energy, and progress over time — insights that help you understand yourself better.',
    color: 'text-blue-400'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Background accent */}
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Your Support System
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Everything You Need to{' '}
              <span className="gradient-text">Feel Better</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              From one-on-one counselling to self-guided tools, Soulvora wraps around you
              with the right support at the right time.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map(({ icon: Icon, title, description, color }) => (
            <motion.div key={title} variants={fadeInUp}>
              <GlowCard className="group h-full">
                <Icon className={`h-7 w-7 ${color} transition-transform group-hover:scale-110`} />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
