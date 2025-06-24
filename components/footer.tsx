import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">TLHC</span>
              <span className="ml-2 text-sm text-gray-300">The Luxury Hotel Company</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Rwanda's premier hospitality brand offering exceptional luxury accommodations in Kigali, with expansion
              plans across Africa and beyond.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Kigali City Center, Rwanda</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+250 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@tlhc.rw</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/rooms" className="text-gray-300 hover:text-primary transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-gray-300 hover:text-primary transition-colors">
                  Rwanda Attractions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About TLHC
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-gray-300 hover:text-primary transition-colors">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold mb-4">Our Locations</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-primary font-medium">Kigali, Rwanda</span>
                <div className="text-sm text-gray-300">Available Now</div>
              </li>
              <li>
                <span className="text-gray-300">Lagos, Nigeria</span>
                <div className="text-sm text-gray-400">Coming 2026</div>
              </li>
              <li>
                <span className="text-gray-300">Abuja, Nigeria</span>
                <div className="text-sm text-gray-400">Coming 2027</div>
              </li>
              <li>
                <span className="text-gray-300">New York, USA</span>
                <div className="text-sm text-gray-400">Coming 2028</div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2025 TLHC - The Luxury Hotel Company. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
