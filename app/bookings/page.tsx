import { Calendar, ChevronRight, Home, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BookingsPage() {
  // In a real app, you would fetch the user's bookings from an API
  const upcomingBookings = [
    {
      id: 1,
      title: "Luxury Beachfront Villa with Private Pool",
      location: "Malibu, California",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "Jun 1, 2023",
      checkOut: "Jun 8, 2023",
      status: "confirmed",
      price: 3150,
    },
    {
      id: 2,
      title: "Modern Downtown Apartment with City Views",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "Jul 15, 2023",
      checkOut: "Jul 20, 2023",
      status: "pending",
      price: 1200,
    },
  ]

  const pastBookings = [
    {
      id: 3,
      title: "Cozy Mountain Cabin with Hot Tub",
      location: "Aspen, Colorado",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "Jan 10, 2023",
      checkOut: "Jan 15, 2023",
      status: "completed",
      price: 1800,
    },
    {
      id: 4,
      title: "Charming Cottage in Wine Country",
      location: "Napa Valley, California",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "Mar 5, 2023",
      checkOut: "Mar 10, 2023",
      status: "completed",
      price: 1500,
    },
    {
      id: 5,
      title: "Stylish Loft in Historic District",
      location: "Boston, Massachusetts",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      checkIn: "Apr 20, 2023",
      checkOut: "Apr 25, 2023",
      status: "completed",
      price: 1350,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Trips</h1>

        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="canceled">Canceled</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-6">
            {upcomingBookings.length > 0 ? (
              <div className="grid gap-6">
                {upcomingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No upcoming trips"
                description="Time to dust off your bags and start planning your next adventure"
                action="Start searching"
                href="/"
              />
            )}
          </TabsContent>
          <TabsContent value="past" className="mt-6">
            {pastBookings.length > 0 ? (
              <div className="grid gap-6">
                {pastBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} isPast />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No past trips"
                description="You haven't had any trips yet. When you do, they'll show up here."
                action="Start searching"
                href="/"
              />
            )}
          </TabsContent>
          <TabsContent value="canceled" className="mt-6">
            <EmptyState
              title="No canceled trips"
              description="You haven't canceled any trips. If you do, they'll show up here."
              action="Start searching"
              href="/"
            />
          </TabsContent>
        </Tabs>

        <section className="mt-12 bg-gray-50 rounded-xl p-6 md:p-8">
          <h2 className="text-xl font-bold mb-4">Travel plans for 2023?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl">
            Find the perfect place to stay and create unforgettable memories. From cozy cabins to luxury beachfront
            villas, we have something for everyone.
          </p>
          <Button asChild>
            <Link href="/">Explore destinations</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface BookingProps {
  booking: {
    id: number
    title: string
    location: string
    image: string
    checkIn: string
    checkOut: string
    status: string
    price: number
  }
  isPast?: boolean
}

function BookingCard({ booking, isPast = false }: BookingProps) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
        <div className="relative h-48 md:h-full">
          <Image src={booking.image || "/placeholder.svg"} alt={booking.title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap justify-between gap-y-2 mb-4">
            <h3 className="font-bold text-lg">{booking.title}</h3>
            {!isPast && booking.status === "confirmed" && (
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
            )}
            {!isPast && booking.status === "pending" && (
              <Badge variant="outline" className="text-yellow-800 border-yellow-300 bg-yellow-50 hover:bg-yellow-100">
                Pending
              </Badge>
            )}
          </div>

          <div className="flex items-start gap-2 mb-2 text-gray-600">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{booking.location}</span>
          </div>

          <div className="flex items-start gap-2 mb-4 text-gray-600">
            <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>
              {booking.checkIn} - {booking.checkOut}
            </span>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-wrap items-center justify-between gap-y-4">
            <div>
              <div className="text-sm text-gray-500">Total price</div>
              <div className="font-bold">${booking.price}</div>
            </div>
            <div className="flex gap-3">
              {isPast ? (
                <Button variant="outline">Leave a review</Button>
              ) : (
                <>
                  <Button variant="outline">Modify</Button>
                  <Button asChild>
                    <Link href={`/property/${booking.id}`}>View details</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface EmptyStateProps {
  title: string
  description: string
  action: string
  href: string
}

function EmptyState({ title, description, action, href }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Home className="h-8 w-8 text-gray-500" />
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">{description}</p>
      <Button asChild>
        <Link href={href}>
          {action}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
