"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="text-lg sm:text-2xl font-bold text-[#1a2b56]">
            Springfield<span className="text-red-500 text-xl sm:text-3xl leading-none">.</span>
            <div className="text-[8px] sm:text-[10px] tracking-widest uppercase font-light -mt-1 text-gray-500">
              Properties
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* AI Button - Hidden on Mobile */}
        <Button
          variant="outline"
          className="hidden sm:flex border-[#1a2b56] text-[#1a2b56] hover:bg-[#1a2b56] hover:text-white rounded-md px-6 bg-transparent"
        >
          Springfield AI
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#1a2b56] hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4 border-[#1a2b56] text-[#1a2b56] hover:bg-[#1a2b56] hover:text-white rounded-md bg-transparent"
            >
              Springfield AI
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
