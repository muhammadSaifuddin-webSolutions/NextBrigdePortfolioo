import Link from "next/link"
import { Phone, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a2b56] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl font-bold mb-2">
              Springfield<span className="text-red-500 text-4xl">.</span>
              <div className="text-xs tracking-widest uppercase font-light text-gray-300">Properties</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold mb-1">+971 4 4542588</div>
            <div className="text-sm text-gray-300">info@springfield-re.com</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16 border-t border-white/10 pt-12">
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/areas">Areas</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Developers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Our Team</Link>
              </li>
              <li>
                <Link href="#">Reports</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Buy from</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="#">Emaar</Link>
              </li>
              <li>
                <Link href="#">Binghatti</Link>
              </li>
              <li>
                <Link href="#">Damac</Link>
              </li>
              <li>
                <Link href="#">Shoba Realty</Link>
              </li>
              <li>
                <Link href="#">Nakheel</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Our Offices</h4>
            <div className="text-sm text-gray-300 space-y-4">
              <p>Office 102-106, Building 02 Business Bay, Dubai</p>
              <p>Office 149 & 150 Wafra Square, Reem Island Abu Dhabi</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Follow Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Facebook size={16} /> Facebook
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} /> Instagram
              </li>
              <li className="flex items-center gap-2 text-blue-400 font-medium">TikTok</li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </li>
              <li className="flex items-center gap-2">
                <Youtube size={16} /> YouTube
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-400">
          <p>Copyright © 2025. Springfield Properties | ORN No: 11929</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <button className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <Phone size={24} />
        </button>
        <button className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <MessageCircle size={24} />
        </button>
      </div>
    </footer>
  )
}
