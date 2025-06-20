"use client"

import { useState } from "react"
import { Heart, Share, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Luxury Beachfront Villa with Private Pool",
      location: "Malibu, California",
      price: 450,
      rating: 4.97,
      reviewCount: 128,
      imageUrl:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      savedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Modern Downtown Apartment",
      location: "New York, NY",
      price: 120,
      rating: 4.85,
      reviewCount: 124,
      imageUrl:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      savedDate: "1 week ago",
    },
    {
      id: 3,
      title: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      price: 200,
      rating: 4.75,
      reviewCount: 156,
      imageUrl:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      savedDate: "2 weeks ago",
    },
  ])

  const removeFromWishlist = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Wishlist</h1>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Share className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group">
                <div className="relative">
                  <Link href={`/property/${item.id}`}>
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <Link href={`/property/${item.id}`}>
                    <h3 className="font-medium mb-1 hover:underline">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{item.location}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">${item.price} night</span>
                      <span className="text-sm text-gray-500">★ {item.rating}</span>
                    </div>
                    <p className="text-xs text-gray-400">Saved {item.savedDate}</p>
                  </Link>
                  <div className="flex gap-2 mt-3">
                    <Button asChild className="flex-1" size="sm">
                      <Link href={`/property/${item.id}`}>View</Link>
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => removeFromWishlist(item.id)} className="gap-1">
                      <Trash2 className="h-3 w-3" />
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6">Start exploring and save your favorite places to stay</p>
            <Button asChild>
              <Link href="/">Start exploring</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
