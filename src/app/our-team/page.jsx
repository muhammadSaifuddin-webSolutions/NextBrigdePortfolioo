import Image from "next/image"
import Link from "next/link"

// interface TeamMember {
//   name: string
//   role: string
//   image: string
// }

function TeamMemberCard({ member }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 mb-4 transition-transform group-hover:scale-[1.02]">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <h3 className="text-lg font-bold text-[#1a2b56] text-center">{member.name}</h3>
      <p className="text-sm text-gray-500 text-center">{member.role}</p>
    </div>
  )
}

export default function TeamPage() {
  const management = [
    { name: "Masroor Syed", role: "Chairman", image: "/chairman-portrait.jpg" },
    { name: "Farooq Syed", role: "Chief Executive Officer", image: "/ceo-portrait.png" },
    { name: "Osman Syed", role: "Managing Director", image: "/team/osman.jpg" },
    { name: "Abdullah Syed", role: "Managing Director", image: "/team/abdullah.jpg" },
  ]

  const associateDirectors = [
    { name: "Anjal Singhvi", role: "Associate Director", image: "/team/anjal.jpg" },
    { name: "Amir Abbasi", role: "Associate Director", image: "/team/amir.jpg" },
    { name: "Neethu Murali", role: "Associate Director", image: "/team/neethu.jpg" },
    { name: "Omar Ahmed Hasan", role: "Associate Director", image: "/team/omar.jpg" },
    { name: "Sonia Gulistani", role: "Associate Director", image: "/team/sonia.jpg" },
    { name: "Adilet Chynystanov", role: "Associate Director", image: "/team/adilet.jpg" },
  ]

  const salesManagers = [
    { name: "Usman Rasheed Malik", role: "Sales Manager", image: "/team/usman.jpg" },
    { name: "Hassan Bin Khalid", role: "Sales Manager", image: "/team/hassan.jpg" },
    { name: "Bipin Khanna", role: "Sales Manager", image: "/team/bipin.jpg" },
    { name: "Yasmin Hamed", role: "Sales Manager", image: "/team/yasmin.jpg" },
    { name: "Tauseef Rehman", role: "Sales Manager", image: "/team/tauseef.jpg" },
    { name: "Mohammed Ansab", role: "Sales Manager", image: "/team/ansab.jpg" },
    { name: "Hammad Ali Lodhi", role: "Sales Manager", image: "/team/hammad.jpg" },
    { name: "Naghmeh Sabet", role: "Sales Manager", image: "/team/naghmeh.jpg" },
    { name: "Omid Zare", role: "Sales Manager", image: "/team/omid.jpg" },
    { name: "Masoud Al Nasri", role: "Sales Manager", image: "/team/masoud.jpg" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full flex items-center justify-center">
        <Image
          src="/images/screencapture-springfieldproperties-ae-team-2026-01-05-15_53_13.png-C2IyfRA01jknql46GjFBaN4rvKtBHV.jpeg"
          alt="Springfield Team Hero"
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
            <span>Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Meet the experts behind your new home</h1>
          <p className="mt-4 opacity-90 max-w-2xl mx-auto">
            Trusted professionals delivering exceptional service, expert advice, and outstanding results.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">
          {/* Management */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 border-b pb-4">Our Management</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {management.map((member, i) => (
                <TeamMemberCard key={i} member={member} />
              ))}
            </div>
          </div>

          {/* Associate Directors */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 border-b pb-4">Our Associate Directors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {associateDirectors.map((member, i) => (
                <TeamMemberCard key={i} member={member} />
              ))}
            </div>
          </div>

          {/* Sales Managers */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 border-b pb-4">Our Sales Managers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {salesManagers.map((member, i) => (
                <TeamMemberCard key={i} member={member} />
              ))}
            </div>
          </div>

          {/* Sales Advisors (Sample) */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 border-b pb-4">Our Sales Advisors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {Array.from({ length: 15 }).map((_, i) => (
                <TeamMemberCard
                  key={i}
                  member={{
                    name: `Sales Advisor ${i + 1}`,
                    role: "Sales Advisor",
                    image: `/placeholder.svg?height=400&width=320&query=portrait+photo+professional+realtor+${i}`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
