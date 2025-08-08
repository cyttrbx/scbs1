"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function CoinTicker() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
        );
        setInfo(res?.data || []);
      } catch (err) {
        console.error("Error fetching coins:", err);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="text-neutral-50 pt-8 pb-12 lg:pt-4 lg:pb-12 md:px-8 lg:px-32">
      <div className="h-[120px] bg-[#0b163f] flex items-center justify-center overflow-hidden">
        {/* Sliding Container */}
        <div className="whitespace-nowrap animate-ticker-left flex bg-neutral-50 py-1">
          {[...info, ...info]?.map((coin) => (
            <div
              key={`${coin.id}-${Math.random()}`}
              className="text-neutral-500 flex items-center gap-2 mx-6"
            >
              <div className="h-[20px] md:h-[40px] lg:h-[40px] relative w-auto">
                {coin?.image && (
                  <Image
                    src={coin.image}
                    alt="crypto image"
                    width={30}
                    height={30}
                    className="object-contain cursor-pointer"
                  />
                )}
              </div>
              <p className="text-blue-600 font-semibold text-[14px]">{coin?.name}</p>
              <p className="text-[13px]">[{coin?.symbol}]</p>
              <p className="text-slate-900 font-semibold text-sm">${coin?.current_price}</p>
              <p
                className={`${
                  coin?.price_change_percentage_24h > 0
                    ? "text-green-600 text-[12px]"
                    : "text-red-600 text-[12px]"
                }`}
              >
                {coin?.price_change_percentage_24h}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes ticker-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker-left {
          animation: ticker-left 400s linear infinite;
        }
      `}</style>
    </div>
  );
}
