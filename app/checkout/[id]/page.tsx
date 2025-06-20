import { ArrowLeft, Calendar, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CheckoutPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch property data based on the ID
  const property = {
    id: Number.parseInt(params.id),
    title: "Luxury Beachfront Villa with Private Pool",
    location: "Malibu, California",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    checkIn: "Jun 1, 2023",
    checkOut: "Jun 8, 2023",
    guests: 2,
    nights: 7,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link href={`/property/${params.id}`} className="flex items-center text-gray-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to property
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Confirm and pay</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Trip Details */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Your trip</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Dates</h3>
                  <div className="flex justify-between">
                    <span>
                      {property.checkIn} - {property.checkOut}
                    </span>
                    <Button variant="link" className="p-0 h-auto">
                      Edit
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Guests</h3>
                  <div className="flex justify-between">
                    <span>{property.guests} guests</span>
                    <Button variant="link" className="p-0 h-auto">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Payment Options */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Pay with</h2>
              <Tabs defaultValue="card">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="card">Credit Card</TabsTrigger>
                  <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="card-number">Card number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiration</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name">Name on card</Label>
                      <Input id="name" placeholder="John Smith" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="paypal" className="flex justify-center items-center h-40">
                  <Button className="gap-2">
                    <Image src="/placeholder.svg?height=20&width=80" alt="PayPal" width={80} height={20} />
                    Continue with PayPal
                  </Button>
                </TabsContent>
                <TabsContent value="apple" className="flex justify-center items-center h-40">
                  <Button variant="outline" className="gap-2">
                    <Image src="/placeholder.svg?height=20&width=20" alt="Apple Pay" width={20} height={20} />
                    Pay with Apple Pay
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            <Separator className="my-8" />

            {/* Cancellation Policy */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Cancellation policy</h2>
              <p className="text-gray-700 mb-4">
                Free cancellation before May 27. Cancel before Jun 1 for a partial refund.
              </p>
              <Button variant="link" className="p-0 h-auto">
                Learn more
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Ground Rules */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Ground rules</h2>
              <p className="text-gray-700 mb-4">
                We ask every guest to remember a few simple things about what makes a great guest.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Follow the house rules</li>
                <li>Treat the host's home like your own</li>
                <li>Communicate with your host</li>
              </ul>
            </div>

            <Separator className="my-8" />

            {/* Message to Host */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Message to host (optional)</h2>
              <p className="text-gray-700 mb-4">Let the host know why you're traveling and when you'll arrive.</p>
              <Textarea placeholder="Hello! Looking forward to our stay..." className="min-h-[120px]" />
            </div>

            {/* Required for your trip */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Required for your trip</h2>
              <p className="text-gray-700 mb-4">The host requires you to provide the following information:</p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <Label className="mb-2 block">Purpose of trip</Label>
                  <RadioGroup defaultValue="vacation">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vacation" id="vacation" />
                      <Label htmlFor="vacation">Vacation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business" id="business" />
                      <Label htmlFor="business">Business</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full md:w-auto">
                Confirm and pay
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                By selecting the button above, you agree to the Host's House Rules, Ground Rules for Guests, Airbnb's
                Rebooking and Refund Policy, and that Airbnb can charge your payment method if you're responsible for
                damage.
              </p>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:row-start-1">
            <div className="sticky top-24 bg-white rounded-xl border shadow-lg p-6">
              <div className="flex gap-4 mb-6">
                <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">Entire villa in {property.location}</h3>
                  <p className="font-medium line-clamp-2">{property.title}</p>
                  <div className="mt-2 flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span>
                      {property.checkIn} - {property.checkOut}
                    </span>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <h3 className="text-lg font-bold mb-4">Price details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>
                    ${property.price} x {property.nights} nights
                  </span>
                  <span>${property.price * property.nights}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cleaning fee</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>$210</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>$185</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total (USD)</span>
                  <span>${property.price * property.nights + 150 + 210 + 185}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-start gap-2">
                <Info className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  You won't be charged until the host accepts your booking request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
