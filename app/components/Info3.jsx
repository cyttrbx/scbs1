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
    <div className="ticker-container">
      <div className="ticker-track bg-neutral-50 pb-1 pt-[6px]">
        {[...info, ...info]?.map((coin) => (
          <div key={`${coin.id}-${Math.random()}`} className="coin-item">
            <div className="coin-image">
              {coin?.image && (
                <Image
                  src={coin.image}
                  alt="crypto image"
                  width={25}
                  height={25}
                  className="object-contain cursor-pointer"
                />
              )}
            </div>
            <p className="coin-name">{coin?.name}</p>
            <p className="coin-symbol">[{coin?.symbol}]</p>
            <p className="coin-price mt-1">${coin?.current_price}</p>
            <p
              className={
                coin?.price_change_percentage_24h > 0 ? "coin-up mt-1" : "coin-down mt-1"
              }
            >
              {coin?.price_change_percentage_24h}%
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-container {
          overflow: hidden;
          background: #0b163f;
          height: 100px;
          display: flex;
          align-items: center;
        }

        .ticker-track {
          display: inline-block; /* Safari fix */
          white-space: nowrap;
          -webkit-animation: ticker-left 120s linear infinite;
          animation: ticker-left 300s linear infinite;
        }

        .coin-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 1.20rem;
          color: #555;
        }

        .coin-name {
          color: #2563eb;
          font-weight: 600;
          font-size: 16px;
        }

        .coin-symbol {
          font-size: 15px;
        }

        .coin-price {
          color: #1f2937;
          font-weight: 600;
          font-size: 14px;
        }

        .coin-up {
          color: #16a34a;
          font-size: 14px;
        }

        .coin-down {
          color: #dc2626;
          font-size: 14px;
        }

        @-webkit-keyframes ticker-left {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }
        }

        @keyframes ticker-left {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
