
"use client"

import { FaEthereum, FaMastodon } from "react-icons/fa";

export default function Page() {
  const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      alert("Copy!")
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <h1 className="text-3xl md:text-6xl font-bold md:mb-8 mb-5">👋 I am Yuta Kobayashi</h1>
        <div className="flex justify-center text-4xl b gap-x-4 items-center">
          <button onClick={() => copyToClipboard("0xDB50D9D6BB07B8738c1c9473649a76C02E4280F1")}>
            <FaEthereum />
          </button>
          <a href="https://mastodon.social/@yutakobayashi">
            <FaMastodon className="text-[#5b4be1]" />
          </a>
        </div>
      </div>
    </div>
  );
}