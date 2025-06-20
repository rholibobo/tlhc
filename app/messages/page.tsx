"use client"

import { useState } from "react"
import { Send, Phone, Video, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      hostName: "Jennifer",
      hostAvatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      propertyTitle: "Luxury Beachfront Villa",
      lastMessage: "Looking forward to your stay!",
      timestamp: "2 hours ago",
      unread: 2,
      isOnline: true,
    },
    {
      id: 2,
      hostName: "Michael",
      hostAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      propertyTitle: "Downtown Apartment",
      lastMessage: "Check-in instructions sent",
      timestamp: "1 day ago",
      unread: 0,
      isOnline: false,
    },
    {
      id: 3,
      hostName: "Sarah",
      hostAvatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80",
      propertyTitle: "Mountain Cabin",
      lastMessage: "Thanks for the great review!",
      timestamp: "3 days ago",
      unread: 0,
      isOnline: true,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "host",
      message: "Hi! Welcome to my property. I'm excited to host you!",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "guest",
      message: "Thank you! We're really looking forward to our stay. What time is check-in?",
      timestamp: "10:45 AM",
    },
    {
      id: 3,
      sender: "host",
      message: "Check-in is anytime after 3 PM. I'll send you the door code closer to your arrival date.",
      timestamp: "11:00 AM",
    },
    {
      id: 4,
      sender: "guest",
      message: "Perfect! Is there parking available?",
      timestamp: "11:15 AM",
    },
    {
      id: 5,
      sender: "host",
      message: "Yes, there's free parking right in front of the house. Looking forward to your stay!",
      timestamp: "2 hours ago",
    },
  ]

  const selectedConversation = conversations.find((c) => c.id === selectedChat)

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you would send this to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <h2 className="font-semibold">Conversations</h2>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer hover:bg-gray-50 border-l-4 ${
                      selectedChat === conversation.id ? "border-primary bg-primary/5" : "border-transparent"
                    }`}
                    onClick={() => setSelectedChat(conversation.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={conversation.hostAvatar || "/placeholder.svg"}
                            alt={conversation.hostName}
                          />
                          <AvatarFallback>{conversation.hostName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {conversation.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-sm">{conversation.hostName}</h3>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                            {conversation.unread > 0 && (
                              <Badge className="h-5 w-5 p-0 text-xs rounded-full">{conversation.unread}</Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{conversation.propertyTitle}</p>
                        <p className="text-sm text-gray-700 truncate">{conversation.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={selectedConversation.hostAvatar || "/placeholder.svg"}
                            alt={selectedConversation.hostName}
                          />
                          <AvatarFallback>{selectedConversation.hostName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {selectedConversation.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{selectedConversation.hostName}</h3>
                        <p className="text-sm text-gray-600">{selectedConversation.propertyTitle}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "guest" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === "guest"
                              ? "bg-primary text-primary-foreground"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{message.message}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === "guest" ? "text-primary-foreground/70" : "text-gray-500"
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
