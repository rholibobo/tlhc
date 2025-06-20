import { MapPin, Users, Star, Award, Globe, Heart } from "lucide-react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="TLHC Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About TLHC</h1>
            <p className="text-xl md:text-2xl max-w-3xl">Redefining luxury hospitality across Africa and beyond</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Founded in the heart of Kigali, Rwanda, The Luxury Hotel Company (TLHC) was born from a vision to
                    create exceptional hospitality experiences that celebrate African excellence while meeting
                    international luxury standards.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our journey began with a single 2-bedroom luxury apartment in Kigali's business district,
                    meticulously designed to offer guests an unparalleled blend of comfort, style, and authentic Rwandan
                    hospitality.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Today, we're expanding our footprint across Africa and beyond, bringing our commitment to excellence
                    to Lagos, Abuja, and New York, while maintaining our core values of luxury, authenticity, and
                    exceptional service.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="TLHC Kigali Property"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                The principles that guide everything we do at TLHC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="h-8 w-8" />,
                  title: "Excellence",
                  description:
                    "We strive for perfection in every detail, from our accommodations to our service delivery.",
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Authenticity",
                  description:
                    "We celebrate local culture and heritage while providing world-class luxury experiences.",
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Hospitality",
                  description: "Our guests are family, and we treat them with warmth, respect, and genuine care.",
                },
                {
                  icon: <Globe className="h-8 w-8" />,
                  title: "Innovation",
                  description:
                    "We continuously evolve and adapt to exceed our guests' expectations and industry standards.",
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Quality",
                  description:
                    "We maintain the highest standards in all aspects of our operations and guest experiences.",
                },
                {
                  icon: <MapPin className="h-8 w-8" />,
                  title: "Community",
                  description: "We're committed to supporting and uplifting the communities where we operate.",
                },
              ].map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
              <p className="text-lg text-gray-700">From Kigali to the world</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  city: "Kigali",
                  country: "Rwanda",
                  status: "Available Now",
                  statusColor: "bg-green-500",
                  description: "Our flagship location in Rwanda's vibrant capital",
                  image:
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  city: "Lagos",
                  country: "Nigeria",
                  status: "Opening Q3 2024",
                  statusColor: "bg-orange-500",
                  description: "Luxury accommodations in Nigeria's commercial hub",
                  image:
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  city: "Abuja",
                  country: "Nigeria",
                  status: "Opening Q4 2024",
                  statusColor: "bg-orange-500",
                  description: "Premium stays in Nigeria's federal capital",
                  image:
                    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                },
                {
                  city: "New York",
                  country: "USA",
                  status: "Opening 2025",
                  statusColor: "bg-blue-500",
                  description: "Bringing African luxury to the Big Apple",
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
                      <h3 className="text-lg font-bold">{location.city}</h3>
                      <p className="text-sm">{location.country}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Badge className={`${location.statusColor} text-white mb-3`}>{location.status}</Badge>
                    <p className="text-gray-600 text-sm">{location.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose TLHC */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose TLHC?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Unmatched Quality</h3>
                  <p className="text-gray-700 mb-6">
                    Every TLHC property is meticulously designed and maintained to the highest standards, ensuring a
                    consistently exceptional experience across all our locations.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                  <p className="text-gray-700">
                    Our team's deep knowledge of local culture, attractions, and services ensures you experience the
                    best each destination has to offer.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
                  <p className="text-gray-700 mb-6">
                    From airport transfers to restaurant recommendations, our 24/7 concierge service is dedicated to
                    making your stay seamless and memorable.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Strategic Locations</h3>
                  <p className="text-gray-700">
                    All our properties are strategically located in prime business and cultural districts, putting you
                    at the center of each city's energy and opportunities.
                  </p>
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
