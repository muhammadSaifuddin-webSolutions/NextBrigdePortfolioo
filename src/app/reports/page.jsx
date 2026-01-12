import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// interface Report {
//   title: string
//   image: string
//   type: string
// }

function ReportCard({ report }) {
  return (
    <div className="flex flex-col border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="relative aspect-[3/4] w-full bg-gray-100 p-4">
        <Image src={report.image || "/placeholder.svg"} alt={report.title} fill className="object-contain p-4" />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h3 className="font-bold text-[#1a2b56] min-h-[40px]">{report.title}</h3>
        <Button className="w-full bg-[#1a2b56] hover:bg-black text-white rounded-md">View Report</Button>
      </div>
    </div>
  )
}

export default function ReportsPage() {
  const monthlyReports = [
    { title: "November 2025", image: "/reports/monthly-nov-2025.png", type: "Monthly" },
    { title: "October 2025", image: "/reports/monthly-oct-2025.png", type: "Monthly" },
    { title: "August 2025", image: "/reports/monthly-aug-2025.png", type: "Monthly" },
    { title: "July 2025", image: "/reports/monthly-jul-2025.png", type: "Monthly" },
    { title: "May 2025", image: "/reports/monthly-may-2025.png", type: "Monthly" },
    { title: "April 2025", image: "/reports/monthly-apr-2025.png", type: "Monthly" },
  ]

  const quarterlyReports = [
    { title: "Q3 2025", image: "/reports/quarterly-q3-2025.png", type: "Quarterly" },
    { title: "Q2 2025", image: "/reports/quarterly-q2-2025.png", type: "Quarterly" },
    { title: "Q1 2025", image: "/reports/quarterly-q1-2025.png", type: "Quarterly" },
  ]

  const annualReports = [
    { title: "2024", image: "/reports/annual-2024.png", type: "Annual" },
    { title: "2023", image: "/reports/annual-2023.png", type: "Annual" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full flex items-center justify-center">
        <Image
          src="/images/screencapture-springfieldproperties-ae-reports-2026-01-05-15_55_37.png-5fINmxHzx7sFnndHkRNKNtpmcsCAkp.jpeg"
          alt="Market Reports Hero"
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
            <span>Reports</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Springfield Properties Market Reports</h1>
          <p className="mt-4 opacity-90 max-w-2xl mx-auto">
            Stay informed about Dubai&apos;s dynamic real estate market with our comprehensive quarterly reports.
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">
          {/* Monthly */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 border-b pb-4">Monthly Reports</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {monthlyReports.map((report, i) => (
                <ReportCard key={i} report={report} />
              ))}
            </div>
          </div>

          {/* Quarterly */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 border-b pb-4">Quarterly Reports</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {quarterlyReports.map((report, i) => (
                <ReportCard key={i} report={report} />
              ))}
            </div>
          </div>

          {/* Annual */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-12 border-b pb-4">Annual Reports</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {annualReports.map((report, i) => (
                <ReportCard key={i} report={report} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
