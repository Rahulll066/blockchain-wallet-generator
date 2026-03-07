"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">

      {/* HERO SECTION */}

      <section className="flex flex-col items-center justify-center text-center h-screen px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-6"
        >
          Blockchain Wallet Generator
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-400 max-w-2xl"
        >
          Create secure crypto wallets instantly. Learn how blockchain,
          seed phrases, and public/private keys work while generating
          your own wallet.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-bold"
        >
          Generate Wallet
        </motion.button>

      </section>

      {/* WHAT IS BLOCKCHAIN */}

      <section className="py-24 max-w-5xl text-center px-6">

        <h2 className="text-4xl font-bold mb-8">What is Blockchain?</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Blockchain is a decentralized digital ledger that records
          transactions across a distributed network of computers.
          Once recorded, transactions cannot be altered which makes
          blockchain highly secure and transparent.
        </p>

      </section>

      {/* WHAT IS A WALLET */}

      <section className="py-24 max-w-5xl text-center px-6">

        <h2 className="text-4xl font-bold mb-8">What is a Crypto Wallet?</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          A crypto wallet allows you to store, send, and receive
          cryptocurrency. Instead of storing coins directly, a wallet
          stores cryptographic keys that give access to your funds
          on the blockchain.
        </p>

      </section>

      {/* SEED PHRASE */}

      <section className="py-24 max-w-5xl text-center px-6">

        <h2 className="text-4xl font-bold mb-8">What is a Seed Phrase?</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          A seed phrase is a set of 12 or 24 randomly generated words
          that acts as the master key to your crypto wallet.
          It allows you to recover your wallet if you lose access
          to your device. Anyone with your seed phrase can control
          your funds, so it must be kept secure.
        </p>

      </section>

      {/* PUBLIC PRIVATE KEY */}

      <section className="py-24 grid md:grid-cols-2 gap-12 max-w-5xl px-6">

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Public Key</h3>

          <p className="text-gray-400">
            The public key is your wallet address. It can be shared
            with others to receive cryptocurrency. Anyone can send
            funds to this address.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Private Key</h3>

          <p className="text-gray-400">
            The private key is a secret cryptographic key that gives
            you control over your wallet. It is used to sign transactions
            and must never be shared with anyone.
          </p>
        </div>

      </section>

      {/* SOLANA VS ETHEREUM */}

      <section className="py-24 grid md:grid-cols-2 gap-12 max-w-5xl px-6">

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Solana</h3>

          <p className="text-gray-400">
            Solana is a high-performance blockchain designed for fast
            transactions and low fees. It uses Proof of History (PoH)
            along with Proof of Stake (PoS) to achieve high scalability.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Ethereum</h3>

          <p className="text-gray-400">
            Ethereum is the most widely used blockchain for smart
            contracts and decentralized applications (dApps).
            It enables developers to build DeFi platforms,
            NFTs, and other blockchain applications.
          </p>
        </div>

      </section>

      {/* HOW WALLETS ARE CREATED */}

      <section className="py-24 max-w-5xl text-center px-6">

        <h2 className="text-4xl font-bold mb-8">
          How Wallets Are Created
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Crypto wallets are created using cryptographic algorithms.
          A random seed phrase is generated first. From the seed phrase,
          a private key is derived using deterministic algorithms.
          The public key is then generated from the private key,
          which becomes your wallet address on the blockchain.
        </p>

      </section>

      {/* CTA */}

      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Generate Your Wallet
        </h2>

        <button className="px-10 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-bold">
          Generate Wallet
        </button>

      </section>

    </div>
  );
}