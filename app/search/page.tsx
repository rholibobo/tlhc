"use client"

import { useState } from "react"
import { Calendar, Filter, MapPin, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PropertyCard from "@/components/property-card"

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState([50, 500])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [propertyType, setPropertyType] = useState("")
  const [guests, setGuests] = useState(2)

  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Downtown",
      location: "New York, NY",
      price: 120,
      rating: 4.85,
      reviewCount: 124,
      imageUrl:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      type: "apartment",
      amenities: ["Wifi", "Kitchen", "Air conditioning"],
    },
    {
      id: 2,
      title: "Luxury Villa with Ocean View",
      location: "Miami, FL",
      price: 350,
      rating: 4.98,
      reviewCount: 87,
      imageUrl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      type: "villa",
      amenities: ["Pool", "Ocean view", "Wifi", "Kitchen"],
    },
    {
      id: 3,
      title: "Cozy Mountain Cabin",
      location: "Aspen, CO",
      price: 200,
      rating: 4.75,
      reviewCount: 156,
      imageUrl:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      type: "cabin",
      amenities: ["Hot tub", "Fireplace", "Wifi"],
    },
    {
      id: 4,
      title: "Stylish Loft in Arts District",
      location: "Los Angeles, CA",
      price: 180,
      rating: 4.82,
      reviewCount: 93,
      imageUrl:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      type: "loft",
      amenities: ["Wifi", "Kitchen", "Workspace"],
    },
    {
      id: 5,
      title: "Beachfront Condo with Balcony",
      location: "San Diego, CA",
      price: 275,
      rating: 4.91,
      reviewCount: 67,
      imageUrl:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      type: "condo",
      amenities: ["Beach access", "Balcony", "Pool", "Wifi"],
    },
    {
      id: 6,
      title: "Historic Brownstone",
      location: "Boston, MA",
      price: 160,
      rating: 4.78,
      reviewCount: 112,
      imageUrl:
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      type: "house",
      amenities: ["Wifi", "Kitchen", "Free parking"],
    },
  ]

  const amenities = [
    "Wifi",
    "Kitchen",
    "Pool",
    "Hot tub",
    "Free parking",
    "Air conditioning",
    "Workspace",
    "TV",
    "Washer & dryer",
    "Beach access",
    "Ocean view",
    "Balcony",
  ]

  const filteredProperties = properties.filter((property) => {
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]
    const matchesType = !propertyType || property.type === propertyType
    const matchesAmenities =
      selectedAmenities.length === 0 || selectedAmenities.every((amenity) => property.amenities.includes(amenity))

    return matchesPrice && matchesType && matchesAmenities
  })

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Search Header */}
        <div className="bg-white border-b sticky top-16 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Where to?" className="pl-10 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Check in - Check out</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{guests} guests</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Filter className="h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="py-6 space-y-6">
                      {/* Price Range */}
                      <div>
                        <Label className="text-base font-medium">Price range</Label>
                        <div className="mt-4">
                          <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            max={1000}
                            min={0}
                            step={10}
                            className="w-full"
                          />
                          <div className="flex justify-between mt-2 text-sm text-gray-600">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Property Type */}
                      <div>
                        <Label className="text-base font-medium">Property type</Label>
                        <Select value={propertyType} onValueChange={setPropertyType}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Any type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any type</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="cabin">Cabin</SelectItem>
                            <SelectItem value="condo">Condo</SelectItem>
                            <SelectItem value="loft">Loft</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Amenities */}
                      <div>
                        <Label className="text-base font-medium">Amenities</Label>
                        <div className="mt-4 space-y-3">
                          {amenities.map((amenity) => (
                            <div key={amenity} className="flex items-center space-x-2">
                              <Checkbox
                                id={amenity}
                                checked={selectedAmenities.includes(amenity)}
                                onCheckedChange={() => toggleAmenity(amenity)}
                              />
                              <Label htmlFor={amenity} className="text-sm font-normal">
                                {amenity}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            setPriceRange([50, 500])
                            setSelectedAmenities([])
                            setPropertyType("")
                          }}
                        >
                          Clear all
                        </Button>
                        <Button className="flex-1">Show results</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{filteredProperties.length} stays found</h1>
            <div className="flex gap-2">
              {selectedAmenities.map((amenity) => (
                <Badge key={amenity} variant="secondary" className="gap-1">
                  {amenity}
                  <button onClick={() => toggleAmenity(amenity)} className="ml-1">
                    ×
                  </button>
                </Badge>
              ))}
              {propertyType && (
                <Badge variant="secondary" className="gap-1">
                  {propertyType}
                  <button onClick={() => setPropertyType("")} className="ml-1">
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                rating={property.rating}
                reviewCount={property.reviewCount}
                imageUrl={property.imageUrl}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setPriceRange([50, 500])
                  setSelectedAmenities([])
                  setPropertyType("")
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
