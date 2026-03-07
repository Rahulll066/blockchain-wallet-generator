"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function SelectWallet() {
  const [selected, setSelected] = useState<string | null>(null);

  const wallets = [
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      description: "Generate Ethereum (EVM-compatible) wallet with Ed25519 keys",
      color: "from-purple-500 to-purple-700",
      icon: "Ξ",
    },
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      description: "Generate Bitcoin wallet with ECDSA secp256k1 keys",
      color: "from-orange-500 to-orange-700",
      icon: "₿",
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      description: "Generate Solana wallet with Ed25519 keypairs",
      color: "from-green-500 to-green-700",
      icon: "◎",
    },
    {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      description: "Generate Cardano wallet with enhanced security",
      color: "from-blue-500 to-blue-700",
      icon: "₳",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold mb-4">Select Blockchain</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Choose a blockchain network to generate your wallet for. Each blockchain
          uses different cryptographic algorithms to secure your assets.
        </p>
      </motion.div>

      {/* Wallet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mb-12">
        {wallets.map((wallet, index) => (
          <motion.div
            key={wallet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={() => setSelected(wallet.id)}
            className="cursor-pointer"
          >
            <div
              className={`relative h-full p-6 rounded-xl border-2 transition-all duration-300 ${
                selected === wallet.id
                  ? `border-white bg-gradient-to-br ${wallet.color} shadow-lg shadow-purple-500/50`
                  : "border-gray-700 hover:border-gray-500 bg-gradient-to-br from-gray-900 to-black"
              }`}
            >
              {/* Crypto Icon */}
              <div className="text-5xl font-bold mb-4 text-center">
                {wallet.icon}
              </div>

              {/* Wallet Info */}
              <h3 className="text-2xl font-bold mb-2 text-center">{wallet.name}</h3>
              <p className="text-sm text-gray-300 text-center mb-4">
                {wallet.symbol}
              </p>
              <p className="text-sm text-gray-400 text-center">
                {wallet.description}
              </p>

              {/* Selection Indicator */}
              {selected === wallet.id && (
                <motion.div
                  layoutId="selectedIndicator"
                  className="absolute top-4 right-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Link href="/">
          <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-colors">
            Back to Home
          </button>
        </Link>

        <Link href={selected ? `/generate-wallet?blockchain=${selected}` : "#"}>
          <button
            disabled={!selected}
            className={`px-8 py-3 rounded-xl font-semibold transition-all ${
              selected
                ? "bg-purple-600 hover:bg-purple-700 cursor-pointer shadow-lg shadow-purple-500/50"
                : "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
            }`}
          >
            Generate Wallet
          </button>
        </Link>
      </motion.div>

      {/* Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-24 max-w-4xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold mb-4">Why Different Blockchains?</h3>
        <p className="text-gray-400 mb-4">
          Different blockchains use different cryptographic algorithms for security:
        </p>
        <ul className="space-y-3 text-gray-400">
          <li>
            <strong className="text-white">Ethereum & Bitcoin:</strong> Use ECDSA (Elliptic Curve Digital Signature Algorithm)
          </li>
          <li>
            <strong className="text-white">Solana & Cardano:</strong> Use EdDSA with Ed25519 curve for enhanced security
          </li>
          <li>
            <strong className="text-white">Seed Phrases:</strong> All wallets use BIP39 standard for generating 12/24 word recovery phrases
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
