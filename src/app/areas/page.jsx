import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredAreas = [
  {
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    image: "/palm-jumeirah-dubai.jpg",
  },
  {
    name: "Dubai Marina",
    slug: "dubai-marina",
    image: "/dubai-marina-skyline.jpg",
  },
  {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    image: "/images/neighborhoods/downtown.png",
  },
  {
    name: "DAMAC Hills",
    slug: "damac-hills",
    image: "/damac-hills-golf-dubai.jpg",
  },
]

const featuredCommunities = [
  {
    name: "Damac Islands",
    slug: "damac-islands",
    image: "/damac-islands.jpg",
  },
  {
    name: "Arabian Ranches",
    slug: "arabian-ranches",
    image: "/arabian-ranches-dubai.jpg",
  },
  {
    name: "Jumeirah Village",
    slug: "jumeirah-village",
    image: "/jumeirah-village-circle.jpg",
  },
  {
    name: "Business Bay",
    slug: "business-bay",
    image: "/business-bay-dubai.jpg",
  },
]

export default function AreasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full">
        <Image
          src="/images/screencapture-springfieldproperties-ae-areas-2026-01-05-14-57-45.png"
          alt="Dubai Areas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto h-full flex flex-col justify-center px-4 text-white">
          <div className="flex gap-4 text-xs font-medium mb-8 text-gray-300">
            <span>Explore more offplan</span>
            <span>|</span>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>Areas</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-balance">Looking for the right area to call home?</h1>
          <p className="text-xl opacity-90 max-w-2xl leading-relaxed text-pretty">
            From waterfront living to city-center sophistication, find the address that matches your lifestyle and
            long-term goals.
          </p>
        </div>
      </section>

      {/* Featured Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-10">Featured areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAreas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`} className="group">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{area.name}</h3>
                    <p className="text-sm opacity-90 group-hover:underline">Learn More →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden h-[300px] flex items-center">
            <Image src="/dubai-sunset-skyline.png" alt="Banner" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative container mx-auto px-12 flex flex-col md:flex-row justify-between items-center text-white">
              <div className="max-w-xl mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-balance">Off-Plan Projects, All in One Place</h2>
                <p className="opacity-80 leading-relaxed text-pretty">
                  Explore upcoming communities, investment opportunities, and exclusive launches – all in one place.
                  Stay ahead of the market with our curated selection of off-plan projects.
                </p>
              </div>
              <div className="flex gap-4 flex-col sm:flex-row">
                <Button className="bg-white text-black hover:bg-gray-100">View Off-Plan Listings</Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Get a Call Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-10">Featured communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCommunities.map((community) => (
              <div key={community.slug} className="group cursor-pointer">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={community.image || "/placeholder.svg"}
                    alt={community.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-bold text-lg mb-2">{community.name}</h3>
                    <p className="text-sm opacity-90 group-hover:underline">Learn More →</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dubai Section */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 text-balance">
            Why choose dubai for your next home or investment?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#1a2b56]">World-Class Infrastructure</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Dubai is renowned for its cutting-edge infrastructure, including state-of-the-art transportation
                systems, world-class healthcare facilities, and premium educational institutions. The city's continuous
                development and investment in modern amenities and services make it an ideal place to live and work.
              </p>

              <h3 className="font-bold text-xl mb-4 text-[#1a2b56]">Diverse Community</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Home to over 200 nationalities, Dubai offers a cosmopolitan lifestyle where people from all backgrounds
                can thrive. The city celebrates diversity through its multicultural events, international cuisine, and
                inclusive communities, creating a truly global living experience.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 text-[#1a2b56]">Tax Benefits & Economic Opportunities</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Dubai offers significant tax advantages with zero personal income tax for residents, making it an
                attractive destination for professionals and entrepreneurs. The robust business environment and
                strategic location provide excellent opportunities for career growth and investment.
              </p>

              <h3 className="font-bold text-xl mb-4 text-[#1a2b56]">Lifestyle & Entertainment</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From world-famous shopping malls to pristine beaches, fine dining restaurants to luxury spa facilities,
                Dubai provides an unmatched lifestyle experience. Residents enjoy year-round activities and
                entertainment options that cater to all ages and interests.
              </p>
            </div>
          </div>
          <Button className="mt-12 bg-[#1a2b56] text-white px-10 hover:bg-[#1a2b56]/90">Read More</Button>
        </div>
      </section>
    </div>
  )
}
