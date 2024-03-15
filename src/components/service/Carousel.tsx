"use client";

import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

const CarouselComp = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );
  return (
    <div className="mt-8 md:mt-24 mb-10">
      <MaxWidthWrapper>
        <p className="font-syne text-2xl md:text-3xl xl:text-4xl font-bold text-center">
          Our case studies
        </p>

        <div className="mt-5 md:mt-10 flex flex-col space-y-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="border rounded-xl py-4 px-4 flex flex-col space-y-4">
                    <div className="flex justify-between w-full items-center">
                      <div className="flex gap-12 items-center">
                        <div className="h-10 w-10 bg-[#D9D9D9] rounded-full"></div>
                        <p className="font-syne font-bold text-lg">
                          Project name
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6" />
                    </div>

                    <div className="flow-root bg-[#D9D9D9] h-56 rounded-lg"></div>
                    <p className="font-kanit text-sm">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit,
                    </p>
                    <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                      <div className="rounded-xl px-2 py-2 border">
                        <p className="font-kanit text-sm">key highlight</p>
                      </div>
                      <div className="rounded-xl px-2 py-2 border">
                        <p className="font-kanit text-sm">key highlight</p>
                      </div>
                      <div className="rounded-xl px-2 py-2 border">
                        <p className="font-kanit text-sm">key highlight</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-[1px]">
                      <p className="font-syne font-bold text-xs mt-2">
                        VIEW CASE STUDY
                      </p>
                      <div className="h-[2px] bg-[#6754E9] w-24"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex space-x-[0.65rem] md:space-x-2 w-full justify-center mt-5 md:mt-10">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  className={`h-[0.37rem] w-[0.37rem] rounded-full ${
                    current == index + 1 ? "bg-black" : "bg-black/10"
                  } transition-all duration-100 cursor-pointer`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CarouselComp;
