"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import PropertyCard from "@/components/cards/property-card"

const PROJECTS = [
  {
    image: ["/modern-villa-dubai.jpg", "/luxury-residence-dubai.png"],
    title: "Rivera The Valley",
    developer: "Emaar Properties",
    price: "AED 4.78M",
    location: "The Valley",
    handover: "Q2 2029",
    logo: "EMAAR",
    units: "4",
    whatsappPhone: "+971454542588",
  },
  {
    image: ["/dubai-apartments.jpg", "/palm-jumeirah-dubai.jpg"],
    title: "Altan",
    developer: "Aldar Properties",
    price: "AED 1.81M",
    location: "Dubai Creek Harbour",
    handover: "Q3 2029",
    logo: "EMAAR",
    units: "1, 2, 3",
    whatsappPhone: "+971454542588",
  },
  {
    image: ["/luxury-residence-dubai.png", "/dubai-sunset-skyline.png"],
    title: "Vida Residences Hillside",
    developer: "Emaar Properties",
    price: "AED 1.82M",
    location: "Dubai Hills Estate",
    handover: "Q2 2029",
    logo: "EMAAR",
    units: "1, 2, 3",
    whatsappPhone: "+971454542588",
  },
  {
    image: ["/dubai-apartments.jpg", "/palm-jumeirah-dubai.jpg"],
    title: "Altan",
    developer: "Aldar Properties",
    price: "AED 1.81M",
    location: "Dubai Creek Harbour",
    handover: "Q3 2029",
    logo: "EMAAR",
    units: "1, 2, 3",
    whatsappPhone: "+971454542588",
  },
  {
    image: ["/luxury-residence-dubai.png", "/dubai-sunset-skyline.png"],
    title: "Vida Residences Hillside",
    developer: "Emaar Properties",
    price: "AED 1.82M",
    location: "Dubai Hills Estate",
    handover: "Q2 2029",
    logo: "EMAAR",
    units: "1, 2, 3",
    whatsappPhone: "+971454542588",
  },  {
    image: ["/dubai-apartments.jpg", "/palm-jumeirah-dubai.jpg"],
    title: "Altan",
    developer: "Aldar Properties",
    price: "AED 1.81M",
    location: "Dubai Creek Harbour",
    handover: "Q3 2029",
    logo: "EMAAR",
    units: "1, 2, 3",
    whatsappPhone: "+971454542588",
  },
  {
    image: ["/luxury-residence-dubai.png", "/dubai-sunset-skyline.png"],
    title: "Vida Residences Hillside",
    developer: "Emaar Properties",
    price: "AED 1.82M",
    location: "Dubai Hills Estate",
    handover: "Q2 2029",
    logo: "EMAAR",
    units: "1, 2, 3",
    whatsappPhone: "+971454542588",
  },  {
    image: ["/dubai-apartments.jpg", "/palm-jumeirah-dubai.jpg"],
    title: "Altan",
    developer: "Aldar Properties",
    price: "AED 1.81M",
    location: "Dubai Creek Harbour",
    handover: "Q3 2029",
    logo: "EMAAR",
    units: "1, 2, 3",
    whatsappPhone: "+971454542588",
  },
  {
    image: ["/luxury-residence-dubai.png", "/dubai-sunset-skyline.png"],
    title: "Vida Residences Hillside",
    developer: "Emaar Properties",
    price: "AED 1.82M",
    location: "Dubai Hills Estate",
    handover: "Q2 2029",
    logo: "EMAAR",
    units: "1, 2, 3",
    whatsappPhone: "+971454542588",
  },
  // 👉 duplicate or add more objects to test pagination
]
export default function ProjectsPage() {

    const ITEMS_PER_PAGE = 6
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const visibleProjects = PROJECTS.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
       <section className="relative h-[400px] w-full">
        <Image
          src="/images/screencapture-springfieldproperties-ae-projects-2026-01-05-14-57-10.jpeg"
          alt="Luxury Property"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto h-full flex flex-col justify-center px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Ovelle at The Valley</h1>
            <div className="flex gap-12 mb-8">
              <div>
                <p className="text-xs uppercase text-gray-300 mb-1">
                  Starting Price
                </p>
                <p className="text-xl font-bold">AED 7.25M</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-300 mb-1">
                  Payment Plan
                </p>
                <p className="text-xl font-bold">80/20</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-gray-100 px-8">
                View Details
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Get a Call Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2b56] mb-12">
            Off plan properties for sale
          </h2>

          {/* ✅ MAPPED CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <PropertyCard key={index} {...project} />
            ))}
          </div>

          {/* ✅ PAGINATION */}
          <div className="mt-16 flex justify-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1
              const isActive = page === currentPage

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 border rounded ${
                    isActive
                      ? "bg-[#1a2b56] text-white border-[#1a2b56]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              )
            })}

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              className="px-4 border rounded hover:bg-gray-50"
            >
              Next »
            </button>
          </div>
        </div>
      </section>
      {/* SEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#1a2b56] mb-8">1. Why Buy Real Estate in Dubai?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Dubai stands out as one of the most attractive real estate markets in the world, not just for its skyline
            and luxury lifestyle, but for its investor-friendly policies, high rental yields, and strong economic
            fundamentals.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">A Global City with World-Class Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Dubai is more than just a tourist hotspot. It&apos;s a globally connected hub for finance, trade, and
                innovation. With two major international airports, efficient road networks, and cutting-edge urban
                planning, Dubai offers unmatched accessibility both regionally and internationally.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Expat-Friendly Environment</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Over 85% of Dubai&apos;s population is made up of expatriates, and the city is designed to cater to a
                diverse, international community. From world-class healthcare and schools to thriving business zones and
                multilingual service providers, Dubai makes relocation and integration seamless.
              </p>
            </div>
            <Button className="bg-[#1a2b56] text-white mt-8 px-10">Read More</Button>
          </div>
        </div>
      </section>

      {/* Where Next Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2b56] mb-12">Where next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Discover top off-plan projects in Dubai", link: "EXPLORE OFFPLAN PROJECTS" },
              { title: "Explore top communities and areas in Dubai", link: "VIEW AREA GUIDES" },
              { title: "Read property market reports, trends, and analysis", link: "VIEW INSIGHTS" },
              { title: "Read property news, tips, and market updates", link: "VISIT OUR BLOG" },
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 border rounded-xl hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6">
                    <ChevronRight className="rotate-[-45deg] bg-gray-100 p-2 rounded w-8 h-8" />
                  </div>
                  <h3 className="font-medium mb-8">{card.title}</h3>
                </div>
                <button className="text-[10px] font-bold tracking-widest text-left hover:text-blue-600 transition-colors">
                  {card.link}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
