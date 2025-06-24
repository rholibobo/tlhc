"use client";

import { MapPin, Calendar, Users, Search, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Import your Select components

interface DestinationOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface BookingSearchFormProps {
  destinations?: DestinationOption[];
  defaultDestination?: string;
  defaultCheckIn?: string;
  defaultCheckOut?: string;
  defaultGuests?: string;
  className?: string;
  onSubmit?: (formData: {
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: string;
  }) => void;
}

export function BookingSearchForm({
  destinations = [
    { value: "kigali", label: "Kigali, Rwanda" },
    { value: "lagos", label: "Lagos, Nigeria", disabled: true },
    { value: "abuja", label: "Abuja, Nigeria", disabled: true },
    { value: "nyc", label: "New York, USA", disabled: true },
  ],
  defaultDestination = "kigali",
  defaultCheckIn = "",
  defaultCheckOut = "",
  defaultGuests = "2 guests",
  className = "",
  onSubmit,
}: BookingSearchFormProps) {
  const [destination, setDestination] = useState(defaultDestination);
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(defaultGuests);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({
      destination,
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <div className={`w-full max-w-5xl bg-white rounded-lg p-6 shadow-2xl ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end text-gray-700">
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
              <Select
                value={destination}
                onValueChange={setDestination}
                
              >
                <SelectTrigger className="pl-10 w-full">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Rest of your form fields remain the same */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="date"
                className="pl-10 text-gray-900 border focus:outline-none focus:ring-2 focus:ring-primary"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="date"
                className="pl-10 text-gray-900 border focus:outline-none focus:ring-2 focus:ring-primary"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="2 guests"
                className="pl-10 text-gray-900 border focus:outline-none focus:ring-2 focus:ring-primary"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button type="submit" size="lg" className="px-12 py-3 text-lg">
            <Search className="mr-2 h-5 w-5" />
            Check Availability
          </Button>
        </div>
      </form>
    </div>
  );
}