import { MapPin } from "lucide-react"

interface PropertyMapProps {
  location: string
}

export default function PropertyMap({ location }: PropertyMapProps) {
  return (
    <div className="mt-4">
      <div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center relative overflow-hidden">
        {/* In a real app, you would integrate with Google Maps or similar */}
        <div className="text-center">
          <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
          <p className="font-medium">{location}</p>
          <p className="text-sm text-gray-600">Map data would be displayed here</p>
        </div>
      </div>
    </div>
  )
}
