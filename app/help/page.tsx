import { MessageCircle, Phone, Mail, FileText, Shield, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HelpPage() {
  const helpTopics = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Booking & Reservations",
      description: "Help with making, changing, or canceling reservations",
      articles: 15,
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payments & Pricing",
      description: "Questions about payments, fees, and pricing",
      articles: 12,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety & Security",
      description: "Information about staying safe and secure",
      articles: 8,
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Host Communication",
      description: "Tips for communicating with your host",
      articles: 6,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">How can we help?</h1>
            <div className="relative max-w-md mx-auto">
              <Input placeholder="Search help articles..." className="pr-10" />
              <Button size="sm" className="absolute right-1 top-1">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 mb-4">Available 24/7</p>
                <Button variant="outline" size="sm">
                  1-800-AIRBNB
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MessageCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600 mb-4">Chat with support</p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600 mb-4">Get help via email</p>
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Help Topics */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse help topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {helpTopics.map((topic, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary">{topic.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{topic.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{topic.description}</p>
                        <p className="text-xs text-gray-500">{topic.articles} articles</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Describe your issue..." className="min-h-[120px]" />
              </div>
              <Button className="w-full md:w-auto">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
