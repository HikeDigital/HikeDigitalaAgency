import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Carousel from "@/components/service/Carousel";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Chrome,
  Cloud,
  Facebook,
  ImageIcon,
  Instagram,
  Linkedin,
  MapPinned,
  Plus,
  Star,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="pt-8 pb-2 md:py-10 bg-gradient-to-b from-[#E9E5FF] from-0% to-transparent to-90%">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center">
            <div className="flex-1">
              <div className="flex flex-col space-y-4 md:max-w-lg">
                <p className="font-syne font-bold text-xs">SERVICES</p>
                <div className="">
                  <p className="font-syne font-bold text-3xl md:text-4xl xl:text-5xl">
                    Hike Digital:
                  </p>
                  <p className="font-syne font-bold text-3xl md:text-4xl xl:text-5xl md:mt-1">
                    Premier SEO
                  </p>
                  <p className="font-syne font-bold text-3xl md:text-4xl xl:text-5xl md:mt-1">
                    Service in India
                  </p>
                </div>

                <p className="font-kanit text-xs">
                  Welcome to Hike Digital, the best SEO agency in India. In the
                  bustling digital landscape, standing out is essential, and
                  we're here to ensure your brand does just that.
                </p>
                <p className="font-kanit text-xs">
                  In an era where most seek online solutions, having a mere
                  online presence isn't enough. But with the top SEO agency in
                  India by your side, you can consistently be at the forefront,
                  capturing your target audience's attention when they're
                  actively looking for services or products you offer.
                </p>

                <div className="relative">
                  <div className="relative bg-black rounded-[2.25rem] overflow-hidden mt-2 w-[97%] md:w-full">
                    <div className="px-7 w-full">
                      <div className="h-1 bg-[#74737B] rounded-md">
                        <div className="w-[33%] bg-[#FFBE11] h-full"></div>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col space-y-4 xl:flex-row xl:space-y-0 xl:space-x-4 xl:py-8">
                      <input
                        type="email"
                        id="input-email-label"
                        className="py-3 px-4 block w-full rounded-2xl text-sm border bg-black text-white"
                        placeholder="Email"
                      />
                      <Button
                        size="lg"
                        className="w-full rounded-2xl bg-white text-black font-syne font-bold"
                      >
                        NEXT
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-3 w-[98%] right-[1.5px] md:-right-[0.6rem] md:w-[100%] h-[97%] rounded-[2.5rem] bg-black/70 -z-10"></div>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex-1 md:pl-16 xl:pl-20">
              <Image
                src="/GettyImages-1436826358.jpg"
                height={1188}
                width={1286}
                quality={100}
                alt="#"
                className="object-cover rounded-3xl aspect-[5/3] md:aspect-[2/2] xl:aspect-[5/3]"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* // page 2 */}
      <div className="">
        <div className="px-2 mx-auto overflow-hidden">
          <svg
            width="100%"
            height="45"
            viewBox="0 0 1406 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_259_1369)">
              <path
                opacity="0.1"
                d="M747.724 0C766.328 0 784.054 7.86951 796.522 21.6329L796.961 22.1378C809.249 35.9814 826.875 43.9034 845.385 43.9024H1405.98V45H845.385C826.795 45.0013 809.07 37.1436 796.588 23.3671L796.149 22.8622C783.861 9.01864 766.235 1.09664 747.724 1.09756H650.195C632.179 1.0962 615.032 8.84025 603.121 22.3573L602.682 22.8622C590.563 36.9105 572.931 44.9911 554.378 45H0V43.9024H554.367C572.383 43.9038 589.531 36.1598 601.441 22.6427L601.88 22.1378C614.002 8.0866 631.638 0.00574423 650.195 0L747.724 0Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_259_1369">
                <rect width="1405.98" height="45" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <MaxWidthWrapper className="pb-5 mt-1 md:py-5 md:mt-4">
          <div className="relative">
            <div className="bg-black flex text-white rounded-xl">
              <div className="mx-auto w-full md:w-[32rem] justify-between flex items-center px-4 md:px-0 py-5">
                <div className="flex items-center flex-col space-y-4">
                  <Image
                    src="/google.png"
                    height={73}
                    width={73}
                    quality={100}
                    alt="#"
                    className="object-contain w-8 md:w-16 rounded-3xl aspect-[1/1]"
                  />
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                  </div>
                </div>

                <div className="flex items-center flex-col space-y-4">
                  <Image
                    src="/Clutch.png"
                    height={160}
                    width={148}
                    quality={100}
                    alt="#"
                    className="object-contain w-8 md:w-16 rounded-3xl aspect-[1/1]"
                  />
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                  </div>
                </div>
                <div className="flex items-center flex-col space-y-4">
                  <Image
                    src="/glassdoor.png"
                    height={232}
                    width={79}
                    quality={100}
                    alt="#"
                    className="object-contain w-8 md:w-16 rounded-3xl aspect-[1/1]"
                  />
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-[#FFE052]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[100%] h-[100%] top-1 -z-10 bg-[#4D4D4D] rounded-xl"></div>
          </div>

          {/* 2nd part */}
          <div className="flow-root mt-16 md:mt-24">
            <div className="relative w-full flex flex-col lg:flex-row justify-end text-black">
              <div className="w-[100%] lg:w-[43%] xl:w-[40%] relative lg:absolute top-0 left-0 py-4 bg-[#6754E9] rounded-t-3xl lg:rounded-l-3xl z-0 h-full">
                <div className="flex justify-center items-end md:items-end lg:w-[calc(100%-30%)] h-full md:pb-8 xl:pb-2">
                  <Image
                    src="/girl.png"
                    height={315}
                    width={253}
                    quality={100}
                    alt="#"
                    className="object-contain aspect-[4/2] md:aspect-[1/1]"
                  />
                </div>
              </div>
              <div className="relative right-0 top-0 py-4 px-4 md:py-10 md:px-14 lg:px-10 xl:px-14 bg-[#F7F7FA] z-10 w-[100%] lg:w-[70%] xl:w-[70%] rounded-b-3xl lg:rounded-3xl flex items-center">
                <div className="mt-1 md:mt-0">
                  <p className="font-syne text-2xl md:text-3xl xl:text-4xl font-bold">
                    Did you know ?
                  </p>
                  <div className="mt-5 flex flex-col space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                        <Check className="h-3 w-3 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                        Google, capturing over 90% of the search market, is the
                        go-to for millions seeking products or services like
                        yours.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                        <Check className="h-3 w-3 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                        Google's features and tools, such as featured snippets,
                        local packs, and more, help businesses display their
                        brand, content, and offerings in an appealing and
                        relevant way.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                        <Check className="h-3 w-3 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                        By following the best practices and guidelines of search
                        engine, businesses can improve their visibility,
                        authority, and credibility in the eyes of both users and
                        search engines
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                        <Check className="h-3 w-3 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                        Businesses that choose SEO marketing can benefit from
                        these innovations and updates by staying ahead of the
                        competition and meeting the user expectations.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                        <Check className="h-3 w-3 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                        A whopping 70% of marketers see SEO as more effective
                        than PPC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* 3rd page */}
        <Carousel />


        {/* // 4th page */}
        <MaxWidthWrapper className="mt-14 md:mt-24">
          <p className="font-syne text-2xl md:text-3xl xl:text-4xl font-bold text-center">
            Now Understand The Power of SEO
          </p>
          <div className="mt-6 md:mt-10">
            <p className="font-kanit text-xs xl:text-sm text-black/70 text-justify">
              In the digital age, success hinges on your online presence.
              However, merely existing on the internet isn't sufficient.
              It&apos;s crucial that your business stands out to potential
              customers who are actively seeking your products or services
              online. The key to achieving this visibility? Search Engine
              Optimization (SEO). SEO is not just an option, but a necessity for
              businesses aiming to thrive in the 21st century. Let&apos;s unlock
              your potential in the digital marketplace together.
            </p>

            <div className="mt-6 flex flex-col md:flex-row flex-wrap gap-4 justify-between">
              <div className="flex-1 bg-[#F7F7FA] rounded-3xl py-6 px-5 basis-[48%] lg:basis-0">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <div className="mt-8 md:mt-14">
                  <p className="font-syne font-bold text-sm md:text-base">
                    SEO helps you to improve your website’s ranking on search
                    engines like:
                  </p>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Google
                  </li>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Bing
                  </li>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Yahoo
                  </li>
                </div>
              </div>
              <div className="flex-1 bg-[#F7F7FA] rounded-3xl py-6 px-5 basis-[48%] lg:basis-0">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <div className="mt-8 md:mt-14">
                  <p className="font-syne font-bold">SEO helps you:</p>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Attract more quality traffic
                  </li>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Increase your brand awareness
                  </li>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Boost your sales and revenue
                  </li>
                </div>
              </div>

              <div className="flex-1 bg-[#F7F7FA] rounded-3xl py-6 px-5">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <div className="mt-8 md:mt-14">
                  <p className="font-syne font-bold">SEO works by:</p>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Optimizing your website
                  </li>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Choosing the right keywords
                  </li>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Building links
                  </li>
                  <li className="font-kanit font-light text-xs md:text-sm">
                    Creating engaging content for your target audience
                  </li>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* 4th page */}
        <div className="mt-16 md:mt-24">
          <MaxWidthWrapper>
            <div className="bg-[#000000] rounded-[2rem] px-6 py-8 md:px-16 md:py-10 text-white flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center">
              <div className="flex-1">
                <p className="font-syne font-bold text-[#6754E9] text-xl md:text-3xl xl:text-4xl">
                  Don't miss this opportunity to grow your business online with
                  SEO.
                </p>
                <p className="mt-3 font-kanit font-light italic text-xs md:text-sm">
                  Contact hike digital (top seo company in india) today and let
                  us help you reach the top of the search results. We are a
                  professional digital marketing company with years of
                  experience and expertise in SEO. We can help you achieve your
                  online goals and beat your competitors
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <div className="flex justify-center xl:w-[24rem]">
                  <Button className="font-syne text-xs bg-[white] text-black rounded-xl md:rounded-2xl md:px-5 md:py-6 font-bold">
                    CONTACT NOW
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* page 5th */}
        <div className="mt-14 md:mt-24">
          <MaxWidthWrapper>
            <div className="max-w-xl xl:max-w-2xl mx-auto">
              <p className="font-syne font-bold text-2xl md:text-3xl xl:text-4xl text-center">
                Hike Digital SEO Services : Beyond Just Features, We Deliver
                Benefits
              </p>

              <div className="max-w-lg mx-auto">
                <p className="font-kanit font-light text-xs md:text-sm text-black/70 mx-auto mt-4">
                  {" "}
                  leveraging below services, Hike Digital SEO expert company
                  India can help you establish a strong online presence and
                  reach your target audience effectively.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row flex-wrap gap-4 justify-between">
              <div className="flex-1 bg-[#F7F7FA] rounded-3xl py-6 px-5 basis-[48%] lg:basis-0">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <div className="mt-6 md:mt-8">
                  <p className="font-syne font-bold text-sm md:text-base">
                    On-Page SEO
                  </p>

                  <p className="font-kanit font-light text-xs md:text-sm mt-6">
                    <span>Customized Content Optimization:</span> <br />{" "}
                    <span className="text-black/70 text-xs">
                      More than just stuffing keywords, we craft content that
                      engages and converts.
                    </span>
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-4">
                    <span>Localized Keyword Strategy:</span> <br />
                    <span className="text-black/70 text-xs">
                      Tap into search queries specifically tailored for the
                      Indian audience.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-[#F7F7FA] rounded-3xl py-6 px-5 basis-[48%] lg:basis-0">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <div className="mt-6 md:mt-8">
                  <p className="font-syne font-bold text-sm md:text-base">
                    Off-Page SEO
                  </p>

                  <p className="font-kanit font-light text-xs md:text-sm mt-6">
                    <span>Build Authentic Reputation:</span> <br />{" "}
                    <span className="text-black/70 text-xs">
                      Beyond just link building, we enhance your brand's digital
                      reputation and authority, keeping in mind the local
                      digital ecosystem.
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex-1 bg-[#F7F7FA] rounded-3xl py-6 px-5">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <div className="mt-6 md:mt-8">
                  <p className="font-syne font-bold text-sm md:text-base">
                    Technical SEO
                  </p>

                  <p className="font-kanit font-light text-xs md:text-sm mt-6">
                    <span>Mobile-First Optimization: </span> <br />{" "}
                    <span className="text-black/70 text-xs">
                      Ensure your website provides a seamless experience on
                      mobile devices, catering to the vast mobile user base in
                      India.
                    </span>
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-4">
                    <span>Fast and Functional:</span> <br />
                    <span className="text-black/70 text-xs">
                      In a market where speed is crucial, we ensure your website
                      loads quickly and functions flawlessly.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* // page 6th */}
        <div className="mt-14 md:mt-24">
          <MaxWidthWrapper>
            <div className="max-w-xl xl:max-w-2xl mx-auto">
              <p className="font-syne font-bold text-2xl md:text-3xl xl:text-4xl text-center">
                Why SEO with Hike Digital Makes Business Sense?
              </p>
            </div>
            <div className="max-w-3xl mx-auto mt-4">
              <p className="font-kanit font-light text-xs md:text-sm text-black/70 text-center">
                {" "}
                Discover how Hike Digital Agency's best SEO services in India
                can propel your online presence to new heights. Our seasoned SEO
                experts have a proven track record of delivering results for our
                clients. Here's why you should consider us:
              </p>
            </div>

            <div className="flow-root">
              <div className="relative mt-8 w-full flex flex-col md:flex-row justify-end">
                <div className="w-[100%] md:w-[43%] xl:w-[40%] relative md:absolute top-0 left-0 py-4 md:py-10 xl:py-14 bg-[black] rounded-t-3xl md:rounded-l-[2.5rem] z-0 h-full md:flex items-center">
                  <div className="md:w-[calc(100%-30%)] flex justify-center">
                    <div className="flex flex-col gap-5 md:gap-8 xl:gap-12 text-white items-start">
                      <p className="font-syne font-bold text-sm">
                        1. Stay Ahead of the Curve
                      </p>
                      <p className="font-syne font-bold text-sm">
                        2. Attract Quality Traffic
                      </p>
                      <p className="font-syne font-bold text-sm">
                        3. Boost Sales and Revenues
                      </p>
                      <p className="font-syne font-bold text-sm">
                        4. Adapt to Mobile Search
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-[70%] z-10 px-4 md:pl-12 md:pr-8 py-4 md:py-10 xl:py-14 bg-[#F7F7FA] flex flex-col gap-5 md:gap-8 xl:gap-12 rounded-b-3xl md:rounded-[2.5rem]">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      Outshine competitors by being easily discoverable by
                      potential customers.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      With our tailored strategies, draw in visitors who are
                      genuinely interested in what you offer.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      Higher visibility means higher chances of conversions.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      With an increasing number of searches happening on mobile,
                      we ensure your business is right there, front and center.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-9 text-[9px] md:text-[13px] lg:text-sm text-justify">
              <p className="font-syne font-bold text-center uppercase">
                If any of these scenarios resonate with you, it&apos;s time to
                consider <span className="text-[#6754E9]">Hike Digital</span>{" "}
                best search engine{" "}
              </p>
              <p className="font-syne font-bold text-center uppercase mt-2 xl:mt-1">
                optimization agency. We&apos;re not just{" "}
                <span className="text-[#57E5E3]">an SEO company</span>;
                we&apos;re your partner in navigating
              </p>
              <p className="font-syne font-bold text-center uppercase mt-2 xl:mt-1">
                the ever-changing digital landscape.{" "}
                <span className="text-[#FBBC04]">Join</span> the hundreds of
                satisfied clients
              </p>
              <p className="font-syne font-bold text-center uppercase mt-2 xl:mt-1">
                who have benefited from our tailored optimization solutions.
              </p>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* // 7th page */}

        <div className="mt-14 md:mt-28">
          <MaxWidthWrapper>
            <div className="bg-[#E9E5FF] px-4 pt-10 pb-14 rounded-[2.2rem] xl:rounded-[3rem] md:px-12 md:py-10 mx-auto">
              <div className="flex flex-col space-y-6 md:flex-row md:items-center">
                <div className="flex flex-col space-y-3 md:flex-1 xl:flex-[1.1] md:space-y-7 xl:pr-9">
                  <p className="font-syne font-bold text-2xl md:text-3xl xl:text-4xl">
                    Get your free <br />
                    marketing audit
                  </p>
                  <div className="flex flex-col space-y-3 xl:space-y-0 xl:flex-row xl:space-x-9">
                    <div className="flex space-x-3 items-center">
                      <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-sm font-light text-gray-600">
                        30-min strategy call
                      </p>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-sm font-light text-gray-600">
                        In-depth audit
                      </p>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-sm font-light text-gray-600">
                        Growth Roadmap
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative md:flex-1 xl:flex-[0.9]">
                  <div className="relative bg-white rounded-[2rem] w-[97%] md:w-full overflow-hidden z-10">
                    <div className="px-7 w-full">
                      <div className="h-1 bg-[#F7F7FA] rounded-md">
                        <div className="h-full w-[30%] bg-[#FFBE11] rounded-s-full"></div>
                      </div>
                    </div>
                    <div className="p-7 flex flex-col space-y-4 xl:flex-row xl:space-y-0 xl:space-x-4 xl:py-8">
                      <input
                        type="email"
                        id="input-email-label"
                        className="py-3 px-4 block w-full rounded-2xl text-sm border hover:border-[#6754E9] text-gray-900"
                        placeholder="Email"
                      />
                      <Button size="lg" className="w-full rounded-2xl">
                        Next
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-2 -right-[1px] md:-right-[0.6rem] w-[97%] h-[101%] md:w-[101%] md:h-[101%] rounded-[2.5rem] bg-black -z-0"></div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* // page 8th */}
        <div className="mt-14 md:mt-28">
          <MaxWidthWrapper>
            <div className="max-w-5xl mx-auto">
              <p className="text-center font-syne font-bold text-2xl md:text-3xl xl:text-4xl">
                How Hike Digital Does it?
                <br />
                Process of Search Engine Optimization
              </p>
            </div>
            <div className="max-w-4xl mx-auto mt-10 md:mt-12">
              <p className="text-xs md:text-sm font-kanit text-black/70 text-center font-light">
                At Hike Digital, we’re committed to driving your digital
                marketing efforts forward with our result driven SEO approach.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20 xl:gap-32 justify-between items-center mt-10 md:mt-12">
              <div className="flex-1 flex flex-col gap-4 text-black/70">
                <p className="font-kanit font-light text-xs md:text-sm">
                  We understand that the landscape of search engine algorithms
                  is ever-evolving. To stay ahead, businesses need to invest in
                  SEO services that are tailored to their specific needs and
                  target audience. We believe in moving with the times and
                  adapting our strategies to the current digital marketing
                  scenario.
                </p>

                <p className="font-kanit font-light text-xs md:text-sm">
                  As a customer-centric SEO company, Hike Digital is committed
                  to developing personalized SEO strategies that foster
                  long-term relationships. Our process, known as "Hike Digital,"
                  is designed to deliver high-quality, measurable results.&nbsp;
                  <span className="text-black font-normal">
                    Here&apos;s how it works:
                  </span>
                </p>
              </div>
              <div className="md:flex-1 bg-[#D9D9D9] w-full rounded-[2rem] h-48 md:h-72 box-border flex"></div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* page 9th */}
        <div className="mt-14">
          <MaxWidthWrapper>
            <div className="flex flex-wrap gap-6 justify-between">
              <div className="bg-[#F7F7FA] py-6 px-6 rounded-3xl basis-[90%] md:basis-[40%] flex-1">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <p className="font-syne font-bold mt-6">Discovery & Insight</p>
                <p className="font-kanit font-light mt-4 text-black/70 text-xs md:text-sm">
                  We initiate our journey by immersing ourselves in your
                  business, understanding your objectives, and conducting an
                  in-depth exploration of your target market. This comprehensive
                  research allows us to pinpoint the search terms that align
                  with your goals and formulates the foundation of our SEO
                  strategy.
                </p>
              </div>
              <div className="bg-[#F7F7FA] py-6 px-6 rounded-3xl basis-[90%] md:basis-[40%] flex-1">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <p className="font-syne font-bold mt-6 text-[#6754E9]">
                  Strategic Execution
                </p>
                <p className="font-kanit font-light mt-4 text-black/70 text-xs md:text-sm">
                  Armed with insights from our research, we spring into action.
                  We address any technical SEO issues identified during the
                  audit and enrich your website with additional content to
                  bridge any gaps. We also enhance your website’s authority by
                  linking to relevant, high-authority websites.
                </p>
              </div>
              <div className="bg-[#F7F7FA] py-6 px-6 rounded-3xl basis-[90%] md:basis-[40%] flex-1">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <p className="font-syne font-bold mt-6 text-[#FFBE11]">
                  Performance Analysis
                </p>
                <p className="font-kanit font-light mt-4 text-black/70 text-xs md:text-sm">
                  Post-implementation, we assess the impact of our SEO campaign
                  and measure its progress against the set objectives. Our
                  monthly reports, presented in an easy-to-understand format,
                  provide a detailed account of the work undertaken and the
                  results achieved.
                </p>
              </div>
              <div className="bg-[#F7F7FA] py-6 px-6 rounded-3xl basis-[90%] md:basis-[40%] flex-1">
                <div className="h-11 w-11 rounded-full bg-[#E7E7EA]"></div>
                <p className="font-syne font-bold mt-6 text-[#57E5E3]">
                  Continuous Optimization
                </p>
                <p className="font-kanit font-light mt-4 text-black/70 text-xs md:text-sm">
                  We believe in constant evolution. Leveraging insights from the
                  campaign, we make strategic adjustments to enhance performance
                  continually. Our goal is to ensure your campaigns are not just
                  effective but exceed their objectives
                </p>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* // page 10 */}
        <div className="mt-14 md:mt-24">
          <MaxWidthWrapper>
            <div className="max-w-5xl mx-auto">
              <p className="text-center font-syne font-bold text-2xl md:text-3xl xl:text-4xl">
                Why Search Engine Optimization{" "}
                <span className="md:hidden">
                  Service is Beneficial for Your Business?
                </span>
                <br />
                <span className="hidden md:inline">
                  Service is Beneficial for Your Business?
                </span>
              </p>
            </div>
            <div className="max-w-4xl mx-auto mt-6 md:mt-8">
              <p className="text-xs md:text-sm font-kanit text-black/70 text-center font-light">
                SEO is a powerful tool that can significantly benefit your
                business in several ways:
              </p>
            </div>
          </MaxWidthWrapper>
          <div className="bg-[#6754E9] mt-6 md:mt-8 rounded-[2rem]">
            <MaxWidthWrapper>
              <div className="flex flex-col md:flex-row md:items-center py-6 md:py-6 xl:py-20 gap-4 md:gap-8 xl:gap-16">
                <div className="flex-1">
                  <div className="flex flex-col space-y-10 w-full md:w-[26rem] xl:w-[34rem]">
                    <div className="relative">
                      <div className="relative bg-white rounded-[2.2rem] w-[97%] md:w-full overflow-hidden p-8 xl:py-14 xl:px-14 md:mx-auto z-10">
                        <div className="flex flex-col space-y-8">
                          <div className="flex flex-col space-y-6">
                            <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-black">
                              Get your free audit
                            </p>
                            <div className="w-full">
                              <div className="h-1 bg-[#E9E5FF] rounded-md">
                                <div className="h-full w-[30%] bg-[#FFBE11] rounded-s-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-4">
                            <input
                              type="text"
                              id="input-text-label"
                              className="py-4 px-4 block w-full rounded-2xl text-sm border hover:border-[#6754E9] text-gray-900"
                              placeholder="Your Name"
                            />
                            <input
                              type="email"
                              id="input-email-label"
                              className="py-4 px-4 block w-full rounded-2xl text-sm border hover:border-[#6754E9] text-gray-900"
                              placeholder="Email"
                            />
                            <Button size="xl" className="w-full rounded-2xl">
                              Next
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-2 -right-[1px] md:-right-[0.6rem] w-[98%] h-[100%] md:w-[101%] md:h-[101%] rounded-[2.5rem] bg-black"></div>
                    </div>
                  </div>
                </div>

                {/* 2nd half */}
                <div className="flex-1">
                  <div className="mt-5 flex flex-col space-y-4 xl:space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-white">
                        SEO Return on Investment (ROI) can be as high as 12.2
                        times the marketing spend
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-white">
                        SEO can reduce the cost of customer acquisition by an
                        average of 87.41% compared to digital advertising
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-white">
                        Around 65% of total e-commerce sessions are generated
                        through search traffic
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-white">
                        The average click-through rate of the first organic
                        search result in Google Search is about 28.5%
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-white">
                        Businesses spent about $47.5 billion on SEO and related
                        products and services in 2020, even during the COVID-19
                        outbreak
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-white">
                        The SEO market is expected to grow at a Compound Annual
                        Growth Rate (CAGR) of 10% from 2021 to 2023
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-full p-[0.12rem]">
                        <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                      </div>
                      <p className="font-kanit text-xs md:text-sm font-light text-white">
                        These statistics clearly demonstrate the significant
                        role that SEO plays in enhancing online visibility,
                        driving traffic, and promoting business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MaxWidthWrapper>
          </div>
        </div>

        {/* // page 11 */}
        <div className="mt-14 md:mt-24">
          <div className="bg-black py-0 md:py-10 text-white">
            <MaxWidthWrapper className="flex justify-between flex-wrap items-center overflow-hidden">
              <Image
                src="/nike.svg.png"
                alt="#"
                height={42}
                width={117}
                quality={100}
                className="object-contain aspect-[1/0.5] bg-blend-multiply h-24 w-9 md:w-16 xl:w-24"
              />

              <Image
                src="/subway-10.svg.png"
                alt="#"
                height={43}
                width={173}
                quality={100}
                className="object-contain aspect-[1/0.5] bg-blend-multiply h-24 w-11 md:w-24 xl:w-36"
              />

              <Image
                src="/nestle-3.svg.png"
                alt="#"
                height={43}
                width={163}
                quality={100}
                className="object-contain aspect-[1/0.5] bg-blend-multiply h-24 w-11 md:w-24 xl:w-36"
              />

              <Image
                src="/united-technologies-1.svg.png"
                alt="#"
                height={43}
                width={245}
                quality={100}
                className="object-contain aspect-[1/0.5] bg-blend-multiply h-24 w-11 md:w-24 xl:w-36"
              />

              <Image
                src="/hgtv-1.svg.png"
                alt="#"
                height={43}
                width={77}
                quality={100}
                className="object-contain aspect-[1/0.5] bg-blend-multiply h-24 w-9 md:w-16 xl:w-24"
              />

              <Image
                src="/hilton-3.svg.png"
                alt="#"
                height={43}
                width={114}
                quality={100}
                className="object-contain aspect-[1/0.5] bg-blend-multiply h-24 w-11 md:w-20 xl:w-24"
              />
            </MaxWidthWrapper>
          </div>
        </div>

        {/* // 12th page */}
        <div className="mt-14 md:mt-24">
          <MaxWidthWrapper>
            <div className="max-w-xl xl:max-w-2xl mx-auto">
              <p className="font-syne font-bold text-2xl md:text-3xl xl:text-4xl text-center">
                Why Choose Hike Digital Agency as the Best SEO Service?
              </p>
            </div>
            <div className="max-w-3xl mx-auto mt-4">
              <p className="font-kanit font-light text-xs md:text-sm text-black/70 text-center">
                {" "}
                Why should Hike Digital be your go-to choice for top-notch SEO
                services? Here's why:
              </p>
            </div>

            <div className="flow-root">
              <div className="relative mt-8 w-full flex flex-col md:flex-row justify-start">
                <div className="w-[100%] md:w-[42%] xl:w-[50%] relative md:absolute top-0 right-0 py-4 md:py-10 xl:py-14 bg-[#6754E9] rounded-t-3xl md:rounded-tl-none md:rounded-r-[2.5rem] z-0 h-full md:hidden items-center">
                  <div className="w-full md:w-[calc(100%)] xl:w-[calc(100%)] flex justify-center md:justify-end xl:justify-center pr-1 pl-4 md:pl-14 md:px-5 xl:px-0 xl:pl-8">
                    <div className="flex flex-col gap-5 md:gap-[3.25rem] xl:gap-10 text-white items-start">
                      <p className="font-syne font-bold text-sm">
                        1. Specialized SEO Team for Specific Niches
                      </p>
                      <p className="font-syne font-bold text-sm">
                        2. Personalized Project Management
                      </p>
                      <p className="font-syne font-bold text-sm">
                        3. Tailored SEO Strategies
                      </p>
                      <p className="font-syne font-bold text-sm">
                        4. Ethical SEO Practices
                      </p>
                      <p className="font-syne font-bold text-sm">
                        5. Transparent Reporting
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-full md:w-[62%] xl:w-[60%] z-10 px-4 md:pl-12 md:pr-8 py-4 md:py-10 xl:py-14 bg-[#F7F7FA] flex flex-col gap-4 md:gap-6 xl:gap-6 rounded-b-3xl md:rounded-[2.5rem]">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      Google, capturing over 90% of the search market, is the
                      go-to for millions seeking products or services like
                      yours.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      Google's features and tools, such as featured snippets,
                      local packs, and more, help businesses display their
                      brand, content, and offerings in an appealing and relevant
                      way.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      By following the best practices and guidelines of search
                      engine, businesses can improve their visibility,
                      authority, and credibility in the eyes of both users and
                      search engines
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      Businesses that choose SEO marketing can benefit from
                      these innovations and updates by staying ahead of the
                      competition and meeting the user expectations.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem] mt-[2px]">
                      <Check className="h-3 w-3 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-xs md:text-sm font-light text-black/70">
                      A whopping 70% of marketers see SEO as more effective than
                      PPC
                    </p>
                  </div>
                </div>

                <div className="w-[100%] md:w-[42%] xl:w-[50%] relative md:absolute top-0 right-0 py-4 md:py-10 xl:py-14 bg-[#6754E9] rounded-t-3xl md:rounded-tl-none md:rounded-r-[2.5rem] z-0 h-full md:flex items-center hidden">
                  <div className="md:w-[calc(100%)] xl:w-[calc(100%)] flex justify-center md:justify-end xl:justify-center px-0 pl-0 md:pl-14 md:px-5 xl:px-0 xl:pl-8">
                    <div className="flex flex-col gap-5 md:gap-[3.25rem] xl:gap-10 text-white items-start">
                      <p className="font-syne font-bold text-sm">
                        1. Specialized SEO Team for Specific Niches
                      </p>
                      <p className="font-syne font-bold text-sm">
                        2. Personalized Project Management
                      </p>
                      <p className="font-syne font-bold text-sm">
                        3. Tailored SEO Strategies
                      </p>
                      <p className="font-syne font-bold text-sm">
                        4. Ethical SEO Practices
                      </p>
                      <p className="font-syne font-bold text-sm">
                        5. Transparent Reporting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* // 13th page */}
        <div className="mt-14 md:mt-24 bg-gradient-to-b from-[#E9E5FF] from-0% to-transparent to-90% py-20">
          <MaxWidthWrapper className="">
            <div className="max-w-xl xl:max-w-3xl mx-auto">
              <p className="font-syne font-bold text-2xl md:text-3xl xl:text-4xl text-center">
                Our Major Features As The Leading SEO Company in India
              </p>
            </div>
            <div className="max-w-3xl mx-auto mt-4">
              <p className="font-kanit font-light text-xs md:text-sm text-black/70 text-center">
                {" "}
                Choosing Hike Digital as your SEO partner comes with a host of
                benefits that set us apart
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  1
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-base xl:text-lg">
                    Competitor Analysis with a Local Lens
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    Understand what local competitors are doing and strategize
                    to stay a step ahead.
                  </p>
                </div>
              </div>
              {/* //  */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  2
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Trustworthy Keyword Research
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    Utilizing top-notch tools, we ensure your content reaches
                    the right audience in the Indian market.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  3
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Competitor Analysis with a Local Lens
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    We analyze your website traffic to understand user behavior
                    and optimize accordingly.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  4
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Engaging, Authentic Content Creation
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    Content that not only ranks but also resonates with the
                    Indian audience.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  5
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Latest Technology
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    We leverage the latest technology and SEO practices to
                    deliver the best results.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  6
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    On-Page SEO Optimization
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    Our on-page SEO techniques are designed to boost traffic and
                    improve your website’s visibility on search engines.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  7
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Off-Page SEO Techniques
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    We employ effective off-page SEO strategies to enhance your
                    online presence and reputation.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  8
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Technical SEO Focus
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    We pay equal attention to technical SEO optimization,
                    ensuring your website is easily crawlable and indexable by
                    search engines.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  9
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Result-Oriented Services
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    Our SEO services are result-oriented and reasonably priced,
                    catering to businesses of all sizes.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  10
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Timely Delivery
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    Understand what local competitors are doing and strategize
                    to stay a step ahead.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  11
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Reputation Management
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    Understand what local competitors are doing and strategize
                    to stay a step ahead.
                  </p>
                </div>
              </div>

              {/* // */}
              <div className="relative flow-root overflow-hidden">
                <div className="absolute top-0 left-0 font-suwannaphum font-bold text-8xl text-[#E8E4E4] z-0">
                  12
                </div>
                <div className="relative bg-[#FFFFFF] rounded-xl py-8 px-4 z-10 mt-14 h-full">
                  <p className="font-syne font-bold text-base md:text-lg">
                    Systematic Reporting
                  </p>
                  <p className="font-kanit font-light text-xs md:text-sm mt-2">
                    We provide systematic reports, giving you a clear picture of
                    our efforts and the progress made.
                  </p>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* // 14th page */}
        <div className="mt-14 md:mt-24">
          <MaxWidthWrapper className="">
            <div className="max-w-xl xl:max-w-3xl mx-auto">
              <p className="font-syne font-bold text-2xl md:text-3xl xl:text-4xl text-center">
                What Will You Get From the Hike Digital SEO Company?
              </p>
            </div>
            <div className="max-w-xl mx-auto mt-4">
              <p className="font-kanit font-light text-xs md:text-sm text-black/70 text-center">
                {" "}
                At Hike Digital, we offer a comprehensive suite of SEO services
                designed to enhance your business’s online visibility. Here’s
                what you can expect from us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 px-10 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  Customized SEO Strategy
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  We understand that every business is unique. That’s why we
                  tailor our SEO strategies to align with your specific needs
                  and objectives.
                </p>
              </div>
              {/* //  */}
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 md:px-10 xl:px-14 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  In-depth Onsite SEO
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  We take care of all aspects of onsite SEO, including meta
                  descriptions, title tags, internal linking, alt tags, and
                  more.
                </p>
              </div>

              {/* // */}
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 px-10 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  High-Quality Content Writing
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  Our team of best seo expert in india and content writers will
                  keep your site updated with fresh, engaging content that
                  drives traffic.
                </p>
              </div>

              {/* // */}
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 px-10 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  Keyword Research and Market Analysis
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  We conduct thorough keyword research and market analysis to
                  ensure your content reaches the right audience.
                </p>
              </div>

              {/* // */}
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 px-10 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  Competitive Evaluation
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  We perform an in-depth evaluation of your competition to help
                  you stay ahead.
                </p>
              </div>

              {/* // */}
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 px-10 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  Authoritative Link Building
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  We manually build links on diverse domains with high domain
                  authority.
                </p>
              </div>

              {/* // */}
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 px-10 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  Social Media and News Outlet Syndication
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  We syndicate articles on social media curated sites and news
                  outlets for wider reach.
                </p>
              </div>

              {/* // */}
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 px-10 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  Organic and Paid Strategies
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  We use a combination of organic SEO tactics for long-term
                  results and paid ads for immediate boosts.
                </p>
              </div>

              {/* // */}
              <div className="relative flex flex-col justify-between h-60 md:h-full space-y-14 py-12 px-10 overflow-hidden border border-[#E2E2E2] rounded-lg">
                <p className="font-syne font-bold text-xl md:text-2xl xl:text-3xl text-center">
                  Data Tracking
                </p>
                <p className="font-kanit font-light text-xs md:text-sm mt-2 text-center">
                  We use data tracking software like Google Analytics to gain
                  insights from traffic, trends, and more.
                </p>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        {/* // 15th page */}
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

            <div className="flex gap-5 items-center flex-wrap mt-6 md:mt-24 mb-10 md:mb-20 xl:mb-24">
              <div className="relative w-[98%] md:flex-1 bg-[white] border rounded-t-3xl rounded-b-2xl">
                <div className="pb-4 relative z-10 bg-[white] rounded-t-3xl rounded-b-2xl">
                  <div className="bg-[#E2E2E2] w-full h-72 rounded-2xl flex justify-center items-center">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div className="mt-3 px-5">
                    <p className="font-syne font-bold text-base">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>

                    <p className="font-kanit font-light text-xs md:text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit,{" "}
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

              <div className="relative w-[98%] md:flex-1 bg-[white] border rounded-t-3xl rounded-b-2xl hidden md:flex scale-y-110">
                <div className="pb-4 relative z-10 bg-[white] rounded-t-3xl rounded-b-2xl">
                  <div className="bg-[#E2E2E2] w-full h-72 rounded-2xl flex justify-center items-center">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div className="mt-3 px-5">
                    <p className="font-syne font-bold text-base">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>

                    <p className="font-kanit font-light text-xs md:text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit,{" "}
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

              <div className="relative w-[98%] md:flex-1 bg-[white] border rounded-t-3xl rounded-b-2xl hidden lg:flex">
                <div className="pb-4 relative z-10 bg-[white] rounded-t-3xl rounded-b-2xl">
                  <div className="bg-[#E2E2E2] w-full h-72 rounded-2xl flex justify-center items-center">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div className="mt-3 px-5">
                    <p className="font-syne font-bold text-base">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>

                    <p className="font-kanit font-light text-xs md:text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit,{" "}
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
            </div>

            <div className="flex items-center w-full relative">
              <div className="flex space-x-[0.65rem] md:space-x-2 w-full justify-center">
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden xl:inline"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
              </div>
              <div className="absolute right-0 bottom-0 flex flex-col items-end space-y-[1px] pb-1 border-b-2 border-[#6754E9]">
                <p className="font-syne font-bold text-xs whitespace-nowrap">
                  VIEW MORE
                </p>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        <div className="mt-14 md:mt-24">
          <MaxWidthWrapper>
            <div className="max-w-lg xl:max-w-lg mx-auto">
              <p className="font-syne font-bold text-2xl md:text-3xl xl:text-4xl text-center">
                FAQs about search engine optimisation
              </p>
            </div>
            <div className="max-w-2xl mx-auto mt-4">
              <p className="font-kanit font-light text-xs md:text-sm text-black/70 text-center">
                {" "}
                Looking to learn more about paid search engine optimisation for
                your business? Browse our FAQs:
              </p>
            </div>

            <div className="mt-6 md:mt-10 max-w-4xl xl:max-w-5xl mx-auto flex flex-col mb-2">
              <div className="flex justify-between py-5 items-center border-y">
                <p className="font-syne font-bold text-sm text-center md:text-start md:text-base">
                  1. What makes Hike Digital different from other SEO agencies
                  in India?
                </p>
                <Plus className="h-5 w-5 text-[#6754E9] hidden md:flex" />
              </div>

              <div className="flex justify-between py-5 items-center border-b">
                <p className="font-syne font-bold text-sm text-center md:text-start md:text-base">
                  2. How long does it typically take to see results from your
                  SEO strategies?
                </p>
                <Plus className="h-5 w-5 text-[#6754E9] hidden md:flex" />
              </div>

              <div className="flex justify-between py-5 items-center border-b">
                <p className="font-syne font-bold text-sm text-center md:text-start md:text-base">
                  3. Do you offer services tailored to mobile SEO?
                </p>
                <Plus className="h-5 w-5 text-[#6754E9] hidden md:flex" />
              </div>

              <div className="flex justify-between py-5 items-center border-b">
                <p className="font-syne font-bold text-sm text-center md:text-start md:text-base">
                  4. How do you handle local SEO for businesses targeting
                  specific regions in India?
                </p>
                <Plus className="h-5 w-5 text-[#6754E9] hidden md:flex" />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        <div className="mt-14 md:mt-24 relative z-40 bg-[#6754E9] rounded-t-[2rem] py-12 md:py-24 w-full box-border">
          <MaxWidthWrapper>
            <div className="flex flex-col space-y-0 text-white">
              <div className="flex flex-col space-y-4 md:flex-row md:justify-between">
                <div className="xl:w-[34rem] flex flex-col space-y-6  md:w-[26rem]">
                  <h1 className="font-syne font-bold text-2xl md:text-4xl xl:text-5xl">
                    Get a Free consultation to boost your business
                  </h1>
                  <p className="font-kanit font-light text-xs md:text-sm lg:text-base">
                    A marketing audit is an evaluation of your company&apos;s
                    marketing efforts and their effectiveness. Here what you
                    will get:
                  </p>
                  <div className="border-b border-white/20"></div>
                  <div className="flex space-x-4 items-start">
                    <div className="bg-white rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                    </div>
                    <p className="font-kanit font-light">
                      A marketing audit is an evaluation of your company&apos;s
                      marketing efforts and their effectiveness. Here what you
                      will get:
                    </p>
                  </div>

                  <div className="flex space-x-4 items-start">
                    <div className="bg-white rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                    </div>
                    <p className="font-kanit font-light">
                      Evaluate your target audience to see if they have changed
                      or if you need to adjust your messaging to better reach
                      them
                    </p>
                  </div>
                  <div className="flex space-x-4 items-start">
                    <div className="bg-white rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                    </div>
                    <p className="font-kanit font-light">
                      Analyze your website to ensure it is user-friendly,
                      mobile-responsive, and optimized for search engines.
                    </p>
                  </div>
                  <div className="flex space-x-4 items-start">
                    <div className="bg-white rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-[#6754E9] stroke-[3.5]" />
                    </div>
                    <p className="font-kanit font-light">
                      Review your content marketing efforts, including your blog
                      posts, social media, and email marketing.
                    </p>
                  </div>
                </div>

                {/* 2nd */}
                <div className="flex flex-col space-y-10 md:w-[22rem] xl:w-[34rem]">
                  <div className="relative">
                    <div className="relative bg-white rounded-[2.2rem] overflow-hidden p-6 xl:py-14 xl:px-14 mx-auto">
                      <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-6">
                          <p className="font-syne font-bold text-xl md:text-2xl lg:text-3xl text-black">
                            Get your free audit
                          </p>
                          <div className="w-full">
                            <div className="h-1 bg-[#E9E5FF] rounded-md">
                              <div className="h-full w-[30%] bg-[#FFBE11] rounded-s-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                          <input
                            type="text"
                            id="input-text-label"
                            className="py-4 px-4 block w-full rounded-2xl text-sm border hover:border-[#6754E9] text-gray-900"
                            placeholder="Your Name"
                          />
                          <input
                            type="email"
                            id="input-email-label"
                            className="py-4 px-4 block w-full rounded-2xl text-sm border hover:border-[#6754E9] text-gray-900"
                            placeholder="Email"
                          />
                          <Button size="xl" className="w-full rounded-2xl">
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-2 -right-[0.6rem] w-[101%] h-[101%] rounded-[2rem] bg-black -z-10"></div>
                  </div>

                  <div className="flex flex-col space-y-4 xl:flex-row xl:space-x-12 xl:items-center">
                    <p className="font-kanit font-medium text-xl text-center">
                      AWARDED MARKETING AGENCY
                    </p>
                    <div className="flex space-x-12 items-center justify-between">
                      {" "}
                      <div className="object-contain w-16">
                        {" "}
                        <Image
                          src="/Clutch.png"
                          height={160}
                          width={148}
                          quality={100}
                          alt="#"
                        />
                      </div>
                      <div className="object-contain w-20">
                        {" "}
                        <Image
                          src="/EXPERTISE.png"
                          height={160}
                          width={198}
                          quality={100}
                          alt="#"
                        />
                      </div>
                      <div className="object-contain w-16">
                        {" "}
                        <Image
                          src="/badge.png"
                          height={150}
                          width={150}
                          quality={100}
                          alt="#"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white rounded-[2.5rem] px-5 md:px-8 xl:px-12 text-black z-10 flex flex-col xl:flex-row xl:justify-between mt-10 md:mt-20">
                  <div className="xl:flex-[1] flex flex-col space-y-1 border-b xl:border-r xl:border-b-0 border-black/10 py-5 xl:py-10">
                    <div className="w-14 object-contain">
                      <Image
                        src="/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
                        height={900}
                        width={768}
                        quality={100}
                        alt="#"
                        className="rounded-full aspect-square mb-3"
                      />
                    </div>
                    <p className="font-kanit font-normal text-sm md:text-lg">
                      Talk to a growth expert
                    </p>
                    <p className="font-syne font-bold text-lg md:text-2xl xl:text-3xl">
                      888-400-5050
                    </p>
                  </div>

                  {/* 2nd */}
                  <div className="flex">
                    <div className="xl:flex-[0.9] md:flex-[1] flex flex-col space-y-3 mx-auto xl:px-8 md:border-r md:border-black/10 py-5 xl:py-10">
                      <div className="p-4 bg-[#F7F7FA] rounded-full w-fit">
                        <MapPinned className="h-8 w-8 text-[#6754E7]" />
                      </div>
                      <p className="font-kanit font-light text-sm md:text-base">
                        915 Broadway Str 501, New York, NY 10010
                      </p>
                      <p className="font-syne font-bold text-lg md:text-xl xl:text-xl">
                        marketing@numerique.com
                      </p>
                      <div className="border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        <Link
                          href="/"
                          className="font-syne text-xs font-bold md:text-xs"
                        >
                          VIEW ON MAP
                        </Link>
                      </div>
                    </div>
                    <div className="hidden md:flex-[1] md:flex md:items-center md:justify-between md:space-y-1 md:mx-auto md:pl-8 md:py-5 xl:hidden">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <p className="font-kanit text-xs md:text-base w-28">
                            REVIEWED ON
                          </p>

                          <div className="flex items-center space-x-1">
                            <Star className="h-5 w-5" />
                            <Star className="h-5 w-5" />
                            <Star className="h-5 w-5" />
                            <Star className="h-5 w-5" />
                            <Star className="h-5 w-5" />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <p className="font-semibold text-lg md:text-2xl w-28">
                            Clutch
                          </p>

                          <p className="font-kanit"> 4.9 Rating</p>
                        </div>
                      </div>
                      <div className="w-24">
                        <Image
                          src="/ab-seal-vertical.svg"
                          height={900}
                          width={768}
                          quality={100}
                          alt="#"
                          className="aspect-square mb-3"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3rd */}
                  <div className="flex-[1] flex justify-between items-center mx-auto xl:pl-8 py-5 xl:py-10 md:hidden xl:flex overflow-hidden">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2 xl:space-x-4">
                        <p className="font-kanit text-xs md:text-base w-20 xl:w-28">
                          REVIEWED ON
                        </p>

                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 md:h-5md:w-5" />
                          <Star className="h-4 w-4 md:h-5md:w-5" />
                          <Star className="h-4 w-4 md:h-5md:w-5" />
                          <Star className="h-4 w-4 md:h-5md:w-5" />
                          <Star className="h-4 w-4 md:h-5md:w-5" />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 xl:space-x-4">
                        <p className="font-semibold text-lg md:text-2xl w-20 xl:w-28">
                          Clutch
                        </p>

                        <p className="font-kanit text-sm md:text-base">
                          4.9 Rating
                        </p>
                      </div>
                    </div>
                    <div className="w-24">
                      <Image
                        src="/ab-seal-vertical.svg"
                        height={900}
                        width={768}
                        quality={100}
                        alt="#"
                        className="aspect-square mb-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative bg-[#F7F7FA] rounded-b-[2.5rem] mx-auto px-5 md:px-8 xl:px-12 text-black z-0 -top-20">
                  <div className="flex justify-between space-x-4 whitespace-nowrap overflow-scroll scroll-smooth md:overflow-hidden md:justify-between md:space-x-16 pt-28 pb-8">
                    <div className="flex space-x-3 items-center">
                      <Cloud className="h-10 w-10" />
                      <p className="font-semibold text-sm">Google Cloud</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <Facebook className="h-10 w-10" />
                      <p className="font-semibold text-sm">MetaBusiness</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <Chrome className="h-10 w-10" />
                      <p className="font-semibold text-sm">Google Partner</p>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <Twitter className="h-10 w-10" />
                      <p className="font-semibold text-sm">Shopify Partner</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-2 md:px-8 xl:px-12 flex flex-col space-y-6 md:flex-row md:space-x-12 xl:space-x-36 overflow-hidden">
                <div className="flex flex-col space-y-7">
                  <p className="font-syne font-bold text-base md:text-base">
                    SOLUTIONS
                  </p>
                  <div className="flex justify-between md:space-x-12 xl:space-x-36">
                    <div className="flex flex-col space-y-2">
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Paid search marketing
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Search engine optimization
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Email marketing
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Conversion rate optimization
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Social Media Marketing
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Google shopping
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Influencer marketing
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Amazon shopping
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between md:space-x-12 xl:space-x-36">
                  <div className="flex flex-col space-y-7">
                    <p className="font-syne font-bold text-base md:text-base">
                      WHO WE ARE
                    </p>
                    <div className="flex flex-col space-y-2">
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Success Stories
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Awards
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Contact
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-7">
                    <p className="font-syne font-bold text-base md:text-base">
                      WORK
                    </p>
                    <div className="flex flex-col space-y-2">
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        About Us
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Blog
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Careers
                      </p>
                      <p className="font-kanit text-xs md:text-base font-light text-white/80 border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                        Meet the Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        <div className="relative z-50 bg-white py-4 md:py-6 rounded-t-[2rem] w-full box-border">
          <MaxWidthWrapper>
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
              <div className="hidden md:flex space-x-4 items-center">
                <p className="font-kanit font-light text-xs md:text-sm">
                  <span className="text-base">&copy; </span>2023 Numerique
                </p>
                <p className="font-kanit font-light text-xs md:text-sm">
                  Terms & Conditions
                </p>
                <p className="font-kanit font-light text-xs md:text-sm">
                  Privacy Policy
                </p>
              </div>

              <div className="flex space-x-4 justify-center md:justify-start">
                <div className="p-4 bg-[#F7F7FA] rounded-full">
                  <Linkedin className="h-4 w-4 text-black" />
                </div>

                <div className="p-4 bg-[#F7F7FA] rounded-full">
                  <Twitter className="h-4 w-4 text-black" />
                </div>
                <div className="p-4 bg-[#F7F7FA] rounded-full">
                  <Instagram className="h-4 w-4 text-black" />
                </div>
                <div className="p-4 bg-[#F7F7FA] rounded-full">
                  <Facebook className="h-4 w-4 text-black" />
                </div>
                <div className="p-4 bg-[#F7F7FA] rounded-full">
                  <Youtube className="h-4 w-4 text-black" />
                </div>
              </div>
              <div className="flex space-x-4 justify-center md:hidden">
                <p className="font-kanit font-light text-xs">
                  &copy; 2023 Numerique
                </p>
                <p className="font-kanit font-light text-xs">
                  Terms & Conditions
                </p>
                <p className="font-kanit font-light text-xs">Privacy Policy</p>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
};

export default page;
