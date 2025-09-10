import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <header className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold">About Lucky HomeStay</h1>
          <p className="text-xl mt-4">Your home away from home.</p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nestled in the picturesque landscapes of Thawalankoya, Ukuwela, Matale, Lucky HomeStay was founded with a passion for sharing the tranquility and charm of our region. What started as a dream to create a peaceful haven has grown into a beloved destination for travelers seeking a unique escape from the everyday. We look forward to welcoming you!
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To provide a serene and comfortable retreat for travelers seeking an authentic and memorable experience. We are dedicated to offering exceptional hospitality, ensuring every guest feels at home while exploring the beauty of Matale.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be the leading homestay in the region, known for our commitment to quality, sustainability, and creating unforgettable guest experiences that celebrate the local culture and natural environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We believe in warm welcomes and personalized service that makes every guest feel valued and cared for.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We strive to provide a cozy and relaxing environment, ensuring a peaceful stay for all our visitors.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We aim to offer a genuine local experience, connecting guests with the culture and natural beauty of our surroundings.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">Mohamed Zaheer</h3>
                <p className="text-primary">Founder & CEO</p>
                <p className="text-muted-foreground mt-2">The visionary behind Lucky HomeStay, dedicated to creating a unique and welcoming experience for all guests.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-primary">Head of Operations</p>
                <p className="text-muted-foreground mt-2">Ensuring everything runs smoothly, from guest services to property management.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">Emily Brown</h3>
                <p className="text-primary">Guest Relations Manager</p>
                <p className="text-muted-foreground mt-2">The friendly face of Lucky HomeStay, always ready to assist with a smile.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
