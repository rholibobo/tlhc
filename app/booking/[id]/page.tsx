import { ArrowLeft, Info, MapPin, Users, Bed, Bath } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BookingPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch room data based on the ID
  const room = {
    id: params.id,
    name: "Kigali Luxury 2-Bedroom Apartment",
    location: "Kigali City Center, Rwanda",
    price: 180,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    checkIn: "Jun 1, 2024",
    checkOut: "Jun 8, 2024",
    guests: 2,
    nights: 7,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link href={`/rooms/${params.id}`} className="flex items-center text-gray-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to room details
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Complete Your Reservation</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Guest Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Guest Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Smith" required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john.smith@email.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+250 123 456 789" required />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="country">Country/Region *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rw">Rwanda</SelectItem>
                      <SelectItem value="ng">Nigeria</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Special Requests */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Special Requests</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="arrival">Estimated Arrival Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select arrival time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (6 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 6 PM)</SelectItem>
                      <SelectItem value="evening">Evening (6 PM - 10 PM)</SelectItem>
                      <SelectItem value="late">Late (After 10 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="purpose">Purpose of Visit</Label>
                  <RadioGroup defaultValue="leisure">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="leisure" id="leisure" />
                      <Label htmlFor="leisure">Leisure</Label>
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
                <div>
                  <Label htmlFor="requests">Additional Requests</Label>
                  <Textarea
                    id="requests"
                    placeholder="Airport transfer, early check-in, dietary requirements, etc."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Payment Information */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Payment Information</h2>
              <Tabs defaultValue="card">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="card">Credit Card</TabsTrigger>
                  <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile Money</TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date *</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC *</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card *</Label>
                    <Input id="cardName" placeholder="John Smith" />
                  </div>
                </TabsContent>
                <TabsContent value="bank" className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Bank Transfer Details</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Transfer the total amount to our bank account and send confirmation.
                    </p>
                    <div className="text-sm space-y-1">
                      <p>
                        <strong>Bank:</strong> Bank of Kigali
                      </p>
                      <p>
                        <strong>Account:</strong> TLHC Ltd
                      </p>
                      <p>
                        <strong>Account Number:</strong> 123456789
                      </p>
                      <p>
                        <strong>SWIFT:</strong> BKRWRWRW
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="mobile" className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Mobile Money Payment</h4>
                    <p className="text-sm text-gray-700 mb-2">Pay using MTN Mobile Money or Airtel Money</p>
                    <div>
                      <Label htmlFor="mobileNumber">Mobile Number *</Label>
                      <Input id="mobileNumber" placeholder="+250 7XX XXX XXX" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <Separator className="my-8" />

            {/* Terms and Conditions */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                  <p>
                    Free cancellation up to 24 hours before check-in. After that, 50% refund up to 7 days before
                    check-in.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">House Rules</h4>
                  <ul className="space-y-1">
                    <li>• Check-in: 3:00 PM | Check-out: 11:00 AM</li>
                    <li>• No smoking inside the apartment</li>
                    <li>• No parties or events</li>
                    <li>• Quiet hours: 10 PM - 7 AM</li>
                    <li>• Maximum {room.maxGuests} guests</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full md:w-auto px-12">
                Complete Reservation
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                By completing this reservation, you agree to TLHC's Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:row-start-1">
            <div className="sticky top-24 bg-white rounded-xl border shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Reservation Summary</h3>

              <div className="flex gap-4 mb-6">
                <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium line-clamp-2">{room.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{room.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span className="font-medium">{room.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span className="font-medium">{room.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className="font-medium">{room.guests} guests</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{room.nights} nights</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Bed className="h-4 w-4 text-primary" />
                  <span>{room.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-4 w-4 text-primary" />
                  <span>{room.bathrooms} bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Up to {room.maxGuests} guests</span>
                </div>
              </div>

              <Separator className="my-6" />

              <h4 className="font-semibold mb-4">Price Breakdown</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>
                    ${room.price} x {room.nights} nights
                  </span>
                  <span>${room.price * room.nights}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>$25</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & fees</span>
                  <span>$89</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total ({room.currency})</span>
                  <span>${room.price * room.nights + 25 + 89}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-primary mb-1">TLHC Guarantee</p>
                    <p className="text-gray-600">Best rate guarantee and 24/7 support included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
