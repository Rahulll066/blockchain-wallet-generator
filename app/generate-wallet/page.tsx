"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Copy,
  Check,
  RefreshCcw,
  Eye,
  EyeOff,
  Shield,
  Download,
} from "lucide-react";
import Navbar from "../components/Navbar";

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
  const [copied, setCopied] = useState("");
  const [showSeed, setShowSeed] = useState(false);
  const [showPrivate, setShowPrivate] = useState(false);

  const networks = {
    ethereum: {
      name: "Ethereum",
      icon: "Ξ",
      color: "from-purple-500 to-indigo-600",
    },
    solana: {
      name: "Solana",
      icon: "◎",
      color: "from-emerald-500 to-cyan-600",
    },
  };

  const current =
    networks[blockchain as keyof typeof networks] ||
    networks.ethereum;

  const randomHex = (len: number) =>
    Array.from({ length: len }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("");

  const generateSeed = () => {
    const words = [
      "future",
      "moon",
      "wallet",
      "secure",
      "river",
      "glass",
      "rocket",
      "chain",
      "node",
      "dream",
      "alpha",
      "stone",
      "ocean",
      "light",
      "forest",
      "code",
      "token",
      "smart",
      "bridge",
      "power",
    ];

    return Array.from({ length: 12 }, () =>
      words[Math.floor(Math.random() * words.length)]
    ).join(" ");
  };

  const generateWallet = () => {
    setWallet({
      seedPhrase: generateSeed(),
      privateKey: `0x${randomHex(64)}`,
      publicKey: `0x${randomHex(96)}`,
      address: `0x${randomHex(40)}`,
      blockchain: current.name,
    });
  };

  useEffect(() => {
    generateWallet();
  }, [blockchain]);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 1800);
  };

  const downloadWallet = () => {
    if (!wallet) return;

    const walletData = {
      blockchain: wallet.blockchain,
      address: wallet.address,
      publicKey: wallet.publicKey,
      privateKey: wallet.privateKey,
      seedPhrase: wallet.seedPhrase,
      createdAt: new Date().toISOString(),
    };

    const blob = new Blob(
      [JSON.stringify(walletData, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `${wallet.blockchain.toLowerCase()}-wallet.json`;
    a.click();

    URL.revokeObjectURL(url);
  };

  if (!wallet) return null;

  const secretWords = wallet.seedPhrase.split(" ");

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
      <section className="pt-32 px-6 pb-12">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r ${current.color}`}
          >
            <span className="text-xl">{current.icon}</span>
            <span className="font-semibold">
              {wallet.blockchain} Wallet Generated
            </span>
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black">
            Your Wallet is Ready
          </h1>

          <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
            Save your recovery phrase securely. Anyone with your
            private key or seed phrase can access your wallet.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Seed Phrase */}
            <div className="rounded-[30px] border border-red-500/20 bg-red-500/5 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black">
                    Seed Phrase
                  </h2>
                  <p className="mt-2 text-gray-400">
                    12-word recovery phrase
                  </p>
                </div>

                <button
                  onClick={() => setShowSeed(!showSeed)}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
                >
                  {showSeed ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <div
                className={`mt-7 grid grid-cols-2 md:grid-cols-3 gap-4 ${
                  !showSeed ? "blur-sm select-none" : ""
                }`}
              >
                {secretWords.map((word, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-black/30 px-4 py-3"
                  >
                    <span className="text-gray-500 mr-2">
                      {i + 1}.
                    </span>
                    {word}
                  </div>
                ))}
              </div>

              {showSeed && (
                <button
                  onClick={() =>
                    copyText(wallet.seedPhrase, "seed")
                  }
                  className="mt-6 px-5 py-3 rounded-xl bg-red-500/15 hover:bg-red-500/20 flex items-center gap-2"
                >
                  {copied === "seed" ? (
                    <>
                      <Check size={18} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy Seed Phrase
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Private Key */}
            <div className="rounded-[30px] border border-yellow-500/20 bg-yellow-500/5 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black">
                    Private Key
                  </h2>
                  <p className="mt-2 text-gray-400">
                    Never share this key
                  </p>
                </div>

                <button
                  onClick={() =>
                    setShowPrivate(!showPrivate)
                  }
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
                >
                  {showPrivate ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <div
                className={`mt-6 rounded-2xl bg-black/30 p-5 break-all text-sm ${
                  !showPrivate ? "blur-sm select-none" : ""
                }`}
              >
                {wallet.privateKey}
              </div>

              {showPrivate && (
                <button
                  onClick={() =>
                    copyText(wallet.privateKey, "private")
                  }
                  className="mt-6 px-5 py-3 rounded-xl bg-yellow-500/15 hover:bg-yellow-500/20 flex items-center gap-2"
                >
                  {copied === "private" ? (
                    <>
                      <Check size={18} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy Private Key
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Public Address */}
            <div className="rounded-[30px] border border-green-500/20 bg-green-500/5 p-8">
              <h2 className="text-3xl font-black">
                Public Address
              </h2>

              <p className="mt-2 text-gray-400">
                Share to receive funds
              </p>

              <div className="mt-6 rounded-2xl bg-black/30 p-5 break-all text-sm">
                {wallet.address}
              </div>

              <button
                onClick={() =>
                  copyText(wallet.address, "address")
                }
                className="mt-6 px-5 py-3 rounded-xl bg-green-500/15 hover:bg-green-500/20 flex items-center gap-2"
              >
                {copied === "address" ? (
                  <>
                    <Check size={18} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Address
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-black">
                Wallet Details
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-gray-500 text-sm">
                    Network
                  </p>
                  <p className="font-semibold">
                    {wallet.blockchain}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Status
                  </p>
                  <p className="font-semibold text-green-400">
                    Active
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Security
                  </p>
                  <p className="font-semibold">
                    Client Side
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-3">
                <Shield className="text-purple-400" />
                <h3 className="text-2xl font-black">
                  Safety Tips
                </h3>
              </div>

              <ul className="mt-6 space-y-4 text-gray-400">
                <li>• Store phrase offline</li>
                <li>• Never share keys</li>
                <li>• Verify addresses</li>
                <li>• Backup safely</li>
              </ul>
            </div>

            <div className="space-y-4">
              <button
                onClick={generateWallet}
                className="w-full px-6 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 font-semibold flex items-center justify-center gap-2"
              >
                <RefreshCcw size={18} />
                Generate New Wallet
              </button>

              <button
                onClick={downloadWallet}
                className="w-full px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 font-semibold flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download Wallet
              </button>

              <Link
                href="/select-wallet"
                className="block text-center w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 font-semibold"
              >
                Change Network
              </Link>

              <Link
                href="/"
                className="block text-center w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 font-semibold"
              >
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}