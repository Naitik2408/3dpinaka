"use client";

import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner_1, banner_2 } from "@/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const bannerData = [
  {
    id: 1,
    title: "Best Deals for all new",
    subtitle: "3D Printer and Accessories",
    description: "Explore our wide range of high-quality 3D printers and accessories",
    image: banner_1,
    buttonText: "Shop Now",
    buttonLink: "/shop",
    bgColor: "bg-gradient-to-r from-teal-50 to-orange-50",
  },
  {
    id: 2,
    title: "Premium 3D Printing",
    subtitle: "Solutions for Everyone",
    description: "From beginners to professionals - find your perfect 3D printer",
    image: banner_2,
    buttonText: "Explore Products",
    buttonLink: "/category",
    bgColor: "bg-gradient-to-r from-orange-50 to-teal-50",
  },
];

const HomeBanner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      // @ts-expect-error Autoplay plugin type compatibility
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {bannerData.map((banner) => (
          <CarouselItem key={banner.id}>
            <div
              className={`py-16 md:py-20 ${banner.bgColor} rounded-lg px-10 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8`}
            >
              <div className="space-y-5 flex-1">
                <div>
                  <Title className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    {banner.title}
                  </Title>
                  <Title className="text-3xl md:text-4xl lg:text-5xl font-bold text-shop_dark_green">
                    {banner.subtitle}
                  </Title>
                </div>
                <p className="text-gray-600 text-sm md:text-base max-w-md">
                  {banner.description}
                </p>
                <Link
                  href={banner.buttonLink}
                  className="inline-block bg-shop_dark_green/90 text-white/90 px-6 py-3 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect shadow-md hover:shadow-lg"
                >
                  {banner.buttonText}
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src={banner.image}
                  alt={`banner_${banner.id}`}
                  className="w-full max-w-md md:max-w-lg object-contain"
                  priority={banner.id === 1}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 md:left-8 bg-white/80 hover:bg-white" />
      <CarouselNext className="right-4 md:right-8 bg-white/80 hover:bg-white" />
    </Carousel>
  );
};

export default HomeBanner;
