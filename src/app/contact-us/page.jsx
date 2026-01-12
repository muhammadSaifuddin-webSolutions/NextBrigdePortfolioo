// import { Footer } from "@/components/main-screen/footer";
// import { HeroSection } from "@/components/main-screen/hero-section";
// import { ContactSection } from "@/components/models/contact-section";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen">
//       <HeroSection
//         title="CONTACT US"
//         subtitle="GET IN TOUCH"
//         description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
//         bannerImages={["/images/hero-bg.png"]}
//       />
//       <ContactSection />
//       <Footer />
//     </div>
//   )
// }
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  const stats = [
    { value: "AED 3B+", label: "ANNUAL SALES VALUE" },
    { value: "Since 2008", label: "ESTABLISHED" },
    { value: "5000+", label: "HAPPY CLIENTS" },
    { value: "180+", label: "REALTORS" },
  ]

  const faqs = [
    {
      question: "What services does Springfield Properties offer?",
      answer:
        "We offer a comprehensive range of real estate services including residential and commercial sales, leasing, property management, and off-plan investment consultation.",
    },
    {
      question: "Can Springfield Properties help me find my dream home?",
      answer:
        "Yes, our expert team of over 180 realtors is dedicated to understanding your unique requirements and finding the perfect property that matches your lifestyle and investment goals.",
    },
    {
      question: "How long has Springfield Properties been in business?",
      answer:
        "Springfield Properties was established in 2008 and has since grown to become one of Dubai's most trusted real estate brokerage firms.",
    },
    {
      question: "What makes Springfield Properties different from other real estate companies?",
      answer:
        "Our family-founded roots, commitment to integrity, and deep market expertise allow us to provide a personalized, transparent, and superior service that consistently exceeds client expectations.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/screencapture-springfieldproperties-ae-about-us-2026-01-05-15_52_31.png-S82JDVGJj3wTcK99k9IRFLnQWac53I.jpeg"
          alt="About Springfield Properties"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto h-full flex flex-col justify-center px-4 text-white">
          <div className="flex items-center gap-2 text-sm mb-4 opacity-80">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Shaping the Future of Real Estate</h1>
          <p className="max-w-xl text-lg opacity-90">
            Explore leading developers known for quality, innovation, and long-term value-helping you choose projects
            that align with your lifestyle.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image src="/dubai-real-estate-team.jpg" alt="Springfield Team" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-6">Dubai's Leading Real Estate Brokerage Firm</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Welcome to Springfield Properties, where your dream home becomes a reality. With a legacy built on
                trust, integrity, and exceptional customer service, we are a leading real estate firm dedicated to
                providing high-quality properties and outstanding investment opportunities.
              </p>
              <p>
                At Springfield Properties, we understand that real estate is more than just a transaction; it's about
                creating lasting connections and finding the perfect space for every individual. Whether you're looking
                for your first home, a luxury investment, or a commercial space, our team of experts is here to guide
                you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a2b56] mb-6">Based in Dubai, Known Worldwide</h2>
              <p className="text-gray-600 mb-10">
                At Springfield Properties, we're more than a team; we're a close-knit family. Built on trust,
                collaboration, and shared goals, we foster a supportive environment where every individual can truly
                call their own. Together, we create exceptional experiences, both for our clients and within our
                company.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-[#1a2b56] mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-gray-400 tracking-wider uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image src="/dubai-skyline-burj-khalifa.png" alt="Dubai Skyline" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <h3 className="text-3xl font-bold text-[#1a2b56] shrink-0">Our Mission</h3>
            <p className="max-w-3xl text-gray-600">
              Springfield Properties is your personalized Real Estate broker. We have redefined business standards
              through impartiality and honesty. We undergo each deal with integrity and are determined to bestow
              unrelenting effective and efficient customer service.
            </p>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-between items-start gap-8">
            <h3 className="text-3xl font-bold text-[#1a2b56] shrink-0">Our Vision</h3>
            <p className="max-w-3xl text-gray-600 text-right">
              Our mandate is to provide quality services in a result-oriented manner with complete transparency for our
              clients. Our goal is to succeed, enabling our diverse team of valued employees to hold great
              accountability towards our prized customers.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <h3 className="text-3xl font-bold text-[#1a2b56] shrink-0">Our Values</h3>
            <p className="max-w-3xl text-gray-600">
              Springfield Properties is a family founded real estate company based in Dubai. We aim to achieve our
              vision through upholding our values of integrity, passion, professionalism, and work.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-16">
          {/* Chairman */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#1a2b56] mb-6">From Our Chairman</h2>
              <p className="text-gray-600 italic mb-6">
                &quot;At Springfield Properties, we are more than just a real estate brokerage firm; we are trusted
                advisors dedicated to helping our clients achieve their property dreams. Whether buying, selling, or
                investing, our commitment to delivering exceptional service is at the heart of everything we do.&quot;
              </p>
              <div>
                <div className="font-bold text-[#1a2b56]">Masroor Syed</div>
                <div className="text-sm text-gray-500">Chairman</div>
              </div>
            </div>
            <div className="w-full lg:w-[400px] aspect-[4/5] relative rounded-xl overflow-hidden shadow-lg">
              <Image src="/chairman-portrait.jpg" alt="Chairman Masroor Syed" fill className="object-cover" />
            </div>
          </div>

          {/* CEO */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#1a2b56] mb-6">From Our CEO</h2>
              <p className="text-gray-600 italic mb-6">
                &quot;At Springfield Properties, our vision has always been to redefine what it means to experience real
                estate in Dubai. We are not only shaping transactions, but shaping futures, helping families, investors,
                and communities find places they can truly call their own.&quot;
              </p>
              <div>
                <div className="font-bold text-[#1a2b56]">Farooq Syed</div>
                <div className="text-sm text-gray-500">CEO</div>
              </div>
            </div>
            <div className="w-full lg:w-[400px] aspect-[4/5] relative rounded-xl overflow-hidden shadow-lg">
              <Image src="/ceo-portrait.png" alt="CEO Farooq Syed" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-4">FAQ</h2>
            <p className="text-gray-500 mb-10">
              Find answers to commonly asked questions about our real estate services
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-[#1a2b56]">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image src="/dubai-office-interior.jpg" alt="Work with us" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1a2b56]/80" />
        <div className="container relative mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Take the First Step with Springfield Properties</h2>
          <p className="mb-10 opacity-80 max-w-2xl mx-auto">
            Whether you&apos;re looking for your dream property or an exciting career opportunity, we&apos;re here to
            help you succeed every step of the way.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100 px-8">Find Properties</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 bg-transparent"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
