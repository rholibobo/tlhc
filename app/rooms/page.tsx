import { MapPin, Users, Bed, Bath, Coffee, Star, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RoomsPage() {
  const apartment = {
    id: "kigali-luxury-apartment",
    name: "Kigali Luxury 2-Bedroom Apartment",
    location: "Kigali City Center, Rwanda",
    description:
      "Experience unparalleled luxury in our flagship 2-bedroom apartment located in the heart of Kigali. This meticulously designed space offers 120 square meters of contemporary elegance with panoramic city views.",
    price: 180,
    currency: "USD",
    rating: 4.9,
    reviewCount: 127,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    size: "120 sqm",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    amenities: [
      "High-Speed WiFi",
      "Full Kitchen",
      "Free Parking",
      "Fitness Center",
      "24/7 Concierge",
      "Laundry Service",
      "City Views",
      "Air Conditioning",
      "Smart TV",
      "Work Desk",
      "Balcony",
      "Security System",
    ],
    features: [
      "Prime location in Kigali's business district",
      "Walking distance to major attractions",
      "Modern furnishings and appliances",
      "Professional cleaning service",
      "Airport transfer available",
      "Local area expertise and recommendations",
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Luxury Accommodations</h1>
              <p className="text-lg text-gray-700">
                Currently available in Kigali, Rwanda - Expanding to Lagos, Abuja, and the USA
              </p>
            </div>
          </div>
        </section>

        {/* Current Availability */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Available Now</h2>
              <p className="text-gray-600">Book your stay at our flagship location</p>
            </div>

            <Card className="overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 h-96 lg:h-full">
                    <div className="relative col-span-2 row-span-1">
                      <Image
                        src={apartment.images[0] || "/placeholder.svg"}
                        alt={apartment.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {apartment.images.slice(1, 3).map((image, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${apartment.name} - View ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary">Available Now</Badge>
                </div>

                {/* Details */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{apartment.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{apartment.location}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{apartment.rating}</span>
                        <span className="text-gray-500">({apartment.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">Up to {apartment.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span className="text-sm">{apartment.bedrooms} bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span className="text-sm">{apartment.bathrooms} bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm">{apartment.size}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{apartment.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {apartment.amenities.slice(0, 6).map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">
                        ${apartment.price} <span className="text-base font-normal text-gray-600">/ night</span>
                      </div>
                      <div className="text-sm text-gray-500">Prices in {apartment.currency}</div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" asChild>
                        <Link href={`/rooms/${apartment.id}`}>View Details</Link>
                      </Button>
                      <Button asChild>
                        <Link href={`/rooms/${apartment.id}`}>
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
              <p className="text-gray-600">Expanding to new destinations across Africa and beyond</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  city: "Lagos",
                  country: "Nigeria",
                  status: "Opening Q3 2024",
                  description: "Luxury accommodations in Nigeria's commercial capital",
                  image:
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  city: "Abuja",
                  country: "Nigeria",
                  status: "Opening Q4 2024",
                  description: "Premium stays in Nigeria's federal capital territory",
                  image:
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  city: "New York",
                  country: "USA",
                  status: "Opening 2025",
                  description: "Bringing African luxury hospitality to the Big Apple",
                  image:
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
              ].map((location, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={`${location.city}, ${location.country}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{location.city}</h3>
                      <p className="text-sm">{location.country}</p>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-orange-500">Coming Soon</Badge>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {location.status}
                    </Badge>
                    <p className="text-gray-600">{location.description}</p>
                    <Button variant="outline" className="w-full mt-4" disabled>
                      Notify Me When Available
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book Direct */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why Book Direct with TLHC?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Best Rate Guarantee</h3>
                  <p className="text-gray-600">We guarantee the lowest rates when you book directly with us</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Exclusive Perks</h3>
                  <p className="text-gray-600">Enjoy complimentary upgrades and special amenities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                  <p className="text-gray-600">Direct access to our concierge and guest services team</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
