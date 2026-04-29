"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700/30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700/30 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-purple-600/15 border border-purple-500/20 text-purple-300 text-sm font-medium"
            >
              Secure Wallet Infrastructure
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            >
              Generate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Blockchain Wallet
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-400 text-lg leading-8 max-w-xl"
            >
              Instantly create Ethereum and Solana wallets with seed phrases,
              public keys, and private keys. Learn wallet architecture while
              using a fast, modern, secure Web3 interface.
            </motion.p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/select-wallet"
                className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 transition font-semibold shadow-lg shadow-purple-600/20 text-center"
              >
                Generate Wallet
              </a>

              <a
                href="/features"
                className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition font-semibold text-center"
              >
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 max-w-lg">
              {[
                ["2+", "Chains"],
                ["100%", "Client Side"],
                ["Secure", "Keys"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4 text-center"
                >
                  <h3 className="text-xl sm:text-2xl font-bold">{item[0]}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right UI Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-7"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Wallet Preview</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-green-500/15 text-green-400">
                Ready
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-black/30 p-4 border border-white/5">
                <p className="text-sm text-gray-400">Seed Phrase</p>
                <p className="mt-2 text-sm leading-7 text-gray-200">
                  apple moon future glass node wallet chain secure ...
                </p>
              </div>

              <div className="rounded-2xl bg-black/30 p-4 border border-white/5">
                <p className="text-sm text-gray-400">Public Address</p>
                <p className="mt-2 text-sm break-all text-purple-300">
                  0x84Ae9b3c7A2d...
                </p>
              </div>

              <div className="rounded-2xl bg-black/30 p-4 border border-white/5">
                <p className="text-sm text-gray-400">Network</p>
                <div className="mt-3 flex gap-3">
                  <span className="px-3 py-2 rounded-xl bg-purple-600/20 text-purple-300 text-sm">
                    Ethereum
                  </span>
                  <span className="px-3 py-2 rounded-xl bg-blue-600/20 text-blue-300 text-sm">
                    Solana
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEARNING SECTION */}
      <section id="learn" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-purple-400 font-medium text-sm sm:text-base">Learn Web3 Basics</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black">
            Understand How Wallets Work
          </h2>
          <p className="mt-5 text-gray-400 leading-8 text-sm sm:text-base">
            Learn the fundamentals of blockchain wallets, keys, recovery
            phrases, and popular crypto networks before generating your own.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              title: "Seed Phrase",
              desc: "A 12 or 24 word backup phrase used to recover wallet access.",
            },
            {
              title: "Public Key",
              desc: "Your wallet address used to receive crypto assets safely.",
            },
            {
              title: "Private Key",
              desc: "A secret key used to sign transactions and control funds.",
            },
            {
              title: "Blockchain",
              desc: "A decentralized ledger that stores secure transactions.",
            },
          ].map((item, i) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={i}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-7"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 flex items-center justify-center text-xl mb-5">
                🔐
              </div>

              <h3 className="text-lg sm:text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-gray-400 leading-7 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Ethereum vs Solana */}
        <div className="mt-16 sm:mt-20 grid md:grid-cols-2 gap-4 sm:gap-8">
          <div className="rounded-[20px] sm:rounded-[28px] border border-white/10 bg-gradient-to-br from-purple-600/20 to-transparent p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl sm:text-3xl font-bold">Ethereum</h3>
              <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-purple-500/15 text-purple-300">
                Smart Contracts
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-gray-300 text-sm sm:text-base">
              <li>• Best for DeFi & NFTs</li>
              <li>• Large developer ecosystem</li>
              <li>• Highly secure decentralized network</li>
              <li>• Widely supported wallets</li>
            </ul>
          </div>

          <div className="rounded-[20px] sm:rounded-[28px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-transparent p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl sm:text-3xl font-bold">Solana</h3>
              <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/15 text-blue-300">
                High Speed
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-gray-300 text-sm sm:text-base">
              <li>• Ultra-fast transactions</li>
              <li>• Very low gas fees</li>
              <li>• Great for scalable apps</li>
              <li>• Growing ecosystem</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}