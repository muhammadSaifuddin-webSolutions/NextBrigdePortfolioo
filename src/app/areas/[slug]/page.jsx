"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const areasData= {
  "palm-jumeirah": {
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    image: "/palm-jumeirah-dubai-aerial-view.jpg",
    heroImage: "/palm-jumeirah-dubai-luxury-island-community.jpg",
    coordinates: { lat: 25.1452, lng: 55.1482 },
    address: "Palm Jumeirah, Dubai, UAE",
    rating: 4.8,
    reviews: 45,
    galleryImages: ["/palm-jumeirah-beach-villa.jpg", "/palm-jumeirah-aerial-landscape.jpg", "/palm-jumeirah-waterfront.jpg"],
    sections: [
      {
        heading: "Overview",
        content:
          "Palm Jumeirah stands as one of the world's most ambitious engineering feats and Dubai's most prestigious address. This man-made island, shaped like a palm tree, extends into the Arabian Gulf and offers an unparalleled lifestyle combining beachfront luxury with urban convenience. Residents enjoy exclusive access to pristine beaches, five-star hotels, and a vibrant dining scene, all while being just minutes away from Dubai's main business districts.",
      },
      {
        heading: "Property Types",
        content:
          "The island features an impressive range of residential options, from lavish beachfront villas on the fronds to sophisticated apartments in the trunk area. Premium penthouses offer panoramic views of the Dubai skyline and Arabian Gulf, while garden homes provide private beach access and landscaped outdoor spaces. Each property type is designed to maximize the unique island setting and provide residents with resort-style living.",
      },
      {
        heading: "Lifestyle & Amenities",
        content:
          "Life on Palm Jumeirah is defined by luxury and convenience. Residents have access to world-renowned hotels including Atlantis The Palm, numerous beach clubs, upscale restaurants, and premium shopping destinations. The Palm Monorail provides easy connectivity to the mainland, while the boardwalk offers scenic walking and jogging paths. Water sports facilities, spa services, and recreational activities are readily available, creating a true island resort experience.",
      },
      {
        heading: "Investment Potential",
        content:
          "Palm Jumeirah remains one of Dubai's most sought-after investment locations, offering strong rental yields and consistent capital appreciation. The limited supply of beachfront properties, combined with high demand from both local and international buyers, ensures robust market performance. Properties here attract premium rental rates, particularly for short-term vacation rentals, making it an attractive option for investors seeking both lifestyle and returns.",
      },
      {
        heading: "Connectivity",
        content:
          "Despite its island location, Palm Jumeirah offers excellent connectivity to key Dubai destinations. Dubai Marina is just 10 minutes away, Downtown Dubai can be reached in 20 minutes, and Dubai International Airport is approximately 30 minutes by car. The upcoming expansion of public transport links will further enhance accessibility, ensuring residents enjoy both exclusivity and convenience.",
      },
    ],
    faq: [
      {
        question: "What types of properties are available in Palm Jumeirah?",
        answer:
          "Palm Jumeirah offers a diverse range of properties including waterfront villas, luxury apartments, penthouses, and townhouses. Each property is designed with premium finishes and direct or panoramic views of the Arabian Gulf.",
      },
      {
        question: "Is Palm Jumeirah a good investment?",
        answer:
          "Yes, Palm Jumeirah is one of Dubai's most desirable investment locations with strong capital appreciation potential and attractive rental yields, especially for short-term vacation rentals.",
      },
      {
        question: "How far is Palm Jumeirah from Downtown Dubai?",
        answer:
          "Palm Jumeirah is approximately 20 minutes away from Downtown Dubai by car via the Palm Monorail or Sheikh Zayed Road.",
      },
      {
        question: "What amenities are available to residents?",
        answer:
          "Residents enjoy access to world-class amenities including Atlantis The Palm, beach clubs, restaurants, spas, water sports facilities, and scenic boardwalks.",
      },
      {
        question: "Are there public transport options?",
        answer:
          "The Palm Monorail connects the island to the mainland, and taxi and ride-sharing services are readily available throughout the community.",
      },
    ],
  },
  "dubai-marina": {
    name: "Dubai Marina",
    slug: "dubai-marina",
    image: "/dubai-marina-waterfront-skyline.jpg",
    heroImage: "/dubai-marina-high-rise-buildings-canal.jpg",
    coordinates: { lat: 25.0867, lng: 55.1419 },
    address: "Dubai Marina, Dubai, UAE",
    rating: 4.7,
    reviews: 189,
    galleryImages: ["/dubai-marina-the-walk-jbr-beach.jpg", "/dubai-marina-waterfront-promenade.jpg", "/dubai-marina-high-rise-apartments-night.jpg"],
    sections: [
      {
        heading: "Overview",
        content:
          "Dubai Marina is a master-planned waterfront community that epitomizes contemporary urban living. Built around an artificial canal, this vibrant neighborhood features over 200 high-rise towers and is home to one of the world's largest marina developments. The area seamlessly blends residential, commercial, and leisure facilities, creating a dynamic 24/7 lifestyle destination.",
      },
      {
        heading: "Property Types",
        content:
          "The Marina offers diverse residential options ranging from studio apartments perfect for young professionals to spacious penthouses with panoramic views. Most properties feature modern designs with floor-to-ceiling windows, premium finishes, and access to world-class amenities including swimming pools, gyms, and landscaped podium decks.",
      },
      {
        heading: "Lifestyle & Amenities",
        content:
          "Dubai Marina's lifestyle is unparalleled, with The Walk at JBR offering beachfront dining and shopping, Marina Walk providing waterfront promenades lined with cafes and restaurants, and Dubai Marina Mall serving as a major shopping destination. The area boasts numerous beach clubs, yacht clubs, and water sports facilities.",
      },
      {
        heading: "Investment Opportunities",
        content:
          "As one of Dubai's most established neighborhoods, Dubai Marina offers stable investment opportunities with strong rental demand. The area's popularity among expats and tourists ensures consistent occupancy rates and competitive rental yields.",
      },
      {
        heading: "Transportation & Connectivity",
        content:
          "Dubai Marina enjoys excellent connectivity through two metro stations on the Red Line, providing direct access to key business districts and leisure destinations. Sheikh Zayed Road runs parallel to the community, ensuring easy access by car to all parts of Dubai.",
      },
    ],
    faq: [
      {
        question: "What is the best area to live in Dubai Marina?",
        answer:
          "The Walk at JBR and Marina Walk are the most popular residential areas, offering proximity to beaches, dining, and entertainment options.",
      },
      {
        question: "How much do apartments cost in Dubai Marina?",
        answer:
          "Prices vary based on apartment size and location, ranging from AED 400K for studios to several million for luxury penthouses.",
      },
      {
        question: "Is Dubai Marina a safe area?",
        answer:
          "Yes, Dubai Marina is one of Dubai's safest neighborhoods with excellent security, well-lit streets, and active community policing.",
      },
      {
        question: "What transport options are available?",
        answer:
          "The Red Line Metro serves the area with two stations, and taxis, buses, and ride-sharing services are readily available.",
      },
      {
        question: "Are there schools nearby?",
        answer:
          "Yes, several reputable schools including Jumeirah International School and Dubai International School are located within the area.",
      },
    ],
  },
  "downtown-dubai": {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    image: "/downtown-dubai-burj-khalifa-skyline.jpg",
    heroImage: "/downtown-dubai-burj-khalifa-fountain-night.jpg",
    coordinates: { lat: 25.1972, lng: 55.2744 },
    address: "Downtown Dubai, Dubai, UAE",
    rating: 4.9,
    reviews: 324,
    galleryImages: ["/downtown-dubai-burj-khalifa-daytime.jpg", "/downtown-dubai-fountain-show-night.jpg", "/downtown-dubai-mall-interior-shopping.jpg"],
    sections: [
      {
        heading: "Overview",
        content:
          "Downtown Dubai represents the pinnacle of urban sophistication and modern living. Home to the world's tallest building, the Burj Khalifa, and the largest shopping mall, The Dubai Mall, this prestigious neighborhood serves as the city's cultural and commercial center.",
      },
      {
        heading: "Iconic Landmarks",
        content:
          "Beyond the Burj Khalifa, Downtown Dubai features numerous architectural masterpieces including the dancing Dubai Fountain, the modern Emaar Boulevard, and The Opera District. The Address Hotels and Residences define luxury hospitality.",
      },
      {
        heading: "Residential Living",
        content:
          "Properties in Downtown Dubai range from sleek studio apartments to expansive penthouses with Burj Khalifa and fountain views. Residential towers offer world-class amenities including infinity pools, state-of-the-art fitness centers, spa facilities, and concierge services.",
      },
      {
        heading: "Shopping & Dining Excellence",
        content:
          "The Dubai Mall, the world's largest shopping and entertainment destination, offers over 1,200 retail outlets, a massive aquarium, an Olympic-sized ice rink, and countless dining options.",
      },
      {
        heading: "Investment Value",
        content:
          "Downtown Dubai consistently delivers strong investment returns, driven by its status as the city's most recognizable address. Properties command premium prices and rental rates, supported by robust demand from both long-term residents and short-term visitors.",
      },
    ],
    faq: [
      {
        question: "What is special about Downtown Dubai?",
        answer:
          "Downtown Dubai is home to iconic landmarks like the Burj Khalifa and Dubai Fountain, offering a prestigious address with world-class amenities.",
      },
      {
        question: "Is it expensive to live in Downtown Dubai?",
        answer:
          "Yes, Downtown Dubai is one of Dubai's most premium locations with property prices reflecting its prestige and demand.",
      },
      {
        question: "Can I visit the top of Burj Khalifa?",
        answer:
          "Yes, visitors can access the observation decks at levels 124 and 148 of the Burj Khalifa for spectacular city views.",
      },
      {
        question: "What dining options are available?",
        answer:
          "Downtown Dubai offers hundreds of dining options ranging from Michelin-starred restaurants to casual cafes and international cuisine.",
      },
      {
        question: "Is Downtown Dubai walkable?",
        answer:
          "Yes, Downtown Dubai is very pedestrian-friendly with wide sidewalks, shaded walkways, and many attractions within walking distance.",
      },
    ],
  },
  "damac-hills": {
    name: "DAMAC Hills",
    slug: "damac-hills",
    image: "/placeholder.svg?height=500&width=1000",
    heroImage: "/placeholder.svg?height=600&width=1920",
    coordinates: { lat: 25.1135, lng: 55.1997 },
    address: "DAMAC Hills, Dubai, UAE",
    rating: 4.6,
    reviews: 78,
    galleryImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    sections: [
      {
        heading: "Overview",
        content:
          "DAMAC Hills is a master-planned residential community that offers a refreshing alternative to high-rise living. Built around the championship Trump International Golf Club, this expansive development features tree-lined streets, landscaped parks, and low-rise villas and apartments.",
      },
      {
        heading: "Community Facilities",
        content:
          "The community boasts an impressive array of amenities including multiple swimming pools, tennis and basketball courts, children's play areas, and dedicated cycling and jogging tracks. Residents also enjoy access to the Trump International Golf Club.",
      },
      {
        heading: "Property Options",
        content:
          "DAMAC Hills offers diverse property types to suit different family sizes and preferences. Options range from contemporary apartments and townhouses to spacious villas with private gardens. Many properties feature golf course views.",
      },
      {
        heading: "Family-Friendly Environment",
        content:
          "Education and healthcare facilities are easily accessible, with several reputable schools and medical centers located within and near the community. The safe, gated environment with 24/7 security provides peace of mind for families.",
      },
      {
        heading: "Accessibility & Location",
        content:
          "Despite its tranquil setting, DAMAC Hills offers convenient connectivity to key Dubai locations. Al Khail Road provides direct access to Sheikh Zayed Road, placing Dubai Marina, Downtown Dubai, and Business Bay within 20-25 minutes.",
      },
    ],
    faq: [
      {
        question: "Is DAMAC Hills suitable for families?",
        answer:
          "Yes, DAMAC Hills is specifically designed for families with excellent schools, security, recreational facilities, and a family-friendly community environment.",
      },
      {
        question: "What sports facilities are available?",
        answer:
          "Residents have access to the Trump International Golf Club, swimming pools, tennis courts, basketball courts, and jogging/cycling tracks.",
      },
      {
        question: "How far is DAMAC Hills from Downtown Dubai?",
        answer: "DAMAC Hills is approximately 20-25 minutes from Downtown Dubai via Sheikh Zayed Road.",
      },
      {
        question: "What is the cost of living in DAMAC Hills?",
        answer:
          "DAMAC Hills offers competitive pricing compared to other Dubai communities, with villas ranging from AED 1.5M to several million.",
      },
      {
        question: "Is there 24/7 security?",
        answer: "Yes, DAMAC Hills is a gated community with comprehensive 24/7 security and controlled access points.",
      },
    ],
  },
}

export default function AreaDetailPage({ params }) {
  const area = areasData[params.slug]
  const [activeSection, setActiveSection] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const contentRef = useRef(null)

  if (!area) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Area Not Found</h1>
        <p className="text-gray-600 mb-8">The area you're looking for doesn't exist.</p>
        <Link href="/areas">
          <Button className="bg-[#1a2b56]">Back to Areas</Button>
        </Link>
      </div>
    )
  }

  const scrollToSection = (index) => {
    setActiveSection(index)
    const element = document.getElementById(`section-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-[300px] md:h-[500px] w-full">
        <Image src={area.heroImage || "/placeholder.svg"} alt={area.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>

        {/* Breadcrumb overlay */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <div className="flex items-center gap-2 text-sm text-white">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <span>›</span>
            <Link href="/areas" className="hover:text-gray-200">
              Areas
            </Link>
            <span>›</span>
            <span>{area.name}</span>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{area.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex gap-8">
          <div className="flex-1">
            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">{area.description}</p>
            </div>

            {/* Content sections */}
            <div ref={contentRef} className="space-y-12 mb-16">
              {area.sections.map((section, index) => (
                <div key={index} id={`section-${index}`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={area.galleryImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`${area.name} gallery ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {area.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          (prev) => (prev - 1 + area.galleryImages.length) % area.galleryImages.length,
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-900" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % area.galleryImages.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-900" />
                    </button>
                  </>
                )}

                {/* Image indicators */}
                <div className="flex gap-2 mt-4 justify-center">
                  {area.galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 rounded-full transition ${
                        idx === currentImageIndex ? "bg-gray-900 w-8" : "bg-gray-300 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Location</h2>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.${area.coordinates.lat}!2d${area.coordinates.lng}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${area.coordinates.lat}%2C${area.coordinates.lng}!5e0!3m2!1sen!2sae!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{area.name}</h3>
                <p className="text-gray-600 mb-2">{area.address}</p>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold">{area.rating}</span>
                  <span className="text-gray-600">({area.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {area.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold hover:text-[#1a2b56]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">TABLE OF CONTENTS</h3>
              <nav className="space-y-2">
                {area.sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className={`block w-full text-left px-4 py-2 rounded transition ${
                      activeSection === index
                        ? "bg-[#1a2b56] text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {section.heading}
                  </button>
                ))}
                <button
                  onClick={() => {
                    document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="block w-full text-left px-4 py-2 rounded text-gray-700 hover:bg-gray-200 transition"
                >
                  FAQ
                </button>
              </nav>
            </div>
          </aside>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Interested in Properties in {area.name}?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team can help you find the perfect property in {area.name}. Connect with us to explore available
            listings and investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#1a2b56] hover:bg-[#1a2b56]/90 text-white px-8 py-6 text-lg">
              View Properties in {area.name}
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg bg-transparent">
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Back to Areas */}
        <div className="mt-12 text-center">
          <Link href="/areas" className="text-[#1a2b56] hover:underline font-medium">
            ← Back to All Areas
          </Link>
        </div>
      </div>
    </main>
  )
}
