"use client"

import React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

// interface PropertyCardProps {
//   image: string | string[]
//   title: string
//   developer: string
//   price: string
//   location: string
//   handover?: string
//   logo?: string
//   units?: string
//   whatsappPhone?: string
// }

export default function PropertyCard({
  image,
  title,
  developer,
  price,
  location,
  handover,
  logo,
  units,
  whatsappPhone = "+971454542588",
}) {
  const images = Array.isArray(image) ? image : [image]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${title}. Could you please provide more information?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappPhone.replace(/\D/g, "")}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="group bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {handover && (
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold rounded">
            Handover: {handover}
          </div>
        )}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>
            {/* Image indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg mb-1 leading-tight">{title}</h3>
            <p className="text-xs text-gray-500">by {developer}</p>
          </div>
          {logo && <div className="text-xs font-bold">{logo}</div>}
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Starting Price</p>
          <p className="font-bold text-[#1a2b56]">{price}</p>
        </div>

        <div className="mt-4 flex justify-between items-center text-xs text-gray-500 border-t pt-4">
          <span>{location}</span>
          {units && <span>{units}</span>}
        </div>

        <Button onClick={handleWhatsApp} className="w-full mt-4 bg-[#1a2b56] hover:bg-[#001433] text-white">
          Enquire Now
        </Button>
      </div>
    </div>
  )
}
