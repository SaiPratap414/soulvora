'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from './animated';

export default function CTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background blobs */}
      <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm text-muted">
            <Sparkles className="h-4 w-4 text-accent" />
            Free & confidential — always
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Ready to Feel{' '}
            <span className="gradient-text">Better?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            You don&apos;t need to have it all figured out. Just take the first step —
            reach out, and we&apos;ll meet you exactly where you are.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-8 py-4 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
            >
              Book a Free Session
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-muted/60">
            No strings attached · 100% confidential · Available 24/7
          </p>
        </Reveal>
      </div>
    </section>
  );
}
