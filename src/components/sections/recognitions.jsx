"use client"

import { useState } from "react"
import Image from "next/image"

export default function RecognitionsSection() {
  const [expandedAward, setExpandedAward] = useState(null)

  const awards = [
    {
      id: "black-onyx",
      title: "The Black Onyx Awards",
      year: "2025",
      image: "/award-black-onyx.jpg",
    },
    {
      id: "emaar-q2",
      title: "Emaar Broker Award Q2",
      year: "2025",
      image: "/award-emaar-q2.jpg",
    },
    {
      id: "samana",
      title: "Samana Insider Club",
      year: "2025",
      image: "/award-samana.jpg",
    },
    {
      id: "emaar-h1",
      title: "Emaar H1 Broker Award",
      year: "2025",
      image: "/award-emaar-h1.jpg",
    },
    {
      id: "binghatti",
      title: "Binghatti Annual Broker Award",
      year: "2025",
      image: "/award-binghatti.jpg",
    },
    {
      id: "emaar-q1",
      title: "Emaar Broker Award Q1",
      year: "2025",
      image: "/award-emaar-q1.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a2b56] mb-12">Our Recognitions & Achievements</h2>

        <div className="space-y-4">
          {awards.map((award) => (
            <div
              key={award.id}
              className="border-b pb-4 last:border-b-0 cursor-pointer"
              onMouseEnter={() => setExpandedAward(award.id)}
              onMouseLeave={() => setExpandedAward(null)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#1a2b56]">{award.title}</h3>
                <span className="text-gray-500">{award.year}</span>
              </div>

              {expandedAward === award.id && (
                <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                  <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
