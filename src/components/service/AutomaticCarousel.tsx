"use client";

import { ArrowRight, ImageIcon } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

const AutomaticCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
    <div className="mt-14 md:mt-24">
      <MaxWidthWrapper>
        <div className="max-w-xl mx-auto">
          <p className="font-syne font-bold text-base text-center">BLOG</p>
        </div>

        <div className="max-w-xl xl:max-w-3xl mx-auto mt-3">
          <p className="font-syne font-bold text-2xl md:text-3xl xl:text-4xl text-center">
            Digital marketing & industry insights
          </p>
        </div>

        <div className="flex gap-5 items-center flex-wrap mt-6 md:mt-14 mb-0 md:mb-0 xl:mb-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
            }}
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pb-10 md:py-10"
                >
                  <div
                    className={`relative w-[98%] md:flex-1 bg-[white] border rounded-t-3xl rounded-b-2xl ${
                      current == index ? "scale-y-110" : "scale-y-100"
                    } transition-all`}
                  >
                    <div className="pb-4 relative z-10 bg-[white] rounded-t-3xl rounded-b-2xl">
                      <div className="bg-[#E2E2E2] w-full h-72 rounded-2xl flex justify-center items-center">
                        <ImageIcon className="w-8 h-8" />
                      </div>
                      <div className="mt-3 px-5">
                        <p className="font-syne font-bold text-base">
                          Lorem ipsum dolor sit amet, consectetur
                        </p>

                        <p className="font-kanit font-light text-xs md:text-sm mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit,{" "}
                        </p>

                        <div className="flex justify-end items-center gap-2 mt-3">
                          <p className="font-syne font-bold text-xs md:text-sm">
                            READ MORE
                          </p>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 w-[102%] -right-[0.5rem] md:-right-[0.6rem] md:w-[102%] h-[100%] rounded-3xl bg-black -z-10"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex items-center w-full relative">
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
          <div className="absolute right-0 bottom-0 flex flex-col items-end space-y-[1px] pb-1 border-b-2 border-[#6754E9]">
            <p className="font-syne font-bold text-xs whitespace-nowrap">
              VIEW MORE
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AutomaticCarousel;
