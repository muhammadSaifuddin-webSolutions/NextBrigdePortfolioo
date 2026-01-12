"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Skip the line and order online! We'll have your burger ready for pickup in no time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={"/menu"} prefetch>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 cursor-pointer" >View Menu →</Button>
            
          </Link>
          <Link href="/contact-us" prefetch>
             <Button variant="link" className="text-red-600 hover:text-red-700 cursor-pointer">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
