import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Areas", href: "/areas" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Team", href: "/our-team" },
  { name: "Reports", href: "/reports" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-[#1a2b56]">
            Springfield<span className="text-red-500 text-3xl leading-none">.</span>
            <div className="text-[10px] tracking-widest uppercase font-light -mt-1 text-gray-500">Properties</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#1a2b56] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Button
          variant="outline"
          className="border-[#1a2b56] text-[#1a2b56] hover:bg-[#1a2b56] hover:text-white rounded-md px-6 bg-transparent"
        >
          Springfield AI
        </Button>
      </div>
    </header>
  )
}
