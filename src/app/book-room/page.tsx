
"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { mockRooms } from '@/app/rooms/page';

const RoomBookingPage = () => {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    roomType: '',
    dateRange: { from: undefined as Date | undefined, to: undefined as Date | undefined },
    guests: 1,
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const roomParam = searchParams.get('room');
    if (roomParam) {
      const prefilledRoom = mockRooms.find(room => room.id === roomParam);
      if (prefilledRoom) {
        setBookingData((prevData) => ({
          ...prevData,
          roomType: prefilledRoom.name,
        }));
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRoomSelect = (roomName: string) => {
    setBookingData((prevData) => ({
      ...prevData,
      roomType: roomName,
    }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!bookingData.roomType || !bookingData.dateRange.from || !bookingData.dateRange.to || bookingData.guests < 1) {
        alert('Please fill in all room details.');
        return;
      }
    } else if (currentStep === 2) {
      if (!bookingData.name || !bookingData.email || !bookingData.phone) {
        alert('Please fill in all guest information.');
        return;
      }
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking Submitted! (Check console for data)');
    console.log('Booking Data:', bookingData);
    setBookingData({
      roomType: '',
      dateRange: { from: undefined, to: undefined },
      guests: 1,
      name: '',
      email: '',
      phone: '',
    });
    setCurrentStep(1);
  };

  const steps = [
    { id: 1, name: 'Select Room' },
    { id: 2, name: 'Your Details' },
    { id: 3, name: 'Confirmation' },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Step 1: Room Details</CardTitle>
              <CardDescription>Select your desired room and dates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-semibold mb-4 block">Select Room Type:</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockRooms.map((room) => (
                    <Card
                      key={room.id}
                      className={`cursor-pointer transition-all duration-200 ${bookingData.roomType === room.name ? 'border-primary border-2 shadow-xl' : 'hover:shadow-lg'}`}
                      onClick={() => handleRoomSelect(room.name)}
                    >
                      <CardHeader className="p-0">
                        <div className="relative w-full h-40">
                          <Image src={room.imageUrl} alt={room.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <h3 className="text-xl font-bold text-primary">{room.name}</h3>
                        <p className="text-sm text-muted-foreground">Rs.{room.price} / night</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="dateRange" className="text-lg font-semibold">Check-in & Check-out Dates:</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button id="dateRange" variant={"outline"} className={cn("w-full justify-start text-left font-normal mt-2", !bookingData.dateRange.from && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {bookingData.dateRange.from ? (bookingData.dateRange.to ? <>{format(bookingData.dateRange.from, "PPP")} - {format(bookingData.dateRange.to, "PPP")}</> : format(bookingData.dateRange.from, "PPP")) : <span>Pick a date range</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="range" defaultMonth={bookingData.dateRange.from} selected={bookingData.dateRange} onSelect={(range) => setBookingData(prev => ({ ...prev, dateRange: range || { from: undefined, to: undefined } }))} numberOfMonths={2} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="guests" className="text-lg font-semibold">Number of Guests:</Label>
                  <Input type="number" id="guests" min="1" value={bookingData.guests} onChange={handleChange} className="mt-2" />
                </div>
              </div>
              <Button onClick={nextStep} className="w-full" size="lg">Next</Button>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Step 2: Guest Information</CardTitle>
              <CardDescription>Please provide your contact details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-semibold">Full Name:</Label>
                <Input type="text" id="name" placeholder="John Doe" value={bookingData.name} onChange={handleChange} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg font-semibold">Email:</Label>
                <Input type="email" id="email" placeholder="john.doe@example.com" value={bookingData.email} onChange={handleChange} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-lg font-semibold">Phone Number:</Label>
                <Input type="tel" id="phone" placeholder="123-456-7890" value={bookingData.phone} onChange={handleChange} className="mt-2" />
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prevStep}>Previous</Button>
                <Button onClick={nextStep}>Next</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Step 3: Confirmation</CardTitle>
              <CardDescription>Review your booking details before confirming.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-muted rounded-lg space-y-3">
                <h3 className="text-xl font-semibold text-primary">Booking Summary</h3>
                <p><strong>Room Type:</strong> {bookingData.roomType || 'N/A'}</p>
                <p><strong>Check-in:</strong> {bookingData.dateRange.from ? format(bookingData.dateRange.from, "PPP") : 'N/A'}</p>
                <p><strong>Check-out:</strong> {bookingData.dateRange.to ? format(bookingData.dateRange.to, "PPP") : 'N/A'}</p>
                <p><strong>Guests:</strong> {bookingData.guests || 'N/A'}</p>
                <hr />
                <h3 className="text-xl font-semibold text-primary">Guest Details</h3>
                <p><strong>Full Name:</strong> {bookingData.name || 'N/A'}</p>
                <p><strong>Email:</strong> {bookingData.email || 'N/A'}</p>
                <p><strong>Phone:</strong> {bookingData.phone || 'N/A'}</p>
              </div>
              <p className="text-lg text-center text-muted-foreground">
                (Payment integration would go here in a real application.)
              </p>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prevStep}>Previous</Button>
                <Button onClick={handleSubmit} size="lg">Confirm Booking</Button>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold">Book Your Stay</h1>
          <p className="text-xl mt-4">Secure your room in just a few simple steps.</p>
        </div>
      </header>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl">
          {/* Step Indicators */}
          <div className="flex justify-between items-start mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${currentStep >= step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {step.id}
                  </div>
                  <p className={`text-lg mt-2 font-semibold ${currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'}`}>
                    {step.name}
                  </p>
                </div>
                {index < steps.length - 1 && <div className={`flex-1 h-1 mt-6 ${currentStep > index + 1 ? 'bg-primary' : 'bg-muted'}`}></div>}
              </React.Fragment>
            ))}
          </div>
          {renderStep()}
        </div>
      </section>
    </div>
  );
};

export default RoomBookingPage;
