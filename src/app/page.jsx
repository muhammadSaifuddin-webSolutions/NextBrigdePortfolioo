"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import DevelopersCarousel from "@/components/sections/developers-carousel"
import WhyChooseSection from "@/components/sections/why-choose"
import RecognitionsSection from "@/components/sections/recognitions"
import PropertyCard from "@/components/cards/property-card"
import TestimonialsCarousel from "@/components/sections/testimonials"
import VideoPlayer from "@/components/sections/video-player"
import { useState } from "react"

export default function HomePage() {
  const [luxuryCarouselIndex, setLuxuryCarouselIndex] = useState(0)
  const [launchCarouselIndex, setLaunchCarouselIndex] = useState(0)

  const luxuryDevelopments = [
    {
      image: "/luxury-villa-emaar.jpg",
      title: "Mareva at The Oasis by Emaar",
      developer: "Emaar Properties",
      price: "AED 13.47M",
      location: "The Oasis",
      handover: "Q1 2028",
      logo: "EMAAR",
      units: "4, 5, 6",
    },
    {
      image: "/luxury-villas.jpg",
      title: "Ovelle at The Valley",
      developer: "Emaar Properties",
      price: "AED 7.25M",
      location: "The Valley",
      handover: "Q4 2028",
      logo: "EMAAR",
      units: "4, 5",
    },
    {
      image: "/luxury-architecture.jpg",
      title: "Avelia at The Valley",
      developer: "Emaar Properties",
      price: "AED 7.25M",
      location: "The Valley",
      handover: "Q4 2028",
      logo: "EMAAR",
      units: "4, 5",
    },
    {
      image: "/luxury-villa-emaar.jpg",
      title: "Chevalia Estate",
      developer: "Emaar Properties",
      price: "AED 9M",
      location: "Grand Polo Club & Resort",
      handover: "Q1 2029",
      logo: "EMAAR",
      units: "5",
    },
  ]

  const latestLaunches = [
    {
      image: "/luxury-villas.jpg",
      title: "Ovelle at The Valley",
      developer: "Emaar Properties",
      price: "AED 7.25M",
      location: "The Valley",
      handover: "Q4 2028",
      logo: "EMAAR",
      units: "4, 5",
    },
    {
      image: "/luxury-architecture.jpg",
      title: "Avelia at The Valley",
      developer: "Emaar Properties",
      price: "AED 7.25M",
      location: "The Valley",
      handover: "Q4 2028",
      logo: "EMAAR",
      units: "4, 5",
    },
    {
      image: "/luxury-villa-emaar.jpg",
      title: "Chevalia Estate",
      developer: "Emaar Properties",
      price: "AED 9M",
      location: "Grand Polo Club & Resort",
      handover: "Q1 2029",
      logo: "EMAAR",
      units: "5",
    },
  ]

  const nextLuxury = () => {
    setLuxuryCarouselIndex((prev) => (prev + 1) % luxuryDevelopments.length)
  }

  const prevLuxury = () => {
    setLuxuryCarouselIndex((prev) => (prev === 0 ? luxuryDevelopments.length - 1 : prev - 1))
  }

  const nextLaunch = () => {
    setLaunchCarouselIndex((prev) => (prev + 1) % latestLaunches.length)
  }

  const prevLaunch = () => {
    setLaunchCarouselIndex((prev) => (prev === 0 ? latestLaunches.length - 1 : prev - 1))
  }

  const getVisibleItems = (items, index, screenSize= "mobile" | "tablet" | "desktop") => {
    const itemsToShow = screenSize === "mobile" ? 1 : screenSize === "tablet" ? 2 : 3
    const result = []
    for (let i = 0; i < itemsToShow; i++) {
      result.push(items[(index + i) % items.length])
    }
    return result
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Responsive */}
      <section className="relative h-64 sm:h-96 md:h-[600px] w-full">
        <Image src="/screenshot.png" alt="Luxury Property" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto h-full flex flex-col justify-center px-4 text-white">
          <div className="max-w-2xl">
            <span className="bg-white text-black px-3 py-1 text-xs font-bold rounded mb-2 sm:mb-4 inline-block">
              New Launch
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Mareva at The Oasis by Emaar</h1>
            <p className="text-xs sm:text-base md:text-lg mb-4 md:mb-8 opacity-90">
              A visionary new residential enclave that redefines luxury living in Dubai.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-sm px-6 md:px-8 text-sm md:text-base">
              View Details
            </Button>
          </div>
        </div>

        {/* Search Bar Overlay - Responsive */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto">
            <p className="text-white text-xs sm:text-sm font-bold mb-3 md:mb-4">Find Your Dream Off-Plan Property</p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <input
                type="text"
                placeholder="Search off-plan"
                className="flex-1 bg-white/20 border border-white/30 text-white placeholder:text-gray-300 px-3 sm:px-4 py-2 md:py-3 rounded outline-none text-sm md:text-base"
              />
              <Button className="bg-[#1a2b56] hover:bg-black text-white px-6 md:px-10 text-sm md:text-base w-full sm:w-auto">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Luxury Developments */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 md:gap-0 mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b56]">Premium Luxury Developments</h2>
            <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto">
              <Link href="/projects" className="text-xs sm:text-sm font-medium underline">
                More Off-plan Projects
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={prevLuxury}
                  className="p-2 border rounded-full hover:bg-white transition-colors"
                  aria-label="Previous luxury projects"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextLuxury}
                  className="p-2 border rounded-full hover:bg-white transition-colors"
                  aria-label="Next luxury projects"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {luxuryDevelopments.slice(luxuryCarouselIndex, luxuryCarouselIndex + 3).map((property, idx) => (
              <PropertyCard key={idx} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Insights Banner - Responsive */}
      <section className="relative h-48 sm:h-64 md:h-[300px] flex items-center">
        <Image src="/dubai-skyline-golden-hour.jpg" alt="Dubai Insights" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto px-4 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            Access the Latest Dubai Real Estate Insights
          </h2>
          <p className="mb-4 md:mb-8 opacity-80 max-w-xl text-xs sm:text-base">
            Comprehensive annual reports with key trends, prices, and forecasts.
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 px-6 md:px-8 text-sm md:text-base">
            Download Reports
          </Button>
        </div>
      </section>

      {/* Latest Offplan Launches */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 md:gap-0 mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b56]">Latest Offplan Launches</h2>
            <div className="flex items-center gap-2 md:gap-4 w-full sm:w-auto">
              <Link href="/projects" className="text-xs sm:text-sm font-medium underline">
                More Off-plan Projects
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={prevLaunch}
                  className="p-2 border rounded-full hover:bg-white transition-colors"
                  aria-label="Previous launches"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextLaunch}
                  className="p-2 border rounded-full hover:bg-white transition-colors"
                  aria-label="Next launches"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {latestLaunches.slice(launchCarouselIndex, launchCarouselIndex + 3).map((property, idx) => (
              <PropertyCard key={idx} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Prime Locations - Responsive Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b56]">Explore Prime Locations</h2>
            <Link href="/areas" className="text-xs sm:text-sm font-medium underline">
              View More Areas
            </Link>
          </div>
          {/* Mobile: Single column, Tablet: 2x2 grid, Desktop: Custom layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 h-auto sm:h-96 lg:h-[600px]">
            <div className="relative lg:col-span-2 lg:row-span-1 group cursor-pointer overflow-hidden rounded-lg h-48 sm:h-auto">
              <Image
                src="/palm-jebel-ali.jpg"
                alt="Palm Jebel Ali"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg md:text-xl font-bold text-white">Palm Jebel Ali</h3>
              </div>
            </div>
            <div className="relative lg:col-span-2 lg:row-span-2 group cursor-pointer overflow-hidden rounded-lg h-48 sm:h-auto">
              <Image
                src="/images/neighborhoods/downtown.png"
                alt="Downtown Dubai"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg md:text-xl font-bold text-white">Downtown Dubai</h3>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg h-48 sm:h-auto">
              <Image
                src="/business-bay.jpg"
                alt="Business Bay"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-base md:text-lg font-bold text-white">Business Bay</h3>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg h-48 sm:h-auto">
              <Image
                src="/dubai-marina.jpg"
                alt="Dubai Marina"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-base md:text-lg font-bold text-white">Dubai Marina</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers We Work With section */}
      <DevelopersCarousel />

      {/* Why Choose Springfield Properties section */}
      <WhyChooseSection />

      {/* CEO Message / Video Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b56] mb-4 md:mb-8">
              From the CEO&apos;s Desk to Your Screen
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              Step inside our world of luxury living. Explore exclusive property showcases, captivating virtual tours,
              and insightful expert guidance—all curated to bring you closer to the lifestyle you deserve.
            </p>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                Property Tours -{" "}
                <span className="text-gray-500 font-normal">Walk through some of the most stunning residences.</span>
              </p>
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                Lifestyle Insights -{" "}
                <span className="text-gray-500 font-normal">Discover what makes each community truly unique.</span>
              </p>
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                Expert Guidance -{" "}
                <span className="text-gray-500 font-normal">
                  Get tips, advice, and market updates directly from our team.
                </span>
              </p>
            </div>
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 gap-2 bg-transparent text-sm md:text-base"
            >
              <Play size={16} fill="currentColor" /> Watch on YouTube
            </Button>
          </div>
          <div className="flex-1 w-full">
            <VideoPlayer
              videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              thumbnailImage="/dubai-real-estate-ceo-video.jpg"
              title="CEO Video - Springfield Properties"
              description="AED 70,000,000"
            />
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            {
              value: "AED 3B+",
              label: "Properties Sold",
              desc: "We sell over 3 Billion worth of properties every year",
            },
            { value: "200+", label: "Professionals", desc: "We have over 200 realtors and marketing professionals" },
            { value: "17+ YEARS", label: "Experience", desc: "We have been in the real estate business since 2008" },
            { value: "5,000+", label: "Happy Clients", desc: "We have served over 5000 happy clients since 2007" },
          ].map((stat, i) => (
            <div key={i} className="p-4 md:p-8 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2b56] mb-2">{stat.value}</div>
              <div className="font-bold mb-2 md:mb-4 text-sm md:text-base">{stat.label}</div>
              <p className="text-xs md:text-sm text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognitions & Achievements section */}
      <RecognitionsSection />

      {/* Testimonials/Trust section */}
      <TestimonialsCarousel />
    </div>
  )
}
