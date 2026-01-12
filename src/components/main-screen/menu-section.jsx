"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const menuItems = {
  burgers: [
    {
      id: 1,
      name: "Brekkie Burger",
      description:
        "Lettuce, fried egg, smoked bacon, avocado salsa, beetroot relish",
      price: "$14.00",
      image: "/burger2.jpg",
    },
    {
      id: 2,
      name: "Cheeseburger",
      description: "Wagyu beef patty, american cheese, pickle, tomato ketchup",
      price: "$14.00",
      image: "/burger2.jpg",
    },
    {
      id: 3,
      name: "Valley Beef Burger",
      description:
        "Wagyu beef patty, lettuce, tomato, cheese, pickles, valley sauce",
      price: "$18.00",
      image: "/burger2.jpg",
    },
  ],
  seafood: [
    {
      id: 4,
      name: "Barramundi Fillet",
      description:
        "Grilled/fried with choice of chips, house salad or brown rice",
      price: "$20.00",
      image: "/burger2.jpg",
    },
    {
      id: 5,
      name: "Seasonal Fish",
      description:
        "Grilled/fried with choice of chips, house salad or brown rice",
      price: "$18.00",
      image: "/burger2.jpg",
    },
    {
      id: 6,
      name: "Calamari",
      description:
        "Grilled/fried with choice of chips, house salad or brown rice",
      price: "$16.00",
      image: "/burger2.jpg",
    },
  ],
};

export function MenuSection( {items=[]}) {
  const router = useRouter();
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Large menu image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-amber-100 rounded-lg overflow-hidden relative">
              <img
                src="/burger2.jpg"
                alt="Our Menu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl font-bold tracking-wider transform -rotate-90">
                  OUR MENU
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Menu items */}
          <div className="space-y-8">
            {Object.entries(items)?.map(([categoryName, items]) => (
              <div key={categoryName}>
                <h2 className="text-2xl font-bold text-red-600 mb-6 capitalize">
                  {categoryName}
                </h2>
                <div className="space-y-4">
                  {items?.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-2">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-red-600 font-bold text-lg">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Button
                variant="link"
                className="text-red-600 hover:text-red-700 p-0 font-semibold cursor-pointer"
                onClick={() => router.push("/menu")}
              >
                View Full Menu <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
