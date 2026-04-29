"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-wide">
          Wallet<span className="text-purple-500">Gen</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <Link
            href="/features"
            className="hover:text-white transition"
          >
            Features
          </Link>

          <Link
            href="/learn"
            className="hover:text-white transition"
          >
            Learn
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/select-wallet"
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-semibold text-sm shadow-lg shadow-purple-600/25 hover:shadow-purple-500/40"
        >
        <span>Generate Wallet</span>

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
        </Link>
      </div>
    </motion.nav>
  );
}