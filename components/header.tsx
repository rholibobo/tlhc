"use client"

import { Menu, User, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">TLHC</span>
            <span className="ml-2 text-sm text-gray-600 hidden sm:block">The Luxury Hotel Company</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/rooms" className="text-gray-700 hover:text-primary font-medium">
                Rooms & Suites
              </Link>
              <Link href="/attractions" className="text-gray-700 hover:text-primary font-medium">
                Attractions
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
                About TLHC
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">
                Contact
              </Link>
            </nav>
          )}

          {/* User Menu */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+250 123 456 789</span>
            </div>

            {isMobile ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="grid gap-4 py-4">
                    <Link href="/" className="block py-2 text-lg">
                      Home
                    </Link>
                    <Link href="/rooms" className="block py-2 text-lg">
                      Rooms & Suites
                    </Link>
                    <Link href="/attractions" className="block py-2 text-lg">
                      Attractions
                    </Link>
                    <Link href="/bookings" className="block py-2 text-lg">
                      My Bookings
                    </Link>
                    <Link href="/about" className="block py-2 text-lg">
                      About TLHC
                    </Link>
                    <Link href="/contact" className="block py-2 text-lg">
                      Contact
                    </Link>
                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>+250 123 456 789</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/bookings">
                  <Button variant="outline" size="sm">
                    My Bookings
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&q=80"
                          alt="User"
                        />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/profile">My Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/bookings">My Bookings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/contact">Contact Support</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Sign Out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
