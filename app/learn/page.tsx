"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/20 blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-purple-400 font-medium">
              Learn Blockchain Technology
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-black leading-tight">
              Web3 Wallet Guide
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-8 max-w-3xl">
              A complete beginner-friendly guide to blockchain, crypto wallets,
              public keys, private keys, seed phrases, Ethereum, Solana, and
              how ownership works in decentralized systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <div className="h-fit sticky top-28 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold mb-5">Contents</h3>

            <div className="space-y-3 text-gray-400 text-sm">
              <a href="#blockchain" className="block hover:text-white">
                What is Blockchain
              </a>
              <a href="#wallets" className="block hover:text-white">
                What is Wallet
              </a>
              <a href="#keys" className="block hover:text-white">
                Public & Private Keys
              </a>
              <a href="#seed" className="block hover:text-white">
                Seed Phrase
              </a>
              <a href="#ethereum" className="block hover:text-white">
                Ethereum
              </a>
              <a href="#solana" className="block hover:text-white">
                Solana
              </a>
              <a href="#security" className="block hover:text-white">
                Security Tips
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            {/* Blockchain */}
            <div
              id="blockchain"
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-4xl font-black">What is Blockchain?</h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                Blockchain is a decentralized digital ledger used to store
                records of transactions across multiple computers. Instead of
                relying on one central server or company, blockchain distributes
                information across a network of nodes.
              </p>

              <p className="mt-5 text-gray-400 leading-8 text-lg">
                Every transaction is grouped into a block. Each block is linked
                to the previous block using cryptography, forming a secure chain
                of blocks. This structure makes altering old data extremely
                difficult.
              </p>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {["Decentralized", "Transparent", "Secure"].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-black/30 p-4 text-center font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Wallet */}
            <div
              id="wallets"
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-4xl font-black">
                What is a Crypto Wallet?
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A crypto wallet is software or hardware that allows users to
                interact with blockchain networks. It stores cryptographic keys,
                not coins themselves.
              </p>

              <p className="mt-5 text-gray-400 leading-8 text-lg">
                Wallets are used to send cryptocurrency, receive funds, sign
                transactions, connect with decentralized apps (dApps), and prove
                ownership of assets.
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-5">
                <div className="rounded-2xl bg-purple-600/10 p-6">
                  <h3 className="text-2xl font-bold">Hot Wallet</h3>
                  <p className="mt-3 text-gray-400">
                    Connected to the internet. Easy to use and convenient.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-600/10 p-6">
                  <h3 className="text-2xl font-bold">Cold Wallet</h3>
                  <p className="mt-3 text-gray-400">
                    Offline storage for maximum security.
                  </p>
                </div>
              </div>
            </div>

            {/* Keys */}
            <div
              id="keys"
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-4xl font-black">
                Public Key & Private Key
              </h2>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-black/30 p-6">
                  <h3 className="text-2xl font-bold text-green-400">
                    Public Key
                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">
                    Your wallet address used to receive funds. Safe to share
                    with others.
                  </p>
                </div>

                <div className="rounded-2xl bg-black/30 p-6">
                  <h3 className="text-2xl font-bold text-red-400">
                    Private Key
                  </h3>

                  <p className="mt-4 text-gray-400 leading-7">
                    Secret ownership key used to sign transactions. Never share
                    it with anyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Seed */}
            <div
              id="seed"
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-4xl font-black">What is Seed Phrase?</h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A seed phrase is a set of 12 or 24 words generated randomly
                during wallet creation. It acts as the master backup for your
                wallet.
              </p>

              <p className="mt-5 text-gray-400 leading-8 text-lg">
                If you lose your device, you can restore the wallet using the
                same seed phrase. Anyone who knows this phrase can control your
                funds.
              </p>

              <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  "moon",
                  "apple",
                  "future",
                  "glass",
                  "river",
                  "wallet",
                ].map((word, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-black/30 py-3 text-center"
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>

            {/* Ethereum */}
            <div
              id="ethereum"
              className="rounded-3xl border border-white/10 bg-purple-600/10 p-8"
            >
              <h2 className="text-4xl font-black">Ethereum</h2>

              <p className="mt-6 text-gray-300 leading-8 text-lg">
                Ethereum is the most popular smart contract blockchain. It
                powers decentralized applications, NFTs, DeFi platforms, DAOs,
                and many Web3 ecosystems.
              </p>
            </div>

            {/* Solana */}
            <div
              id="solana"
              className="rounded-3xl border border-white/10 bg-blue-600/10 p-8"
            >
              <h2 className="text-4xl font-black">Solana</h2>

              <p className="mt-6 text-gray-300 leading-8 text-lg">
                Solana is known for very fast transactions and low fees. It is
                widely used for gaming, NFTs, payment systems, and scalable Web3
                apps.
              </p>
            </div>

            {/* Security */}
            <div
              id="security"
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h2 className="text-4xl font-black">Security Tips</h2>

              <ul className="mt-8 space-y-4 text-gray-400 text-lg">
                <li>• Never share your private key</li>
                <li>• Never reveal your seed phrase</li>
                <li>• Use trusted wallet software</li>
                <li>• Double check wallet addresses</li>
                <li>• Use hardware wallets for large funds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}