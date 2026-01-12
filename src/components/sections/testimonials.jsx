"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Vinagra Bhasin",
      timeAgo: "1 month ago",
      rating: 5,
      text: "Bipin Helped us get a property in UAE. Very professional and a great help. Will use him again in the future.",
      verified: true,
    },
    {
      name: "theeshu r",
      timeAgo: "1 month ago",
      rating: 5,
      text: "Excellent service and extremely helpful throughout the entire process of buying my first property in Dubai. Ranusha did a...",
      verified: true,
    },
    {
      name: "Eaghan Sahu",
      timeAgo: "2 months ago",
      rating: 5,
      text: "Maitree has been incredibly helpful and proactive throughout the entire process. She's got a great personality and a clear...",
      verified: true,
    },
    {
      name: "navid ramezani",
      timeAgo: "2 months ago",
      rating: 5,
      text: "رفتار بسیار عالی و حرفه ای، تجربه یک فرد داد. تجزیه دروس درخشاں برای ای",
      verified: true,
    },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a2b56] mb-12">The Trust We&apos;ve Earned</h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((offset) => {
              const idx = (currentIndex + offset) % testimonials.length
              const testimonial = testimonials[idx]

              return (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.timeAgo}</p>
                    </div>
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                        <circle cx="12" cy="12" r="12" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3">{testimonial.text}</p>
                </div>
              )
            })}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 border rounded-full hover:bg-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 border rounded-full hover:bg-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
