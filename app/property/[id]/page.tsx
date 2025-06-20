import { Heart, Share, Star, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PropertyAmenities from "@/components/property-amenities"
import PropertyMap from "@/components/property-map"
import PropertyReviews from "@/components/property-reviews"

export default function PropertyPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch property data based on the ID
  const property = {
    id: Number.parseInt(params.id),
    title: "Luxury Beachfront Villa with Private Pool",
    description:
      "Experience the ultimate beachfront luxury in this stunning villa with panoramic ocean views, private pool, and direct beach access. Perfect for families or groups looking for a premium vacation experience.",
    location: "Malibu, California",
    price: 450,
    rating: 4.97,
    reviewCount: 128,
    host: {
      name: "Jennifer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      isSuperhost: true,
      joinedDate: "2018",
    },
    amenities: [
      "Ocean view",
      "Private pool",
      "Beach access",
      "Wifi",
      "Kitchen",
      "Free parking",
      "Air conditioning",
      "Washer & dryer",
      "TV",
      "Workspace",
      "Outdoor shower",
      "BBQ grill",
    ],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    beds: 4,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 8,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
        <div className="flex flex-wrap items-center justify-between gap-y-2 mb-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-primary text-primary mr-1" />
              <span className="font-medium">{property.rating}</span>
            </div>
            <span className="text-gray-500">·</span>
            <Link href="#reviews" className="font-medium underline">
              {property.reviewCount} reviews
            </Link>
            <span className="text-gray-500">·</span>
            <span>{property.location}</span>
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

        {/* Property Images */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 mb-8 rounded-xl overflow-hidden">
          <div className="md:col-span-2 md:row-span-2 relative aspect-square md:aspect-auto">
            <Image src={property.images[0] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${property.title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property Info */}
            <div className="flex justify-between items-start mb-6 pb-6 border-b">
              <div>
                <h2 className="text-xl font-bold mb-1">Entire villa hosted by {property.host.name}</h2>
                <p className="text-gray-600">
                  {property.maxGuests} guests · {property.bedrooms} bedrooms · {property.beds} beds ·{" "}
                  {property.bathrooms} bathrooms
                </p>
              </div>
              <div className="flex items-center">
                <Avatar className="h-14 w-14 border">
                  <AvatarImage src={property.host.image || "/placeholder.svg"} alt={property.host.name} />
                  <AvatarFallback>{property.host.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {property.host.isSuperhost && (
                  <Badge variant="outline" className="ml-2">
                    Superhost
                  </Badge>
                )}
              </div>
            </div>

            {/* Property Description */}
            <div className="mb-8 pb-8 border-b">
              <h2 className="text-xl font-bold mb-4">About this place</h2>
              <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
            </div>

            {/* Property Amenities */}
            <PropertyAmenities amenities={property.amenities} />

            {/* Calendar */}
            <div className="mb-8 pb-8 border-b">
              <h2 className="text-xl font-bold mb-4">Availability</h2>
              <p className="mb-4 text-gray-700">Add your travel dates for exact pricing</p>
              <div className="bg-white rounded-lg border p-4">
                <CalendarComponent mode="range" className="mx-auto" />
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:row-start-1">
            <div className="sticky top-24 bg-white rounded-xl border shadow-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-2xl font-bold">${property.price}</span>
                  <span className="text-gray-600"> night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="mx-1 text-gray-500">·</span>
                  <Link href="#reviews" className="text-gray-500 underline">
                    {property.reviewCount} reviews
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b">
                    <div className="text-xs font-bold uppercase">Check-in</div>
                    <div>6/1/2023</div>
                  </div>
                  <div className="p-3 border-b">
                    <div className="text-xs font-bold uppercase">Checkout</div>
                    <div>6/8/2023</div>
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

              <Link href={`/checkout/${params.id}`}>
                <Button className="w-full mb-4">Reserve</Button>
              </Link>
              <p className="text-center text-gray-500 text-sm mb-6">You won't be charged yet</p>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="underline">${property.price} x 7 nights</span>
                  <span>${property.price * 7}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>$210</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total before taxes</span>
                  <span>${property.price * 7 + 150 + 210}</span>
                </div>
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
                value="host"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Host
              </TabsTrigger>
            </TabsList>
            <TabsContent value="reviews" className="pt-6">
              <PropertyReviews rating={property.rating} reviewCount={property.reviewCount} />
            </TabsContent>
            <TabsContent value="location" className="pt-6">
              <h2 className="text-xl font-bold mb-4">Where you'll be</h2>
              <p className="mb-4 text-gray-700">{property.location}</p>
              <PropertyMap location={property.location} />
            </TabsContent>
            <TabsContent value="host" className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="h-16 w-16 border">
                  <AvatarImage src={property.host.image || "/placeholder.svg"} alt={property.host.name} />
                  <AvatarFallback>{property.host.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">Hosted by {property.host.name}</h2>
                  <p className="text-gray-600">Joined in {property.host.joinedDate} · Superhost</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  I love sharing my beautiful beachfront property with guests from around the world. I'm always
                  available to help make your stay perfect!
                </p>
                <h3 className="font-bold">During your stay</h3>
                <p className="text-gray-700">
                  I'm available 24/7 for any questions or assistance you might need during your stay.
                </p>
                <Button variant="outline">Contact Host</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
