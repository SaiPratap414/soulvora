'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const footerLinks = {
  Support: ['Talk to Someone', 'Self-Help Resources', 'Peer Circles', 'Crisis Line'],
  Company: ['About Us', 'Our Mission', 'Careers', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="group flex items-center gap-2.5">
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-white">S</span>
              </div>
              <span className="text-lg font-semibold">
                Soul<span className="gradient-text">vora</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Your trusted companion for emotional wellbeing at work. Confidential,
              compassionate, always here.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Soulvora. All rights reserved.
          </p>
          <motion.p
            className="flex items-center gap-1.5 text-sm text-muted"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            Made with <Heart className="h-3.5 w-3.5 text-pink-500 fill-pink-500" /> for every employee
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
