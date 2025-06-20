import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface PropertyReviewsProps {
  rating: number
  reviewCount: number
}

export default function PropertyReviews({ rating, reviewCount }: PropertyReviewsProps) {
  // Mock review data
  const reviews = [
    {
      id: 1,
      name: "Michael",
      location: "New York",
      date: "April 2023",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80",
      text: "Beautiful property with amazing views. The host was very responsive and helpful. Would definitely stay here again!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah",
      location: "Chicago",
      date: "March 2023",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80",
      text: "We had a wonderful stay. The place was clean, comfortable, and exactly as described. The location is perfect for exploring the area.",
      rating: 5,
    },
    {
      id: 3,
      name: "David",
      location: "Boston",
      date: "February 2023",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80",
      text: "Great location and beautiful home. Had everything we needed for a relaxing vacation. The pool was amazing!",
      rating: 4,
    },
    {
      id: 4,
      name: "Jennifer",
      location: "Seattle",
      date: "January 2023",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80",
      text: "Loved our stay here! The property is even better than the pictures. Very clean and well-maintained.",
      rating: 5,
    },
  ]

  // Calculate rating distribution
  const ratingDistribution = {
    5: 75,
    4: 20,
    3: 5,
    2: 0,
    1: 0,
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center">
          <Star className="h-5 w-5 fill-primary text-primary mr-1" />
          <span className="font-medium text-xl">{rating}</span>
        </div>
        <span className="text-gray-500">·</span>
        <span className="font-medium">{reviewCount} reviews</span>
      </div>

      {/* Rating Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2">
              <div className="w-12 text-sm">{star} stars</div>
              <Progress value={ratingDistribution[star as keyof typeof ratingDistribution]} className="h-2" />
              <div className="w-8 text-sm text-right">
                {ratingDistribution[star as keyof typeof ratingDistribution]}%
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-between">
              <span className="text-sm">Cleanliness</span>
              <div className="flex items-center">
                <span className="text-sm mr-1">4.9</span>
                <Star className="h-3 w-3 fill-primary text-primary" />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Accuracy</span>
              <div className="flex items-center">
                <span className="text-sm mr-1">4.8</span>
                <Star className="h-3 w-3 fill-primary text-primary" />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Communication</span>
              <div className="flex items-center">
                <span className="text-sm mr-1">5.0</span>
                <Star className="h-3 w-3 fill-primary text-primary" />
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Location</span>
              <div className="flex items-center">
                <span className="text-sm mr-1">4.7</span>
                <Star className="h-3 w-3 fill-primary text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{review.name}</div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>

      <Button variant="outline" className="mt-8">
        Show all {reviewCount} reviews
      </Button>
    </div>
  )
}
