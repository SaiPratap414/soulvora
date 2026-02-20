'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';
import { AnimatedCounter, Reveal, fadeInUp } from '@/components/animated';

const approach = [
  {
    title: 'Proactive Engagement',
    copy: 'Embed wellbeing into the daily rhythm of teams, not only at moments of crisis.',
    icon: Users
  },
  {
    title: 'Emotional Capability Building',
    copy: 'Strengthen manager and employee confidence through practical, role-relevant skill building.',
    icon: HeartHandshake
  },
  {
    title: 'Data-Backed Insights',
    copy: 'Translate engagement signals into clear recommendations leadership can act on.',
    icon: BarChart3
  }
];

const services = [
  { title: 'Confidential Counselling', icon: ShieldCheck },
  { title: 'Workshops & Manager Enablement', icon: BriefcaseBusiness },
  { title: 'Engagement Campaigns', icon: Sparkles },
  { title: 'Pulse Checks & Impact Reports', icon: Activity }
];

const metrics = [
  { label: 'Engagement Increase', value: 32, suffix: '%' },
  { label: 'Attrition Reduction', value: 21, suffix: '%' },
  { label: 'Absenteeism Reduction', value: 17, suffix: '%' },
  { label: 'Employer Brand Lift', value: 28, suffix: '%' }
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-14 pt-10 md:px-10">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="rounded-3xl border border-white/50 bg-white/60 p-8 shadow-soft backdrop-blur-xl md:p-14"
      >
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
          <Handshake className="h-4 w-4" /> Enterprise Wellbeing Partner
        </p>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
          Emotional Stability. Measurable Advantage.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Soulvora helps leadership teams improve workforce resilience, engagement, and performance through strategic,
          measurable employee wellbeing programs.
        </p>
        <motion.button
          whileHover={{ y: -2, scale: 1.01 }}
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-soft"
        >
          Book a Discovery Call <ArrowRight className="h-4 w-4" />
        </motion.button>
      </motion.section>

      <Reveal className="mt-20">
        <h2 className="text-3xl font-semibold">Why Soulvora Exists</h2>
        <p className="mt-4 max-w-3xl text-muted">
          Traditional EAP models often depend on low-frequency, reactive engagement. Soulvora was built to close the
          gap between availability and meaningful participation, making emotional stability a consistent business lever.
        </p>
      </Reveal>

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <Reveal key={metric.label} className="rounded-2xl border bg-white/75 p-5">
            <p className="text-sm text-muted">{metric.label}</p>
            <p className="mt-2 text-3xl font-semibold text-primary">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </p>
          </Reveal>
        ))}
      </section>

      <section className="mt-20">
        <Reveal>
          <h2 className="text-3xl font-semibold">Differentiated Approach</h2>
        </Reveal>
        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-3"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {approach.map(({ title, copy, icon: Icon }) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              className="rounded-2xl border bg-white/80 p-6 shadow-sm"
            >
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mt-20">
        <Reveal>
          <h2 className="text-3xl font-semibold">Core Services</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map(({ title, icon: Icon }) => (
            <motion.article
              key={title}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="rounded-2xl border bg-white/80 p-6 shadow-sm hover:shadow-soft"
            >
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 rounded-3xl border bg-slate-900 p-8 text-slate-100 md:grid-cols-2 md:p-10">
        <Reveal>
          <h2 className="text-3xl font-semibold">Why Choose Soulvora</h2>
          <p className="mt-4 text-slate-300">
            We combine cultural understanding, confidentiality-first delivery, and strategic partnership to help
            organizations strengthen trust and sustain measurable outcomes.
          </p>
        </Reveal>
        <motion.ul
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {['Cultural understanding', 'Confidentiality first', 'Strategic partnership', 'Measurable outcomes'].map(
            (item) => (
              <motion.li key={item} variants={fadeInUp} className="rounded-xl bg-white/5 p-4">
                {item}
              </motion.li>
            )
          )}
        </motion.ul>
      </section>

      <motion.section
        className="mt-20 rounded-3xl border bg-white/70 p-8 text-center shadow-soft md:p-12"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-semibold">Let&apos;s Build a Healthier, Stronger Workplace</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">90-day pilot | Low risk | Measurable results</p>
        <motion.button
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-7 rounded-full bg-slate-900 px-7 py-3 font-medium text-white"
        >
          Start the Conversation
        </motion.button>
      </motion.section>

      <footer className="mt-16 border-t border-slate-200 py-8 text-sm text-muted">
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          <p>Soulvora — Strategic employee wellbeing partner for modern enterprises.</p>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-foreground">
              Contact
            </a>
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
