"use client"

import type React from "react"

import { Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface PropertyCardProps {
  id: number
  title: string
  location: string
  price: number
  rating: number
  reviewCount: number
  imageUrl: string
}

export default function PropertyCard({ id, title, location, price, rating, reviewCount, imageUrl }: PropertyCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { toast } = useToast()

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? "Property removed from your wishlist" : "Property saved to your wishlist",
    })
  }

  return (
    <div className="group relative">
      <Link href={`/property/${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View property</span>
      </Link>
      <div className="relative aspect-square overflow-hidden rounded-xl mb-2">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 z-20 rounded-full transition-colors ${
            isWishlisted ? "bg-white/90 hover:bg-white" : "bg-white/80 hover:bg-white"
          }`}
          onClick={toggleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-700"}`} />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <div>
        <div className="flex justify-between items-start">
          <h3 className="font-medium line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{location}</p>
        <p className="mt-1">
          <span className="font-bold">${price}</span> night
        </p>
      </div>
    </div>
  )
}
