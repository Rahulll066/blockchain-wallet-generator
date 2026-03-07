"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Copy, Check, RotateCcw } from "lucide-react";

interface Wallet {
  seedPhrase: string;
  privateKey: string;
  publicKey: string;
  address: string;
  blockchain: string;
}

export default function GenerateWallet() {
  const searchParams = useSearchParams();
  const blockchain = searchParams.get("blockchain") || "ethereum";
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [showSeedPhrase, setShowSeedPhrase] = useState(false);

  // Generate mock wallet data (in real app, use ethers.js or solana/web3.js)
  const generateWallet = () => {
    const generateRandomHex = (length: number) => {
      return Array.from({ length }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join("");
    };

    const generateSeedPhrase = () => {
      const words = [
        "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract",
        "accent", "accept", "access", "accident", "account", "accuse", "achieve", "acid",
        "acquire", "across", "act", "action", "active", "actor", "actual", "acts",
      ];

      return Array.from({ length: 12 }, () =>
        words[Math.floor(Math.random() * words.length)]
      ).join(" ");
    };

    const newWallet: Wallet = {
      seedPhrase: generateSeedPhrase(),
      privateKey: `0x${generateRandomHex(64)}`,
      publicKey: `0x${generateRandomHex(128)}`,
      address: `0x${generateRandomHex(40)}`,
      blockchain: blockchain.charAt(0).toUpperCase() + blockchain.slice(1),
    };

    setWallet(newWallet);
  };

  useEffect(() => {
    generateWallet();
  }, [blockchain]);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const blockchainIcons: Record<string, string> = {
    ethereum: "Ξ",
    bitcoin: "₿",
    solana: "◎",
    cardano: "₳",
  };

  const blockchainColors: Record<string, string> = {
    ethereum: "from-purple-500 to-purple-700",
    bitcoin: "from-orange-500 to-orange-700",
    solana: "from-green-500 to-green-700",
    cardano: "from-blue-500 to-blue-700",
  };

  if (!wallet) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⚙️</div>
          <p>Generating wallet...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-5xl">
              {blockchainIcons[blockchain as keyof typeof blockchainIcons]}
            </div>
            <h1 className="text-5xl font-extrabold">{wallet.blockchain} Wallet</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Your secure blockchain wallet has been generated. Store these details safely.
          </p>
        </motion.div>

        {/* Wallet Details Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {/* Seed Phrase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-red-900/30 to-red-900/10 border border-red-700/50 rounded-xl p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  🔐 Seed Phrase (BIP39)
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Keep this safe. Anyone with this phrase can access your wallet.
                </p>
              </div>
              <button
                onClick={() => setShowSeedPhrase(!showSeedPhrase)}
                className="px-4 py-2 bg-red-700/50 hover:bg-red-700 rounded-lg text-sm font-semibold transition-colors"
              >
                {showSeedPhrase ? "Hide" : "Show"}
              </button>
            </div>

            <div className={`relative ${!showSeedPhrase ? "blur-sm" : ""}`}>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm leading-relaxed break-words">
                {wallet.seedPhrase}
              </div>
              {showSeedPhrase && (
                <button
                  onClick={() => copyToClipboard(wallet.seedPhrase, "seed")}
                  className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  {copied === "seed" ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              )}
            </div>
          </motion.div>

          {/* Private Key */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-yellow-900/30 to-yellow-900/10 border border-yellow-700/50 rounded-xl p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  🔑 Private Key
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Never share this key. It signs your transactions.
                </p>
              </div>
              <button
                onClick={() => setShowPrivateKey(!showPrivateKey)}
                className="px-4 py-2 bg-yellow-700/50 hover:bg-yellow-700 rounded-lg text-sm font-semibold transition-colors"
              >
                {showPrivateKey ? "Hide" : "Show"}
              </button>
            </div>

            <div className={`relative ${!showPrivateKey ? "blur-sm" : ""}`}>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm break-all">
                {wallet.privateKey}
              </div>
              {showPrivateKey && (
                <button
                  onClick={() => copyToClipboard(wallet.privateKey, "private")}
                  className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  {copied === "private" ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              )}
            </div>
          </motion.div>

          {/* Public Key */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-700/50 rounded-xl p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  📤 Public Key
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Safe to share. Used to verify your signatures.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(wallet.publicKey, "public")}
                className="px-4 py-2 bg-green-700/50 hover:bg-green-700 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                {copied === "public" ? (
                  <>
                    <Check size={18} className="text-green-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} /> Copy
                  </>
                )}
              </button>
            </div>

            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm break-all">
              {wallet.publicKey}
            </div>
          </motion.div>

          {/* Wallet Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-700/50 rounded-xl p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  📍 Wallet Address
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Your receiving address. Share this to receive funds.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(wallet.address, "address")}
                className="px-4 py-2 bg-blue-700/50 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
              >
                {copied === "address" ? (
                  <>
                    <Check size={18} className="text-green-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} /> Copy
                  </>
                )}
              </button>
            </div>

            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm break-all">
              {wallet.address}
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <button
            onClick={generateWallet}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-purple-500/50"
          >
            <RotateCcw size={18} /> Generate New Wallet
          </button>

          <Link href="/select-wallet">
            <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-colors">
              Different Blockchain
            </button>
          </Link>

          <Link href="/">
            <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-colors">
              Back to Home
            </button>
          </Link>
        </motion.div>

        {/* Security Info */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">🛡️ Security Best Practices</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              ✅ <strong className="text-white">Write down your seed phrase</strong> and store it in a safe place
            </li>
            <li>
              ✅ <strong className="text-white">Never share your private key</strong> with anyone
            </li>
            <li>
              ✅ <strong className="text-white">Use a hardware wallet</strong> for long-term holdings
            </li>
            <li>
              ✅ <strong className="text-white">Test small amounts first</strong> before sending large transactions
            </li>
            <li>
              ⚠️ <strong className="text-white">This is a demo wallet</strong> - for production, use official wallets like MetaMask, Phantom, or Ledger
            </li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
