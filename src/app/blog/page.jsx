import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

const topReads = {
  title: "What is a Title Deed in Dubai? Complete Guide",
  date: "October 23, 2025",
  readTime: "14 min read",
  description:
    "Dubai's real estate market continues to attract investors from around the world, offering a regulated and transparent...",
  image: "/images/screencapture-springfieldproperties-ae-blog-2026-01-05-16-16-46.jpeg",
  slug: "what-is-a-title-deed-in-dubai-complete-guide",
}

const sidebarArticles = [
  {
    title: "What is Makani Number in Dubai and How to Find it",
    date: "October 15, 2025",
    readTime: "13 min read",
    image: "/dubai-map.jpg",
    slug: "what-is-makani-number-in-dubai",
  },
  {
    title: "How Much Villas Rent in Palm Jumeirah Dubai?",
    date: "March 11, 2025",
    readTime: "8 min read",
    image: "/palm-jumeirah-villas.jpg",
    slug: "how-much-villas-rent-palm-jumeirah",
  },
  {
    title: "Dubai Real Estate Market Overview – February 2025",
    date: "March 1, 2025",
    readTime: "3 min read",
    image: "/dubai-sunset-skyline.png",
    slug: "dubai-real-estate-market-overview-february-2025",
  },
  {
    title: "Best Areas Invest Jumeirah Village Triangle",
    date: "February 5, 2025",
    readTime: "9 min read",
    image: "/jumeirah-village.jpg",
    slug: "best-areas-invest-jumeirah-village-triangle",
  },
]

const latestArticles = [
  {
    title: "Dubai Real Estate Outlook 2026: Villas Set to Lead as Market Matures",
    date: "December 19, 2025",
    readTime: "4 min read",
    image: "/luxury-dubai-villa.jpg",
    category: "Dubai Real Estate Outlook 2026",
    slug: "dubai-real-estate-outlook-2026-villas-set-to-lead",
  },
  {
    title: "Nakheel Reveals Design for Palm Jebel Ali Friday Mosque",
    date: "December 18, 2025",
    readTime: "2 min read",
    image: "/mosque-architecture-modern.jpg",
    slug: "nakheel-reveals-design-palm-jebel-ali-friday-mosque",
  },
  {
    title: "Dubai Sets New Luxury Property Record with Dh550 Million Penthouse Sa...",
    date: "December 13, 2025",
    readTime: "2 min read",
    image: "/luxury-penthouse-dubai.png",
    slug: "dubai-sets-new-luxury-property-record-dh550-million",
  },
  {
    title: "Azizi Developments Signs Second Long-Term Lease Deal withKEZAD",
    date: "December 13, 2025",
    readTime: "2 min read",
    image: "/azizi-developments-office.jpg",
    slug: "azizi-developments-signs-second-long-term-lease-deal",
  },
  {
    title: "Dubai Islands Emerging as the 'New Palm' as Dubai Buyers Seek Exclu...",
    date: "December 11, 2025",
    readTime: "3 min read",
    image: "/dubai-islands-aerial.jpg",
    slug: "dubai-islands-emerging-as-new-palm",
  },
  {
    title: "Mubadala and Aldar Announce $18bn Expansion of Al Maryah Island",
    date: "December 11, 2025",
    readTime: "3 min read",
    image: "/al-maryah-island-fountain.jpg",
    slug: "mubadala-aldar-announce-expansion-al-maryah-island",
  },
  {
    title: "Dubai Launches New 3-Year Service Fee System for Palm Jumeirah",
    date: "December 11, 2025",
    readTime: "2 min read",
    image: "/palm-jumeirah-aerial.jpg",
    slug: "dubai-launches-new-3-year-service-fee-system",
  },
  {
    title: "Apartment Price in Dubai 2025: Latest Average Price, Price per Sq Ft ...",
    date: "December 6, 2025",
    readTime: "13 min read",
    image: "/dubai-apartments-sunset.jpg",
    slug: "apartment-price-in-dubai-2025-latest-average-price",
  },
  {
    title: "Dubai Real Estate Market November 2025 Report",
    date: "December 6, 2025",
    readTime: "7 min read",
    image: "/dubai-real-estate-report.jpg",
    slug: "dubai-real-estate-market-november-2025-report",
  },
  {
    title: "Palma Residences",
    date: "December 4, 2025",
    readTime: "6 min read",
    image: "/palma-residences-building.jpg",
    slug: "palma-residences",
  },
  {
    title: "Why Dubai's record-breaking 2025 budget could spark a global shift in...",
    date: "November 28, 2025",
    readTime: "3 min read",
    image: "/dubai-skyline-dusk.jpg",
    slug: "why-dubai-record-breaking-2025-budget",
  },
  {
    title: "How Much is Rent in Jumeirah Village Circle?",
    date: "November 25, 2025",
    readTime: "7 min read",
    image: "/jumeirah-village-circle.jpg",
    slug: "how-much-is-rent-jumeirah-village-circle",
  },
]

const developerLogos = [
  { name: "EMAAR", logo: "EMAAR" },
  { name: "DAMAC", logo: "DAMAC" },
  { name: "SOBHA", logo: "SOBHA" },
  { name: "WASL", logo: "WASL" },
  { name: "AZIZI", logo: "AZIZI" },
  { name: "NAKHEEL", logo: "NAKHEEL" },
  { name: "ELLINGTON", logo: "ELLINGTON" },
  { name: "OMNIYAT", logo: "OMNIYAT" },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Reads Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">TOP READS</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Link href={`/blog/${topReads.slug}`} className="group">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                <Image src={topReads.image || "/placeholder.svg"} alt={topReads.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-md">
                  <div className="text-xs font-bold text-[#1a2b56]">Springfield</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-4xl font-bold mb-4 group-hover:text-gray-200 transition-colors">
                    What is a <span className="italic">Deed</span>
                  </h3>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#1a2b56] transition-colors">
                {topReads.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>{topReads.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {topReads.readTime}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{topReads.description}</p>
            </Link>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-6">
            {sidebarArticles.map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="flex gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1a2b56] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Off-Plan Projects Banner */}
      <section className="relative h-[300px] my-16">
        <Image src="/luxury-villa-emaar.jpg" alt="Off-Plan Projects" fill className="object-cover brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h2 className="text-4xl font-bold mb-4">Off-Plan Projects, All in One Place</h2>
            <p className="text-lg mb-8">
              Explore upcoming opportunities and investment opportunities and exclusive launches – all in one place.
              Stay ahead of the market with our curated selection of off-plan projects.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-[#1a2b56] hover:bg-gray-100">View Off-Plan Listings</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Get a Call Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">LATEST ARTICLES</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestArticles.map((article, index) => (
            <Link key={index} href={`/blog/${article.slug}`} className="group">
              <div className="relative h-[240px] rounded-lg overflow-hidden mb-4">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                {article.category && (
                  <div className="absolute top-4 left-4 bg-[#1a2b56] text-white text-xs px-3 py-1 rounded">
                    {article.category}
                  </div>
                )}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1a2b56] transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Published on {article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              size="sm"
              className={page === 1 ? "bg-[#1a2b56]" : ""}
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" size="sm">
            Next »
          </Button>
        </div>
      </section>

      {/* Developers Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Developers We Work With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {developerLogos.map((developer, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">{developer.logo}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
