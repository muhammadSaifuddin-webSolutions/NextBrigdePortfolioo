"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";

export function HeroSection({
  selectedVenue,
  selectedAction,
  bannerImages = ["/images/hero-bg.png"],
  title = "HUNGER VALLEY",
  subtitle = "BURGER HOUSE",
  description = "Premium quality burgers made with fresh ingredients.",
  onVenueChangeClick,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { venue } = useSelector((state) => state.venue);

  const [cart, setCart] = useState([]);
  const navigate = useRouter();
  const addedCartItems = localStorage.getItem("cartItems");
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [addedCartItems]);

  useEffect(() => {
    if (bannerImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(interval);
    }
  }, [bannerImages.length]);

  const venueNames = {
    downtown: "Downtown",
    mall: "Mall",
    airport: "Airport",
  };

  const getCartItemCount = () => {
    return cart.reduce(
      (total, item) => total + (item?.customizations?.quantity || 1),
      0
    );
  };

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "translate-x-0"
                : index < currentImageIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      <nav className="absolute top-0 left-0 right-0 z-20 p-4 lg:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href={"/"} prefetch>
              <Image
                width={400}
                height={400}
                src="/Main Logo (Transparent).png"
                alt="Hunger Valley Logo"
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
              />
            </Link>
            {venue && (
              <div className="hidden sm:flex items-center gap-2">
                <Badge
                  className="bg-red-600 text-white cursor-pointer hover:bg-red-700 transition-colors flex items-center gap-1"
                  onClick={onVenueChangeClick}
                >
                  <MapPin className="w-3 h-3" />
                  {venue?.display_name}
                  <ChevronDown className="w-3 h-3" />
                </Badge>
                {selectedAction && (
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {selectedAction === "order" ? "Ordering" : "Reserving"}
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-red-400 transition-colors font-medium text-lg"
              prefetch
            >
              Home
            </Link>
            {venue?.online_ordering_enabled && (
              <Link
                href="/menu"
                className="text-white hover:text-red-400 transition-colors font-medium text-lg"
                prefetch
              >
                Menu
              </Link>
            )}

            {venue?.online_bookings_enabled && (
              <Link
                href="/reservations"
                className="text-white hover:text-red-400 transition-colors font-medium text-lg"
                prefetch
              >
                Reservations
              </Link>
            )}
            <Link
              href="/about-us"
              className="text-white hover:text-red-400 transition-colors font-medium text-lg"
              prefetch
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="text-white hover:text-red-400 transition-colors font-medium text-lg"
              prefetch
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/cart">
              <Button className="bg-red-600 hover:bg-red-700 text-white relative cursor-pointer">
                🛒 Cart
                {getCartItemCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
                    {getCartItemCount()}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/20">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {venue && (
                <div className="flex flex-wrap gap-2 pb-4 border-b border-white/20">
                  <Badge
                    className="bg-red-600 text-white"
                    onClick={onVenueChangeClick}
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    {venue?.display_name}
                  </Badge>
                  {selectedAction && (
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white"
                    >
                      {selectedAction === "order" ? "Ordering" : "Reserving"}
                    </Badge>
                  )}
                </div>
              )}
              <Link
                href="/"
                className="block text-white hover:text-red-400 transition-colors font-medium text-lg py-2"
                prefetch
              >
                Home
              </Link>
              {venue?.online_ordering_enabled && (
                <Link
                  href="/menu"
                  className="block text-white hover:text-red-400 transition-colors font-medium text-lg py-2"
                  prefetch
                >
                  Menu
                </Link>
              )}

              {venue?.online_bookings_enabled && (
                <Link
                  href="/reservations"
                  className="block text-white hover:text-red-400 transition-colors font-medium text-lg py-2"
                  prefetch
                >
                  Reservations
                </Link>
              )}
              <Link
                href="/about-us"
                className="block text-white hover:text-red-400 transition-colors font-medium text-lg py-2"
                prefetch
              >
                About
              </Link>
              <Link
                href="/contact-us"
                className="block text-white hover:text-red-400 transition-colors font-medium text-lg py-2"
                prefetch
              >
                Contact
              </Link>
              {/* <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white hover:text-black bg-transparent w-full mt-4"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </Button> */}
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-sm sm:text-base uppercase tracking-wider mb-2 mt-6 text-red-400 font-medium">
          {subtitle}
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 tracking-wider leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 text-lg tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            {selectedAction === "reserve" ? "RESERVE TABLE" : "ORDER NOW"}
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-black bg-transparent font-semibold px-8 py-4 text-lg tracking-wider rounded-lg cursor-pointer"
            onClick={() => {
              navigate.push("/menu");
            }}
          >
            VIEW MENU
          </Button>
        </div>
      </div>
    </section>
  );
}
