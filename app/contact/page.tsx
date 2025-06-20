import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact TLHC</h1>
              <p className="text-lg text-gray-700">
                We're here to help make your stay exceptional. Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Smith" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john.smith@email.com" required />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+250 123 456 789" />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="booking">Booking Inquiry</SelectItem>
                            <SelectItem value="existing">Existing Reservation</SelectItem>
                            <SelectItem value="general">General Information</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" required />
                      </div>

                      <Button className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>

                <div className="space-y-6">
                  {/* Kigali Office */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Kigali Office
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                          <div>
                            <p className="font-medium">Address</p>
                            <p className="text-gray-600">
                              KN 4 Ave, Kigali City Center
                              <br />
                              Kigali, Rwanda
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-gray-600">+250 123 456 789</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-gray-600">kigali@tlhc.rw</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="h-4 w-4 text-gray-500 mt-1" />
                          <div>
                            <p className="font-medium">Business Hours</p>
                            <p className="text-gray-600">
                              Monday - Friday: 8:00 AM - 6:00 PM
                              <br />
                              Saturday - Sunday: 9:00 AM - 5:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 24/7 Support */}
                  <Card className="bg-primary/5">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-primary mb-3">24/7 Guest Support</h3>
                      <p className="text-gray-700 mb-4">
                        For urgent matters or if you're a current guest needing immediate assistance:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="font-medium">Emergency: +250 123 456 790</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="font-medium">support@tlhc.rw</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Coming Soon Locations */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Expansion Locations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-medium">Lagos, Nigeria</p>
                          <p className="text-gray-600">Opening Q3 2024</p>
                        </div>
                        <div>
                          <p className="font-medium">Abuja, Nigeria</p>
                          <p className="text-gray-600">Opening Q4 2024</p>
                        </div>
                        <div>
                          <p className="font-medium">New York, USA</p>
                          <p className="text-gray-600">Opening 2025</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    question: "How do I make a reservation?",
                    answer:
                      "You can book directly through our website, call our reservation team, or email us. We recommend booking online for the best rates and instant confirmation.",
                  },
                  {
                    question: "What is your cancellation policy?",
                    answer:
                      "Free cancellation up to 24 hours before check-in. Cancellations made 7+ days in advance receive a 50% refund. Same-day cancellations are non-refundable.",
                  },
                  {
                    question: "Do you provide airport transfers?",
                    answer:
                      "Yes, we offer complimentary airport transfer service for all guests. Please inform us of your flight details at least 24 hours before arrival.",
                  },
                  {
                    question: "What amenities are included?",
                    answer:
                      "All our apartments include high-speed WiFi, full kitchen, free parking, fitness center access, 24/7 concierge, and daily housekeeping service.",
                  },
                  {
                    question: "Is there a minimum stay requirement?",
                    answer:
                      "Our minimum stay is 2 nights. For extended stays (7+ nights), we offer special rates and additional services.",
                  },
                  {
                    question: "How can I contact you during my stay?",
                    answer:
                      "Our 24/7 concierge team is available via phone, WhatsApp, or in-person. Contact details will be provided upon check-in.",
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
