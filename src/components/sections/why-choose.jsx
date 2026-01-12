"use client"

import Image from "next/image"

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b56] mb-6">Why Choose Springfield Properties?</h2>
            <p className="text-gray-600 mb-8">
              With years of experience and deep market insights, we help you find properties perfectly aligned with your
              lifestyle and investment goals.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#1a2b56] mb-3">1. Market Expertise</h3>
                <p className="text-gray-600">
                  Springfield Properties has in-depth knowledge of the Dubai real estate market, helping clients find
                  ideal properties tailored to their needs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a2b56] mb-3">2. Comprehensive Services</h3>
                <p className="text-gray-600">
                  From property buying and selling to leasing and property management, Springfield Properties offers a
                  full suite of services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a2b56] mb-3">3. Client-Centric Approach</h3>
                <p className="text-gray-600">
                  Known for its transparent and customer-focused service, Springfield aims to build long-term
                  relationships with clients, ensuring a smooth experience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/springfield-office-main.jpg" alt="Office Meeting" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image src="/springfield-office-small-1.jpg" alt="Office Space" fill className="object-cover" />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image src="/springfield-office-small-2.jpg" alt="Team Meeting" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
