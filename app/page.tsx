import { Search, MapPin, Calendar, Users, Star, Wifi, Car, Coffee, Dumbbell } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BookingSearchForm } from "@/components/booking-search"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[800px] md:h-[700px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="TLHC Luxury Apartments"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl md:text-7xl font-bold text-center mb-4">
              Welcome to <span className="text-primary">TLHC</span>
            </h1>
            <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
              Experience luxury accommodations in the heart of Kigali, Rwanda. Premium 2-bedroom apartment with
              world-class amenities.
            </p>

            {/* Booking Widget */}
            <BookingSearchForm />
          </div>
        </section>

        {/* About TLHC */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About TLHC</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The Luxury Home Company (TLHC) is the premier hospitality brand for tastefully furnished apartments, offering exceptional accommodation experiences in the heart of Kigali. Our meticulously designed 2-bedroom apartment combines modern luxury with authentic Rwandan hospitality, providing guests with an unforgettable stay.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
                  <p className="text-gray-600">Situated in the highbrow Nyarutarama district, enjoy easy access to Kigali's top attractions and business hubs.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Stunning Views</h3>
                  <p className="text-gray-600">Wake up to breathtaking views of the picturesque Kigali Golf Course from your private balcony.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Spacious Living</h3>
                  <p className="text-gray-600">Spread across 120 square meters, our apartment provides ample space for relaxation and comfort.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Location */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Kigali Location</h2>
              <p className="text-lg text-gray-700">Experience luxury in Rwanda's vibrant capital</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="TLHC Kigali Apartment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Luxury 2-Bedroom Apartment</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      <MapPin className="h-4 w-4 mr-1" />
                      Kigali City Center
                    </Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our flagship 2-bedroom apartment in Kigali offers 120 square meters of elegantly appointed living
                    space, featuring contemporary design, premium furnishings, and panoramic city views. Perfect for
                    business travelers, families, or extended stays.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-primary" />
                    <span className="text-sm">High-Speed WiFi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    <span className="text-sm">Free Parking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-primary" />
                    <span className="text-sm">Full Kitchen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    <span className="text-sm">Fitness Center</span>
                  </div>
                </div>

                <Button size="lg" asChild>
                  <Link href="/rooms/kigali-luxury-apartment">View Details & Book</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rwanda Attractions Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Rwanda's Wonders</h2>
              <p className="text-lg text-gray-700">
                Discover incredible attractions just hours from your TLHC accommodation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  name: "Volcanoes National Park",
                  description: "Meet the endangered mountain gorillas in their natural habitat",
                  image:
                    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  distance: "116 km from TLHC",
                  highlight: "Mountain Gorilla Trekking",
                },
                {
                  name: "Lake Kivu",
                  description: "Relax on beautiful beaches and enjoy stunning sunset views",
                  image:
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  distance: "147 km from TLHC",
                  highlight: "Beach & Water Sports",
                },
                {
                  name: "Akagera National Park",
                  description: "Experience Big Five safari adventures in Rwanda's savanna",
                  image:
                    "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  distance: "110 km from TLHC",
                  highlight: "Big Five Safari",
                },
              ].map((attraction, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-primary mb-2">{attraction.highlight}</Badge>
                      <h3 className="text-lg font-bold">{attraction.name}</h3>
                      <p className="text-sm opacity-90">{attraction.distance}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-600 text-sm">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/attractions">Discover All Attractions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Expansion Plans */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Expanding Across Africa & Beyond</h2>
              <p className="text-lg text-gray-700">Coming soon to major cities across the continent</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  city: "Lagos",
                  country: "Nigeria",
                  status: "Coming 2026",
                  image:
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  city: "Abuja",
                  country: "Nigeria",
                  status: "Coming 2027",
                  image:
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  city: "New York",
                  country: "USA",
                  status: "Coming 2028",
                  image:
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
              ].map((location, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={`${location.city}, ${location.country}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{location.city}</h3>
                      <p className="text-sm">{location.country}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-4">{location.status}</Badge>
                    <p className="text-gray-600">
                      Experience the same luxury standards and exceptional service in {location.city}.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose TLHC */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TLHC?</h2>
              <p className="text-lg text-gray-700">Unmatched luxury and service excellence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Prime Locations",
                  description: "Strategic locations in business and cultural districts",
                  icon: <MapPin className="h-8 w-8" />,
                },
                {
                  title: "Luxury Amenities",
                  description: "Premium furnishings and world-class facilities",
                  icon: <Star className="h-8 w-8" />,
                },
                {
                  title: "24/7 Concierge",
                  description: "Round-the-clock personalized guest services",
                  icon: <Users className="h-8 w-8" />,
                },
                {
                  title: "Local Expertise",
                  description: "Deep knowledge of local culture and attractions",
                  icon: <Coffee className="h-8 w-8" />,
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience TLHC?</h2>
            <p className="text-xl mb-8 opacity-90">Book your stay in our luxury Kigali apartment today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/rooms">View Rooms & Rates</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
