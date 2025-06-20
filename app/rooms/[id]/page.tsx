import { Heart, Share, Star, User, MapPin, Users, Bed, Bath, Calendar, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PropertyAmenities from "@/components/property-amenities"
import PropertyMap from "@/components/property-map"
import PropertyReviews from "@/components/property-reviews"

export default function RoomDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch room data based on the ID
  const room = {
    id: params.id,
    name: "Kigali Luxury 2-Bedroom Apartment",
    description:
      "Experience unparalleled luxury in our flagship 2-bedroom apartment located in the heart of Kigali. This meticulously designed space offers 120 square meters of contemporary elegance with panoramic city views, premium furnishings, and world-class amenities. Perfect for business travelers, families, or extended stays seeking the finest accommodation in Rwanda's capital.",
    location: "Kigali City Center, Rwanda",
    address: "KN 4 Ave, Kigali, Rwanda",
    price: 180,
    currency: "USD",
    rating: 4.9,
    reviewCount: 127,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    size: "120 sqm",
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      "Airport Transfer",
      "Housekeeping",
      "Room Service",
      "Business Center",
    ],
    features: [
      "Prime location in Kigali's business district",
      "Walking distance to major attractions and restaurants",
      "Modern furnishings and premium appliances",
      "Professional daily housekeeping service",
      "Complimentary airport transfer service",
      "Local area expertise and personalized recommendations",
      "24/7 security and access control",
      "High-speed internet throughout the property",
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href="/rooms" className="hover:underline">
            Rooms
          </Link>
          <span className="mx-2">›</span>
          <span>Kigali Luxury Apartment</span>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{room.name}</h1>
          <div className="flex flex-wrap items-center justify-between gap-y-2 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{room.rating}</span>
                <span className="text-gray-500">({room.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">{room.location}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Share className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Heart className="h-4 w-4" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Room Images */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 mb-8 rounded-xl overflow-hidden">
          <div className="md:col-span-2 md:row-span-2 relative aspect-square md:aspect-auto">
            <Image src={room.images[0] || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
          </div>
          {room.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${room.name} - View ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Room Info */}
            <div className="mb-8 pb-8 border-b">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Up to {room.maxGuests}</div>
                    <div className="text-sm text-gray-500">Guests</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{room.bedrooms}</div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{room.bathrooms}</div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{room.size}</div>
                    <div className="text-sm text-gray-500">Size</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Check-in: {room.checkIn}</div>
                    <div className="text-sm text-gray-500">Check-out: {room.checkOut}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">TLHC Managed</div>
                    <div className="text-sm text-gray-500">Professional hospitality</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Description */}
            <div className="mb-8 pb-8 border-b">
              <h2 className="text-xl font-bold mb-4">About this accommodation</h2>
              <p className="text-gray-700 leading-relaxed">{room.description}</p>
            </div>

            {/* Amenities */}
            <PropertyAmenities amenities={room.amenities} />

            {/* Features */}
            <div className="mb-8 pb-8 border-b">
              <h2 className="text-xl font-bold mb-4">What makes this place special</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="mb-8 pb-8 border-b">
              <h2 className="text-xl font-bold mb-4">Select your dates</h2>
              <p className="mb-4 text-gray-700">Choose your check-in and check-out dates</p>
              <div className="bg-white rounded-lg border p-4">
                <CalendarComponent mode="range" className="mx-auto" />
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:row-start-1">
            <div className="sticky top-24 bg-white rounded-xl border shadow-lg p-6">
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">
                  ${room.price} <span className="text-lg font-normal text-gray-600">/ night</span>
                </div>
                <div className="text-sm text-gray-500">Prices in {room.currency}</div>
                <div className="flex items-center mt-2">
                  <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                  <span className="font-medium">{room.rating}</span>
                  <span className="mx-1 text-gray-500">·</span>
                  <span className="text-gray-500">{room.reviewCount} reviews</span>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b">
                    <div className="text-xs font-bold uppercase">Check-in</div>
                    <div>Select date</div>
                  </div>
                  <div className="p-3 border-b">
                    <div className="text-xs font-bold uppercase">Check-out</div>
                    <div>Select date</div>
                  </div>
                  <div className="p-3 col-span-2">
                    <div className="text-xs font-bold uppercase mb-1">Guests</div>
                    <div className="flex justify-between items-center">
                      <div>2 guests</div>
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <Link href={`/booking/${params.id}`}>
                <Button className="w-full mb-4" size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  Reserve Now
                </Button>
              </Link>
              <p className="text-center text-gray-500 text-sm mb-6">Best rate guaranteed</p>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>${room.price} x 7 nights</span>
                  <span>${room.price * 7}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>$25</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>$89</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${room.price * 7 + 25 + 89}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">TLHC Guarantee</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Best rate guarantee</li>
                  <li>• Free cancellation up to 24h</li>
                  <li>• 24/7 guest support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for Reviews, Location, etc. */}
        <div className="mt-12">
          <Tabs defaultValue="reviews">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
              <TabsTrigger
                value="reviews"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="location"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Location
              </TabsTrigger>
              <TabsTrigger
                value="policies"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Policies
              </TabsTrigger>
            </TabsList>
            <TabsContent value="reviews" className="pt-6">
              <PropertyReviews rating={room.rating} reviewCount={room.reviewCount} />
            </TabsContent>
            <TabsContent value="location" className="pt-6">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <p className="mb-4 text-gray-700">{room.address}</p>
              <PropertyMap location={room.location} />
            </TabsContent>
            <TabsContent value="policies" className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Check-in/Check-out</h3>
                  <p className="text-gray-700">
                    Check-in: {room.checkIn} | Check-out: {room.checkOut}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cancellation Policy</h3>
                  <p className="text-gray-700">
                    Free cancellation up to 24 hours before check-in. After that, 50% refund up to 7 days before
                    check-in.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">House Rules</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• No smoking inside the apartment</li>
                    <li>• No parties or events</li>
                    <li>• Quiet hours: 10 PM - 7 AM</li>
                    <li>• Maximum {room.maxGuests} guests</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
