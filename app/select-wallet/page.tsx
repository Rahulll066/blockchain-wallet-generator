"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function SelectWallet() {
  const [selected, setSelected] = useState<string | null>(null);

  const wallets = [
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      icon: "Ξ",
      color: "from-purple-500 to-indigo-600",
      desc: "Best for smart contracts, DeFi, NFTs and Web3 apps.",
      features: [
        "Largest ecosystem",
        "Widely supported wallets",
        "Strong developer community",
      ],
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      icon: "◎",
      color: "from-emerald-500 to-cyan-600",
      desc: "Fast transactions with ultra-low fees.",
      features: [
        "High speed network",
        "Low transaction cost",
        "Great for scalable apps",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-400 font-medium"
          >
            Wallet Generator
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-5xl md:text-7xl font-black leading-tight"
          >
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Blockchain Network
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
            Select Ethereum or Solana to generate a secure wallet with recovery
            phrase, private key, and public address directly on your device.
          </p>
        </div>
      </section>

      {/* Wallet Cards */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {wallets.map((wallet, index) => (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              onClick={() => setSelected(wallet.id)}
              className="cursor-pointer"
            >
              <div
                className={`rounded-[32px] border p-8 transition-all duration-300 h-full ${
                  selected === wallet.id
                    ? `bg-gradient-to-br ${wallet.color} border-white shadow-2xl scale-[1.02]`
                    : "bg-white/5 border-white/10 hover:border-white/25 hover:-translate-y-1"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-bold">
                    {wallet.icon}
                  </span>

                  {selected === wallet.id && (
                    <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold">
                      Selected
                    </span>
                  )}
                </div>

                <h2 className="mt-6 text-4xl font-black">
                  {wallet.name}
                </h2>

                <p className="mt-2 text-sm opacity-80">
                  {wallet.symbol}
                </p>

                <p className="mt-5 leading-7 opacity-95">
                  {wallet.desc}
                </p>

                <div className="mt-8 space-y-3">
                  {wallet.features.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-black/20 px-4 py-3 text-sm"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How To Use */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto rounded-[36px] border border-white/10 bg-white/5 p-10 md:p-14">
          <h2 className="text-4xl md:text-5xl font-black text-center">
            How It Works
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Select Network",
                desc: "Choose Ethereum or Solana depending on your needs.",
              },
              {
                step: "02",
                title: "Generate Wallet",
                desc: "Create secure keys and a recovery phrase instantly.",
              },
              {
                step: "03",
                title: "Store Safely",
                desc: "Save your phrase offline and protect your keys.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-black/30 p-7"
              >
                <p className="text-purple-400 font-semibold text-sm">
                  STEP {item.step}
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Comparison */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-[32px] border border-white/10 bg-purple-600/10 p-8">
            <h3 className="text-3xl font-black">
              Ethereum
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Ideal for DeFi, NFTs, DAOs, tokens, and smart contract
              applications with the largest Web3 ecosystem.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-blue-600/10 p-8">
            <h3 className="text-3xl font-black">
              Solana
            </h3>

            <p className="mt-5 text-gray-300 leading-8">
              Perfect for gaming, fast transfers, NFT markets, and scalable
              applications with low fees.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-5xl mx-auto rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14 text-center">
          <p className="text-purple-400 font-medium">
            {selected ? "Network Selected" : "Choose a Network"}
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
            {selected
              ? `Generate ${
                  selected === "ethereum"
                    ? "Ethereum"
                    : "Solana"
                } Wallet`
              : "Generate Your Wallet"}
          </h2>

          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            {selected
              ? "Continue to generate your secure wallet with recovery phrase, private key and public address."
              : "Select Ethereum or Solana above, then continue to wallet generation."}
          </p>

          {selected && (
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-black/30">
              <span className="text-xl">
                {selected === "ethereum" ? "Ξ" : "◎"}
              </span>

              <span className="font-semibold">
                {selected === "ethereum"
                  ? "Ethereum Selected"
                  : "Solana Selected"}
              </span>
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <Link
              href={
                selected
                  ? `/generate-wallet?blockchain=${selected}`
                  : "#"
              }
              className={`group inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                selected
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/30"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed pointer-events-none"
              }`}
            >
              <span>Generate Wallet</span>
              <span className="group-hover:translate-x-1 transition">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}