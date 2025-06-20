import { MapPin, Clock, Star, Camera, Mountain, TreePine, Users, Car } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AttractionsPage() {
  const attractions = [
    {
      id: 1,
      name: "Volcanoes National Park",
      category: "Wildlife & Nature",
      description:
        "Home to the endangered mountain gorillas, this park offers once-in-a-lifetime gorilla trekking experiences in the Virunga Mountains.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Full Day",
      distance: "116 km from Kigali",
      rating: 4.9,
      highlights: ["Mountain Gorilla Trekking", "Golden Monkey Tracking", "Dian Fossey Tomb", "Scenic Mountain Views"],
      bestTime: "June to September, December to February",
      difficulty: "Moderate to Challenging",
    },
    {
      id: 2,
      name: "Lake Kivu",
      category: "Lakes & Beaches",
      description:
        "One of Africa's Great Lakes, offering beautiful beaches, water sports, and stunning sunset views along the western border with DRC.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 Days",
      distance: "147 km from Kigali",
      rating: 4.7,
      highlights: ["Beach Relaxation", "Boat Cruises", "Water Sports", "Fishing", "Hot Springs"],
      bestTime: "Year-round",
      difficulty: "Easy",
    },
    {
      id: 3,
      name: "Akagera National Park",
      category: "Wildlife & Nature",
      description:
        "Rwanda's only savanna park, home to the Big Five including lions, elephants, rhinos, leopards, and buffaloes.",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1-2 Days",
      distance: "110 km from Kigali",
      rating: 4.8,
      highlights: ["Big Five Safari", "Boat Safari on Lake Ihema", "Bird Watching", "Game Drives"],
      bestTime: "June to September",
      difficulty: "Easy",
    },
    {
      id: 4,
      name: "Nyungwe Forest National Park",
      category: "Wildlife & Nature",
      description:
        "Ancient rainforest with canopy walks, chimpanzee tracking, and over 300 bird species in southwestern Rwanda.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 Days",
      distance: "225 km from Kigali",
      rating: 4.6,
      highlights: ["Canopy Walk", "Chimpanzee Tracking", "Bird Watching", "Waterfall Hikes"],
      bestTime: "June to September, December to February",
      difficulty: "Moderate",
    },
    {
      id: 5,
      name: "Kigali Genocide Memorial",
      category: "Culture & History",
      description:
        "A moving memorial and museum documenting the 1994 genocide against the Tutsi, essential for understanding Rwanda's history.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Half Day",
      distance: "5 km from TLHC",
      rating: 4.9,
      highlights: ["Memorial Gardens", "Museum Exhibits", "Educational Tours", "Reflection Spaces"],
      bestTime: "Year-round",
      difficulty: "Easy",
    },
    {
      id: 6,
      name: "King's Palace Museum",
      category: "Culture & History",
      description:
        "Former royal residence in Nyanza showcasing traditional Rwandan architecture and the famous Inyambo cattle.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "Half Day",
      distance: "88 km from Kigali",
      rating: 4.5,
      highlights: ["Traditional Architecture", "Inyambo Cattle", "Cultural Performances", "Royal History"],
      bestTime: "Year-round",
      difficulty: "Easy",
    },
    {
      id: 7,
      name: "Kimironko Market",
      category: "Culture & Shopping",
      description:
        "Kigali's largest and most vibrant market, perfect for experiencing local culture and buying authentic Rwandan crafts.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 Hours",
      distance: "8 km from TLHC",
      rating: 4.3,
      highlights: ["Local Crafts", "Fresh Produce", "Traditional Textiles", "Cultural Experience"],
      bestTime: "Morning hours",
      difficulty: "Easy",
    },
    {
      id: 8,
      name: "Inema Arts Center",
      category: "Culture & Arts",
      description:
        "Contemporary art center showcasing Rwanda's vibrant art scene with galleries, studios, and cultural events.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-3 Hours",
      distance: "12 km from TLHC",
      rating: 4.4,
      highlights: ["Contemporary Art", "Artist Studios", "Cultural Events", "Art Workshops"],
      bestTime: "Year-round",
      difficulty: "Easy",
    },
  ]

  const categories = [
    { name: "All", count: attractions.length },
    { name: "Wildlife & Nature", count: attractions.filter((a) => a.category === "Wildlife & Nature").length },
    { name: "Culture & History", count: attractions.filter((a) => a.category === "Culture & History").length },
    { name: "Lakes & Beaches", count: attractions.filter((a) => a.category === "Lakes & Beaches").length },
    { name: "Culture & Shopping", count: attractions.filter((a) => a.category === "Culture & Shopping").length },
    { name: "Culture & Arts", count: attractions.filter((a) => a.category === "Culture & Arts").length },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Wildlife & Nature":
        return <TreePine className="h-4 w-4" />
      case "Culture & History":
        return <Users className="h-4 w-4" />
      case "Lakes & Beaches":
        return <Mountain className="h-4 w-4" />
      case "Culture & Shopping":
        return <Camera className="h-4 w-4" />
      case "Culture & Arts":
        return <Camera className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "Challenging":
        return "bg-red-100 text-red-800"
      case "Moderate to Challenging":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Rwanda Tourist Attractions"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Rwanda</h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8">
              The Land of a Thousand Hills offers incredible wildlife, rich culture, and breathtaking landscapes
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#attractions">Explore Attractions</Link>
            </Button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-gray-600">National Parks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Mountain Gorillas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-gray-600">Bird Species</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-gray-600">Months of Sunshine</div>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
        <section id="attractions" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Tourist Attractions</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                From mountain gorillas to pristine lakes, discover the best of Rwanda's natural beauty and rich culture
              </p>
            </div>

            <Tabs defaultValue="All" className="mb-8">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name} className="text-xs lg:text-sm">
                    {category.name} ({category.count})
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.name} value={category.name}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {attractions
                      .filter((attraction) => category.name === "All" || attraction.category === category.name)
                      .map((attraction) => (
                        <Card key={attraction.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                          <div className="relative h-48">
                            <Image
                              src={attraction.image || "/placeholder.svg"}
                              alt={attraction.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-white/90 text-gray-800 gap-1">
                                {getCategoryIcon(attraction.category)}
                                {attraction.category}
                              </Badge>
                            </div>
                            <div className="absolute top-4 right-4">
                              <Badge className={getDifficultyColor(attraction.difficulty)}>
                                {attraction.difficulty}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-bold">{attraction.name}</h3>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="text-sm font-medium">{attraction.rating}</span>
                              </div>
                            </div>

                            <p className="text-gray-600 mb-4 line-clamp-3">{attraction.description}</p>

                            <div className="space-y-2 mb-4 text-sm">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-gray-500" />
                                <span>{attraction.distance}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span>{attraction.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Car className="h-4 w-4 text-gray-500" />
                                <span>Best Time: {attraction.bestTime}</span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
                              <div className="flex flex-wrap gap-1">
                                {attraction.highlights.slice(0, 3).map((highlight, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {highlight}
                                  </Badge>
                                ))}
                                {attraction.highlights.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{attraction.highlights.length - 3} more
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <Button className="w-full" variant="outline">
                              Learn More
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Essential Travel Tips for Rwanda</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Camera className="h-5 w-5 text-primary" />
                      Best Time to Visit
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium">Dry Season (June - September)</p>
                        <p className="text-gray-600">Best for gorilla trekking and wildlife viewing</p>
                      </div>
                      <div>
                        <p className="font-medium">Short Dry Season (December - February)</p>
                        <p className="text-gray-600">Good weather, fewer crowds</p>
                      </div>
                      <div>
                        <p className="font-medium">Rainy Season (March - May, October - November)</p>
                        <p className="text-gray-600">Lush landscapes, lower prices</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Cultural Etiquette
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Dress modestly, especially when visiting memorials</li>
                      <li>• Remove shoes when entering homes</li>
                      <li>• Greet with "Muraho" (Hello in Kinyarwanda)</li>
                      <li>• Respect photography restrictions at sensitive sites</li>
                      <li>• Tipping is appreciated but not mandatory</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Mountain className="h-5 w-5 text-primary" />
                      What to Pack
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Sturdy hiking boots for trekking</li>
                      <li>• Light rain jacket</li>
                      <li>• Long-sleeved shirts and pants</li>
                      <li>• Insect repellent</li>
                      <li>• Sunscreen and hat</li>
                      <li>• Camera with extra batteries</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Car className="h-5 w-5 text-primary" />
                      Getting Around
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• TLHC provides airport transfers</li>
                      <li>• Private car hire recommended for attractions</li>
                      <li>• Motorcycle taxis (moto) for short distances</li>
                      <li>• Public buses connect major towns</li>
                      <li>• Most roads are well-maintained</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* TLHC Concierge Services */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Let TLHC Plan Your Rwanda Adventure</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our concierge team can arrange tours, permits, and transportation to all major attractions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Guides</h3>
                  <p className="text-gray-600 text-sm">Local guides with deep knowledge of Rwanda's attractions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Transportation</h3>
                  <p className="text-gray-600 text-sm">Comfortable vehicles and experienced drivers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Permits & Bookings</h3>
                  <p className="text-gray-600 text-sm">We handle all permits and advance bookings</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Plan My Trip</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/rooms">Book Your Stay</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
