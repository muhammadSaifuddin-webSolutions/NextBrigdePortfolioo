import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CareersPage() {
  const vacancies = [
    {
      title: "International Sales Manager",
      level: "Senior Level",
      type: "Full-Time",
      location: "Business Bay, Dubai, UAE",
    },
    {
      title: "Property Consultant",
      level: "Mid Level",
      type: "Full-Time",
      location: "Business Bay, Dubai, UAE",
    },
    {
      title: "Property Manager/Director",
      level: "Senior Level",
      type: "Full-Time",
      location: "Abu Dhabi, UAE",
    },
  ]

  const benefits = [
    {
      title: "Social Media Powerhouse",
      desc: "Amplify your presence with dedicated marketing support and personalized social media promotion that sets you apart.",
    },
    {
      title: "Comprehensive Training",
      desc: "Master the art of real estate with expert-led programs designed to enhance your skills and accelerate your success.",
    },
    {
      title: "Advanced Marketing & Lead Support",
      desc: "Earn more with attractive commission structures, bonuses, and smart CRM tools to boost your leads and close deals faster.",
    },
    {
      title: "Access to Dubai's Top Developers",
      desc: "Work directly with developers like Emaar, Nakheel, Meraas, Damac & Sobha and get early access to launches, prime inventory and VIP events.",
    },
    {
      title: "Competitive Compensation",
      desc: "Earn more with attractive commission structures, bonuses, and rewards that recognize your hard work and results.",
    },
    {
      title: "Professional Growth Path",
      desc: "Gain access to continuous learning, mentorship, and real-world insights to help you reach your full potential.",
    },
    {
      title: "Thriving Team Culture",
      desc: "Join a collaborative, supportive, and motivated team that celebrates success and values every contribution.",
    },
    {
      title: "Recognition & Rewards",
      desc: "Get rewarded with awards, bonuses, and international trips for our very own Springfield Millionaire's Club (past trips include Bali, Phuket, and more).",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full flex items-center justify-center">
        <Image
          src="/images/screencapture-springfieldproperties-ae-careers-2026-01-05-15_57_11.png-USK6izE6xgMtVm98cBcvLw7fWYPJ0s.jpeg"
          alt="Careers Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-2 text-sm mb-4 opacity-80">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Careers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Build Your Career with Springfield</h1>
          <p className="mt-4 opacity-90 max-w-2xl mx-auto">
            Join our team of passionate real estate professionals and help people find their dream homes while growing
            your career in a supportive, innovative environment.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image src="/careers-welcome.jpg" alt="Welcome to Springfield" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-6">Welcome to Springfield Properties</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Springfield, we believe that great careers are built on a foundation of trust, innovation, and
                collaboration. For over two decades, we&apos;ve been helping families find their perfect homes while
                creating an exceptional workplace for our team members.
              </p>
              <p>
                We&apos;re not just looking for employees—we&apos;re looking for passionate individuals who want to make
                a real difference in people&apos;s lives and grow alongside a company that values integrity, excellence,
                and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 text-center">Our Culture & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#1a2b56]">Integrity First</h3>
              <p className="text-gray-500 text-sm">
                We build lasting relationships based on honesty, transparency, and ethical practices in every
                interaction with clients and colleagues.
              </p>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/culture-integrity.jpg" alt="Integrity" fill className="object-cover" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#1a2b56]">Innovation & Growth</h3>
              <p className="text-gray-500 text-sm">
                We embrace new technologies and creative solutions while investing in continuous learning and
                professional development for our team.
              </p>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/culture-innovation.jpg" alt="Innovation" fill className="object-cover" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#1a2b56]">Client-Centered Excellence</h3>
              <p className="text-gray-500 text-sm">
                Every decision we make is guided by what&apos;s best for our clients, delivering exceptional service
                that exceeds expectations.
              </p>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/culture-client.jpg" alt="Client Excellence" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2b56] mb-12">Current Vacancies</h2>
          <div className="space-y-4">
            {vacancies.map((job, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 border rounded-xl">
                <div>
                  <h3 className="text-xl font-bold text-[#1a2b56] mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>• {job.level}</span>
                    <span>• {job.type}</span>
                    <span>• {job.location}</span>
                  </div>
                </div>
                <Button className="mt-4 md:mt-0 bg-[#1a2b56] hover:bg-black text-white px-8 rounded-md">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 text-center">Why Choose Springfield?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 border rounded-xl bg-white">
                <h3 className="text-lg font-bold text-[#1a2b56] mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1a2b56] mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-500 text-center mb-12">
            Interested in joining our team? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="First Name*" className="h-12" />
              <Input placeholder="Last Name*" className="h-12" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Email Address*" className="h-12" type="email" />
              <Input placeholder="Phone*" className="h-12" />
            </div>
            <select className="w-full h-12 px-4 rounded-md border border-input bg-background text-sm">
              <option value="">Select a position*</option>
              {vacancies.map((job, i) => (
                <option key={i} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
            <Textarea
              placeholder="Share your experience, qualifications, and why you'd like to join Springfield Properties..."
              className="min-h-[150px]"
            />
            <div className="border-2 border-dashed rounded-xl p-8 text-center text-gray-500">
              <p>Resume/CV</p>
              <input type="file" className="mt-4 text-sm" />
            </div>
            <Button className="w-full bg-[#1a2b56] hover:bg-black text-white h-12 text-lg rounded-md">
              Submit Application
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
