"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Freezeher",
    initial: "F",
    rating: 5,
    review:
      "SO good!!! The burgers were saucy and flavourful. The loaded chips were the best I've ever had. 5pm on a Friday and it was very quiet! Can't recommend this place enough.",
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    name: "Rohan Shaw",
    initial: "R",
    rating: 5,
    review:
      "That little gem you find by mistake! Great food. Great value. I had the loaded fries and it could have fed 2 people. The Chipotle Mayo was great and the chips where extra crunchy. The chicken was beautifully seasoned.",
    bgColor: "bg-red-500",
  },
  {
    id: 3,
    name: "Carolina Hernández",
    initial: "C",
    rating: 5,
    review:
      "Best burgers I've had in Melb. Juicy and tasty! We order the Hunger Valley, the Aussie & the Mexican and all of them were great!",
    bgColor: "bg-red-500",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-semibold mr-4`}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
