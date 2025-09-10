"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquareText } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Sent! (Check console for data)');
    console.log('Contact Form Data:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const whatsappNumber = "94777237120";
  const whatsappMessage = encodeURIComponent("Hello, I'd like to inquire about a booking.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="text-xl mt-4">We&apos;d love to hear from you. Get in touch with us.</p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    placeholder="Inquiry about booking"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="flex items-center gap-4 text-lg">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>info@luckyhomestay.com</span>
                </p>
                <p className="flex items-center gap-4 text-lg">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>0777237120</span>
                </p>
                <p className="flex items-center gap-4 text-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Thawalankoya, Ukuwela, Matale</span>
                </p>
              </CardContent>
            </Card>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700" size="lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <MessageSquareText className="h-6 w-6" />
                <span>Chat on WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">Find Us Here</h2>
          <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-muted-foreground">
            [Google Map Placeholder]
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
