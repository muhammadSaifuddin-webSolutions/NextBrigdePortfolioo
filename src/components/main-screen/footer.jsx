"use client"

import { useGetVenueHoursQuery } from "@/services/venue-hours/api";
import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import Image from "next/image";

export function Footer() {
  
  const { venue } = useSelector((state) => state.venue);
  const {
    data: operatingHours = [],
    isLoading: operatingHoursLoading,
    isError: operatingHoursError,
  } = useGetVenueHoursQuery(venue?.id);


    const getDayName = (dayOfWeek) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayOfWeek];
  };
  
  
  const formatTime = (time) => {
    if (!time) return "";
    return new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <Image width={400} height={400} src="/Main Logo (Transparent).png" alt="Hunger Valley Logo" className="w-12 h-12 mr-3" />
            </div>
            <p className="text-gray-300 mb-4">
              Serving the juiciest burgers in town. Made with love and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="about-us" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="contact-us" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
           <div>
            <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
            <div className="space-y-2 text-gray-300">
                {operatingHours.map((hour) => (
                  <div
                    key={hour.day_of_week}
                    className="flex items-center justify-between  rounded-lg"
                  >
                    <span className="font-medium  w-20">
                      {getDayName(hour.day_of_week)}
                    </span>
                    {hour.closed ? (
                      <Badge variant="secondary" className="text-gray-500">
                        Closed
                      </Badge>
                    ) : (
                      <span className="text-sm ">
                        {formatTime(hour.open_time)} -{" "}
                        {formatTime(hour.close_time)}
                      </span>
                    )}
                  </div>
                ))}
              </div> </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Hunger Valley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
