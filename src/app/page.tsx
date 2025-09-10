import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
          <Image
            src="/hero-bg.jpg"
            alt="Lucky HomeStay Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 p-4 md:p-8">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 font-serif">
              Welcome to Lucky HomeStay
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience unparalleled comfort and tranquility in our beautiful homes. Your perfect getaway awaits.
            </p>
            <Button asChild size="lg">
              <Link href="/rooms">Explore Our Rooms</Link>
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Lucky HomeStay offers a unique blend of comfort, style, and hospitality. Our properties are designed to provide a serene and luxurious experience, making you feel right at home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Cozy Rooms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Beautifully designed rooms with all the modern amenities to ensure a comfortable stay.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Stunning Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enjoy breathtaking views from your room and our common areas.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Excellent Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our dedicated staff is here to cater to your every need, ensuring a memorable experience.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-primary">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Image src="/file.svg" alt="24/7 Support" width={80} height={80} />
                <h3 className="text-2xl font-semibold mt-4">24/7 Support</h3>
                <p className="text-muted-foreground mt-2">We are here to help you anytime.</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/window.svg" alt="Free Wi-Fi" width={80} height={80} />
                <h3 className="text-2xl font-semibold mt-4">Free Wi-Fi</h3>
                <p className="text-muted-foreground mt-2">Stay connected with high-speed internet.</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/garden.jpg" alt="Breakfast" width={80} height={80} className="rounded-full" />
                <h3 className="text-2xl font-semibold mt-4">Breakfast</h3>
                <p className="text-muted-foreground mt-2">Enjoy a delicious complimentary breakfast.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-primary">What Our Guests Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="ml-4 font-semibold">John Doe</p>
                  </div>
                  <p className="text-muted-foreground">"An amazing experience! The rooms were clean, the staff was friendly, and the views were incredible. Highly recommended!"</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="ml-4 font-semibold">Jane Smith</p>
                  </div>
                  <p className="text-muted-foreground">"A perfect getaway from the city. The serene environment and top-notch service made our stay unforgettable."</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="ml-4 font-semibold">Peter Jones</p>
                  </div>
                  <p className="text-muted-foreground">"I loved my stay at Lucky HomeStay. The attention to detail and the warm hospitality were exceptional."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8">Book your stay with us and create memories that will last a lifetime.</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/book-room">Book Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
