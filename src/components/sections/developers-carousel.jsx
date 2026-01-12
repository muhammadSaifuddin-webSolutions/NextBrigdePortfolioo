"use client"

import { useEffect } from "react"

export default function DevelopersCarousel() {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes scroll-left {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      
      .developer-scroll {
        animation: scroll-left 20s linear infinite;
      }
      
      .developer-scroll:hover {
        animation-play-state: paused;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const developers = ["EMAAR", "DAMAC", "BINGHATTI", "SOBHA", "WASL", "DANUBE", "AZIZI", "NAKHEEL"]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a2b56] mb-12">Developers We Work With</h2>
        <div className="relative overflow-hidden">
          <div className="developer-scroll flex gap-16 items-center whitespace-nowrap py-8">
            {[...developers, ...developers].map((dev, idx) => (
              <div key={idx} className="flex-shrink-0 text-xl font-bold text-[#1a2b56]">
                {dev}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
