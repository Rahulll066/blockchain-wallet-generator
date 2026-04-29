"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-purple-400 font-medium">
              WalletGen Platform
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-black leading-tight">
              Features &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                How to Use
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-8 max-w-3xl">
              WalletGen helps users create secure blockchain wallets for
              Ethereum and Solana. This page explains every feature, how it
              works, and how to use the platform safely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT ARE FEATURES */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10">
            <h2 className="text-4xl font-black">
              What Are the Features?
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-8">
              WalletGen is designed as a complete wallet generation tool with
              modern security, simple navigation, and educational guidance.
              Users can generate wallets, understand keys, store backup phrases,
              and manage multiple addresses.
            </p>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  title: "Ethereum Wallet Generator",
                  desc: "Create secure Ethereum wallet addresses instantly.",
                },
                {
                  title: "Solana Wallet Generator",
                  desc: "Generate Solana wallets for fast low-fee transactions.",
                },
                {
                  title: "Seed Phrase Creation",
                  desc: "Generate 12 or 24 word recovery phrases safely.",
                },
                {
                  title: "Public & Private Keys",
                  desc: "Automatically create ownership keys for every wallet.",
                },
                {
                  title: "JSON Export",
                  desc: "Download wallet data securely for backup purposes.",
                },
                {
                  title: "Multi Wallet Support",
                  desc: "Generate multiple wallet addresses from one phrase.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-black/30 p-7"
                >
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center">
            How to Use WalletGen
          </h2>

          <p className="mt-5 text-center text-gray-400 text-lg max-w-3xl mx-auto">
            Follow these simple steps to generate and secure your blockchain
            wallet properly.
          </p>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Choose Blockchain",
                desc: "Select Ethereum or Solana depending on your requirement.",
              },
              {
                step: "02",
                title: "Generate Wallet",
                desc: "Click generate to create wallet keys and seed phrase.",
              },
              {
                step: "03",
                title: "Backup Securely",
                desc: "Write down your seed phrase and store it offline safely.",
              },
              {
                step: "04",
                title: "Use Wallet",
                desc: "Send, receive, or connect wallet to blockchain apps.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
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

      {/* WHY USE */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-600/20 to-transparent p-8">
            <h2 className="text-4xl font-black">
              Why Use WalletGen?
            </h2>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>• Easy for beginners</li>
              <li>• Fast wallet generation</li>
              <li>• Multi-chain support</li>
              <li>• Modern responsive UI</li>
              <li>• Strong privacy approach</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-transparent p-8">
            <h2 className="text-4xl font-black">
              Best Practices
            </h2>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>• Never share private keys</li>
              <li>• Keep seed phrase offline</li>
              <li>• Verify wallet addresses</li>
              <li>• Use trusted devices only</li>
              <li>• Backup in multiple safe places</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-white/5 p-10">
          <h2 className="text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-2xl font-bold">
                Is WalletGen free?
              </h3>
              <p className="mt-3 text-gray-400 leading-7">
                Yes, wallet generation can be used freely.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Are my keys stored online?
              </h3>
              <p className="mt-3 text-gray-400 leading-7">
                No. Wallets should be generated client-side on your device.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Which blockchain networks are supported?
              </h3>
              <p className="mt-3 text-gray-400 leading-7">
                Ethereum and Solana are supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-5xl mx-auto rounded-[36px] border border-white/10 bg-white/5 p-12 text-center">
          <p className="text-purple-400 font-medium">
            Ready to Start?
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black">
            Generate Your Wallet
          </h2>

          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
            Create Ethereum and Solana wallets instantly with WalletGen.
          </p>

          <Link
            href="/generate-wallet"
            className="inline-block mt-8 px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-500 transition font-semibold"
          >
            Launch App
          </Link>
        </div>
      </section>
    </main>
  );
}