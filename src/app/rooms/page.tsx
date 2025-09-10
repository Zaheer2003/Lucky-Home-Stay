import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { mockRooms } from '@/lib/mock-data';

const facilities = [
  'Free Wi-Fi',
  '24/7 Front Desk',
  'Complimentary Breakfast',
  'Swimming Pool',
  'Free Parking',
  'Laundry Service',
  'Airport Shuttle',
  'Garden Area',
];

const RoomsPage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold">Our Rooms</h1>
          <p className="text-xl mt-4">Find the perfect room for your stay.</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto flex flex-col md:flex-row gap-4">
          <Input placeholder="Search for a room..." className="max-w-sm" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low-to-high">Low to High</SelectItem>
              <SelectItem value="high-to-low">High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative w-full h-56">
                  <Image
                    src={room.imageUrl}
                    alt={room.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-bold text-primary mb-2">{room.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 h-24 overflow-hidden">{room.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.facilities.slice(0, 4).map((facility, idx) => (
                    <Badge key={idx} variant="secondary">{facility}</Badge>
                  ))}
                  {room.facilities.length > 4 && <Badge variant="outline">+{room.facilities.length - 4} more</Badge>}
                </div>
                <p className="text-2xl font-bold text-primary">Rs.{room.price}<span className="text-sm font-normal text-muted-foreground"> / night</span></p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full" size="lg">
                  <Link href={`/book-room?room=${room.id}`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Homestay Facilities Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">Homestay Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-lg">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;

