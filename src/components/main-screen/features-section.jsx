"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Sparkles, DollarSign } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Clock,
    title: "Fast Preparation",
    description:
      "Your order will be prepared quickly without compromising on quality",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "We use only the freshest ingredients and highest quality beef",
  },
  {
    icon: DollarSign,
    title: "Best Value",
    description:
      "Delicious meals at affordable prices, providing the best value for your money",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            // <div key={index} className="text-center">
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg p-0 text-center transition-shadow"
            >
              {" "}
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
            // </div>
          ))}
        </div>

        {/* Image Gallery and About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <Image
              width={400}
              height={400}
              src="/burger.jpg"
              alt="Food preparation"
              className="aspect-square object-cover rounded-lg"
            />
            <Image
              width={400}
              height={400}
              src="/burger.jpg"
              alt="Happy customer"
              className="aspect-square object-cover rounded-lg"
            />
            <Image
              width={400}
              height={400}
              src="/burger.jpg"
              alt="Delicious burger"
              className="aspect-square object-cover rounded-lg"
            />
            <Image
              width={400}
              height={400}
              src="/burger.jpg"
              alt="Chef cooking"
              className="aspect-square object-cover rounded-lg"
            />
          </div>

          <div>
            <p className="text-red-600 font-semibold mb-2">Quality Buns</p>
            <h2 className="text-4xl font-bold mb-6">
              BEST BURGER JOINT IN YOUR CITY AREA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Located in the heart of South Melbourne, our burger joint brings
              bold flavours and unbeatable vibes to the table. From stacked
              wagyu patties to crispy southern fried chicken, every bite is
              crafted with care and quality ingredients. Whether you're grabbing
              a quick lunch or settling in for a feast with friends, we've got
              something for every burger lover. Come hungry, leave happy.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">ABOUT US</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
