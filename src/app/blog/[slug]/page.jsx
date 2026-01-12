import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const sampleArticle = {
  title: "Revealed: Dubai Real Estate Market Trends in 2026 According to Experts",
  author: "Springfield Properties",
  date: "December 15, 2025",
  readTime: "8 min read",
  category: "Market Insights",
  image: "/placeholder.svg?height=600&width=1200",
  content: `
    <p>Dubai's real estate market continues to demonstrate remarkable resilience and growth as we move into 2026. Industry experts are predicting several key trends that will shape the market in the coming year.</p>

    <h2>Key Market Trends for 2026</h2>
    
    <p>The Dubai real estate sector is expected to maintain its upward trajectory, driven by strong economic fundamentals, government initiatives, and increasing investor confidence. Here are the main trends to watch:</p>

    <h3>1. Sustainable and Smart Homes</h3>
    <p>Environmental consciousness is becoming a major factor in property decisions. Developers are incorporating green building practices, solar panels, and smart home technologies to meet growing demand for sustainable living spaces.</p>

    <h3>2. Off-Plan Investment Opportunities</h3>
    <p>Off-plan properties continue to attract investors seeking value appreciation. With flexible payment plans and competitive pricing, these projects offer significant ROI potential.</p>

    <h3>3. Prime Location Premium</h3>
    <p>Properties in established neighborhoods like Downtown Dubai, Palm Jumeirah, and Dubai Marina continue to command premium prices due to their strategic locations and world-class amenities.</p>

    <h2>Expert Predictions</h2>
    <p>Real estate analysts forecast a 5-7% increase in property values across Dubai in 2026, with certain emerging areas potentially seeing double-digit growth. The villa segment is expected to outperform apartments as buyers seek more space and privacy.</p>

    <h2>Investment Opportunities</h2>
    <p>For investors looking to enter the Dubai market, 2026 presents numerous opportunities across different price points and property types. Working with experienced real estate consultants can help identify the best investment options aligned with your financial goals.</p>

    <p>At Springfield Properties, we're committed to helping clients navigate these market trends and make informed investment decisions. Contact our expert team to learn more about the opportunities available in Dubai's dynamic real estate market.</p>
  `,
}

const relatedArticles = [
  {
    title: "Dubai Real Estate Market November 2025 Report",
    image: "/placeholder.svg?height=200&width=300",
    slug: "dubai-real-estate-market-november-2025-report",
    readTime: "7 min read",
  },
  {
    title: "Best Areas to Invest in Dubai 2026",
    image: "/placeholder.svg?height=200&width=300",
    slug: "best-areas-invest-dubai-2026",
    readTime: "10 min read",
  },
  {
    title: "How to Buy Property in Dubai as a Foreigner",
    image: "/placeholder.svg?height=200&width=300",
    slug: "how-to-buy-property-dubai-foreigner",
    readTime: "12 min read",
  },
]

export default function BlogArticlePage({ params }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#1a2b56]">
              Explore more offplan
            </Link>
            <span>/</span>
            <Link href="/" className="hover:text-[#1a2b56]">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#1a2b56]">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">{params.slug.replace(/-/g, " ")}</span>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#1a2b56] text-white text-sm px-4 py-1 rounded mb-4">
            {sampleArticle.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{sampleArticle.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{sampleArticle.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{sampleArticle.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By {sampleArticle.author}</span>
            </div>
          </div>

          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Share2 size={16} />
            Share Article
          </Button>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12">
          <Image
            src={sampleArticle.image || "/placeholder.svg"}
            alt={sampleArticle.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-16" dangerouslySetInnerHTML={{ __html: sampleArticle.content }} />

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Invest in Dubai Real Estate?</h3>
          <p className="text-gray-600 mb-6">
            Connect with our expert team to discover the best investment opportunities in Dubai's thriving property
            market.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#1a2b56] hover:bg-[#1a2b56]/90">Schedule Consultation</Button>
            <Button variant="outline">Browse Properties</Button>
          </div>
        </div>

        {/* Related Articles */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={`/blog/${article.slug}`} className="group">
                <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1a2b56] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
