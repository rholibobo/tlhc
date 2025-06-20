import { Check, ChevronRight, Wifi, Car, Tv, Utensils, Snowflake, Wind } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface PropertyAmenitiesProps {
  amenities: string[]
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  // Map amenity names to icons
  const getAmenityIcon = (amenity: string) => {
    const amenityMap: Record<string, JSX.Element> = {
      Wifi: <Wifi className="h-5 w-5" />,
      "Free parking": <Car className="h-5 w-5" />,
      TV: <Tv className="h-5 w-5" />,
      Kitchen: <Utensils className="h-5 w-5" />,
      "Air conditioning": <Snowflake className="h-5 w-5" />,
      "Outdoor shower": <Wind className="h-5 w-5" />,
    }

    return amenityMap[amenity] || <Check className="h-5 w-5" />
  }

  return (
    <div className="mb-8 pb-8 border-b">
      <h2 className="text-xl font-bold mb-4">What this place offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.slice(0, 6).map((amenity) => (
          <div key={amenity} className="flex items-center gap-4">
            {getAmenityIcon(amenity)}
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      {amenities.length > 6 && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-6">
              Show all {amenities.length} amenities
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Amenities</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-4">
                  {getAmenityIcon(amenity)}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
