"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HomepageCarousel = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 1000, // Autoplay delay of 2 seconds
          stopOnInteraction: false, // Prevent autoplay from stopping on user interaction
          stopOnMouseEnter: false, // Optionally prevent stopping on hover
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 flex items-center">
            <div className="w-1/2 pr-8">
              <h2 className="text-4xl font-bold mb-4">Groups and Events</h2>
              <p className="mb-6">
                There are always plenty of groups and activities running across
                our children's centres!
              </p>
              <button className="bg-rose-300 text-black hover:bg-rose-400 px-4 py-2 rounded">
                View Timetable
              </button>
            </div>
            <div className="w-1/2">
              <Image
                src="https://northbristolcc.org.uk/wp-content/uploads/2019/04/child-3194977_1920.jpg"
                alt="Children's activities"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="max-w-7xl mx-auto px-4 flex items-center">
            <div className="w-1/2 pr-8">
              <h2 className="text-4xl font-bold mb-4">Groups and Events</h2>
              <p className="mb-6">
                There are always plenty of groups and activities running across
                our children's centres!
              </p>
              <button className="bg-rose-300 text-black hover:bg-rose-400 px-4 py-2 rounded">
                View Timetable
              </button>
            </div>
            <div className="w-1/2">
              <Image
                src="https://northbristolcc.org.uk/wp-content/uploads/2019/04/child-3194977_1920.jpg"
                alt="Children's activities"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="max-w-7xl mx-auto px-4 flex items-center">
            <div className="w-1/2 pr-8">
              <h2 className="text-4xl font-bold mb-4">Groups and Events</h2>
              <p className="mb-6">
                There are always plenty of groups and activities running across
                our children's centres!
              </p>
              <button className="bg-rose-300 text-black hover:bg-rose-400 px-4 py-2 rounded">
                View Timetable
              </button>
            </div>
            <div className="w-1/2">
              <Image
                src="https://northbristolcc.org.uk/wp-content/uploads/2019/04/child-3194977_1920.jpg"
                alt="Children's activities"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2">
        Previous
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2">
        Next
      </CarouselNext>
    </Carousel>
  );
};

export default HomepageCarousel;
