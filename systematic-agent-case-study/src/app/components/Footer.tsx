'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] text-white">
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16 pb-16 border-b border-white/8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center">
                  <span className="text-white text-sm font-black">SA</span>
                </div>
                <div>
                  <p className="text-white font-bold">Systematic Agent</p>
                  <p className="text-gray-500 text-xs">Product Design Case Study</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                A systematic approach to solving complex UX challenges through research, AI design, and iteration.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="mailto:designer@example.com"
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-white/6 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/40 transition-all duration-200 text-sm font-medium"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Email</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-white/6 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/40 transition-all duration-200 text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>

          {/* Closing tag */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-3">
                Thanks for reading.
              </p>
              <p className="text-gray-500">This case study reflects the kind of work I lead every day, research-driven, impact-focused, and deeply collaborative.</p>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Senior Product Designer Portfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Available for opportunities
              </span>
              <span>Lead Product Designer</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
