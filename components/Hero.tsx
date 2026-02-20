'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Heart, Sparkles } from 'lucide-react';
import { Reveal } from './animated';

const floatingIcons = [
  { Icon: Shield, x: '10%', y: '20%', delay: 0 },
  { Icon: Heart, x: '85%', y: '15%', delay: 1 },
  { Icon: Sparkles, x: '75%', y: '70%', delay: 2 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-blob" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute left-1/2 bottom-1/4 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[80px] animate-blob animation-delay-4000" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay,
            ease: 'easeInOut'
          }}
        >
          <div className="rounded-2xl border border-white/[0.06] bg-card/60 p-3 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-primary-light opacity-60" />
          </div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-muted backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-ring" />
            Your wellbeing matters — we&apos;re here for you
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            You Deserve to{' '}
            <span className="gradient-text">Thrive</span>
            <br />
            Not Just Survive
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Soulvora is your confidential companion for emotional wellness at work.
            Get real support, build resilience, and rediscover what it means to feel genuinely good — every single day.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
            >
              Explore Your Support
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-8 py-4 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
            >
              How It Works
            </motion.a>
          </div>
        </Reveal>

        {/* Scrolling indicator */}
        <motion.div
          className="mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="mx-auto h-10 w-6 rounded-full border-2 border-white/10 flex justify-center pt-2">
            <motion.div
              className="h-2 w-1 rounded-full bg-primary"
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
