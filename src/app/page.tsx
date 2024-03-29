"use client";

import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  SearchCheck,
  AlignJustify,
  Cloud,
  Chrome,
  Check,
  ArrowBigUp,
  Plus,
  MinusCircle,
  RadioTower,
  Lightbulb,
  Medal,
  Snail,
  Rocket,
  ArrowLeft,
  Squirrel,
  Rabbit,
  Dog,
  PawPrint,
  Rat,
  Turtle,
  MapPinned,
  Star,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  ChevronDown,
  Target,
  MailCheck,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [menuopen, setMenuOpen] = useState<Boolean>(false);
  const [renderNavigation, setRenderNavigation] = useState<Number>(0);
  const [renderCarousel, setRenderCarousel] = useState<Number>(0);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <Link
          href="/"
          className={buttonVariants({
            size: "lg",
            class: "rounded-none xl:hidden w-full",
          })}
        >
          GET A FREE AUDIT
          <ArrowRight className="h-5 w-5 absolute right-10" />
        </Link>

        <MaxWidthWrapper className="relative">
          <div className="flex justify-between items-center pb-1 xl:pb-2">
            <div className="flex space-x-2 items-center">
              <div className="h-[3.5rem] w-10 bg-black rounded-b-full flex items-center justify-center">
                <p className="text-white font-semibold text-lg">H</p>
              </div>
              <p className="font-semibold text-lg">HIKE</p>
            </div>
            {menuopen ? (
              <X
                className="h-6 w-6 stroke-[3] xl:hidden"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <AlignJustify
                className="h-6 w-6 stroke-[3] xl:hidden"
                onClick={() => setMenuOpen(true)}
              />
            )}

            <div className="xl:flex space-x-4 items-center hidden">
              <Link
                href="/"
                className={buttonVariants({
                  size: "default",
                  variant: "ghost",
                  className:
                    "rounded-[1rem] font-syne text-xs font-[701] hidden xl:flex",
                })}
              >
                HOME
              </Link>

              <div className="flex flex-col group">
                <Link
                  href="/"
                  className={buttonVariants({
                    size: "default",
                    variant: "ghost",
                    className:
                      "rounded-[1rem] font-syne text-xs font-[701] hidden xl:flex group-hover:bg-accent group-hover:text-accent-foreground",
                  })}
                >
                  MARKETING SOLUTIONS
                </Link>
                <div className="absolute z-30 bg-[#F7F7FA] w-[89%] left-20 top-14 py-12 px-16 rounded-3xl box-border flex space-x-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="w-[40%] border-r flex flex-col space-y-3">
                    <div className="flex space-x-3 items-center hover:bg-white group w-[70%] transition-all rounded-xl hover:text-[#6754E7]">
                      <div className="p-3 bg-white rounded-full">
                        <Search className="h-4 w-4 text-[#6754E7] stroke-[3]" />
                      </div>
                      <p className="font-kanit text-base font-normal">
                        Paid Search Marketing
                      </p>
                    </div>

                    <div className="flex space-x-3 items-center hover:bg-white group w-[70%] transition-all rounded-xl hover:text-[#6754E7]">
                      <div className="p-3 bg-white rounded-full">
                        <Target className="h-4 w-4 text-[#6754E7] stroke-[3]" />
                      </div>
                      <p className="font-kanit text-base font-normal">
                        Search Engine Optimization
                      </p>
                    </div>

                    <div className="flex space-x-3 items-center hover:bg-white group w-[70%] transition-all rounded-xl hover:text-[#6754E7]">
                      <div className="p-3 bg-white rounded-full">
                        <MailCheck className="h-4 w-4 text-[#6754E7] stroke-[3]" />
                      </div>
                      <p className="font-kanit text-base font-normal">
                        Email Marketing
                      </p>
                    </div>

                    <div className="flex space-x-3 items-center hover:bg-white group w-[70%] transition-all rounded-xl hover:text-[#6754E7]">
                      <div className="p-3 bg-white rounded-full">
                        <Rocket className="h-4 w-4 text-[#6754E7] stroke-[3]" />
                      </div>
                      <p className="font-kanit text-base font-normal">
                        Conversion Rate Optimization
                      </p>
                    </div>
                  </div>

                  <div className="w-[60%] flex space-x-7">
                    <div className="flex flex-col space-y-3 px-4 flex-[1.3]">
                      <div className="flex space-x-3 items-center hover:bg-white group pr-10 transition-all rounded-xl hover:text-[#6754E7]">
                        <div className="p-3 bg-white rounded-full">
                          <MessageSquare className="h-4 w-4 text-[#6754E7] stroke-[3]" />
                        </div>
                        <p className="font-kanit text-base font-normal">
                          Social Media Marketing
                        </p>
                      </div>

                      <div className="flex space-x-3 items-center hover:bg-white group pr-10 transition-all rounded-xl hover:text-[#6754E7]">
                        <div className="p-3 bg-white rounded-full">
                          <Target className="h-4 w-4 text-[#6754E7] stroke-[3]" />
                        </div>
                        <p className="font-kanit text-base font-normal">
                          Google Shoping
                        </p>
                      </div>

                      <div className="flex space-x-3 items-center hover:bg-white group pr-10 transition-all rounded-xl hover:text-[#6754E7]">
                        <div className="p-3 bg-white rounded-full">
                          <User className="h-4 w-4 text-[#6754E7] stroke-[3]" />
                        </div>
                        <p className="font-kanit text-base font-normal">
                          Influencer Marketing
                        </p>
                      </div>

                      <div className="flex space-x-3 items-center hover:bg-white group pr-10 transition-all rounded-xl hover:text-[#6754E7]">
                        <div className="p-3 bg-white rounded-full">
                          <Rocket className="h-4 w-4 text-[#6754E7] stroke-[3]" />
                        </div>
                        <p className="font-kanit text-base font-normal">
                          Amazon Shoping
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-end bg-[#E9E5FF] flex-1 rounded-3xl box-border p-5 mt-7 relative">
                      <Image
                        src="/target.webp"
                        height={110}
                        width={110}
                        quality={100}
                        alt="#"
                        className="absolute -top-14 right-6"
                      />

                      <div className="flex justify-between items-center">
                        <p className="font-kanit text-base">
                          Explore all <br /> solutions
                        </p>
                        <div className="p-3 bg-black rounded-full">
                          <ArrowRight className="h-4 w-4 text-white stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col relative group">
                <Link
                  href="/"
                  className={buttonVariants({
                    size: "default",
                    variant: "ghost",
                    className:
                      "rounded-[1rem] font-syne text-xs font-[702] hidden xl:flex group-hover:bg-accent group-hover:text-accent-foreground",
                  })}
                >
                  WHO WE ARE
                </Link>
                <div className="absolute z-30 bg-[#F7F7FA] w-44 top-12 p-2 rounded-2xl box-border flex flex-col space-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-t-3xl rounded-b-xl transition-all">
                    About Us
                  </p>
                  <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                    Blog
                  </p>
                  <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                    Careers
                  </p>
                  <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-b-3xl rounded-t-xl transition-all">
                    Meet the Team
                  </p>
                </div>
              </div>

              <div className="flex flex-col relative group">
                <Link
                  href="/"
                  className={buttonVariants({
                    size: "default",
                    variant: "ghost",
                    className:
                      "rounded-[1rem] font-syne text-xs font-[701] hidden xl:flex group-hover:bg-accent group-hover:text-accent-foreground",
                  })}
                >
                  WORK
                </Link>
                <div className="absolute z-30 bg-[#F7F7FA] w-44 top-12 p-2 rounded-2xl box-border flex flex-col space-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-t-3xl rounded-b-xl transition-all">
                    Success Stories
                  </p>
                  <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-b-3xl rounded-t-xl transition-all">
                    Awards
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className={buttonVariants({
                  size: "default",
                  variant: "ghost",
                  className:
                    "rounded-[1rem] font-syne text-xs font-[701] hidden xl:flex",
                })}
              >
                CONTACT
              </Link>
            </div>
            <Link
              href="/service"
              className={buttonVariants({
                size: "default",
                className:
                  "rounded-[1rem] font-syne text-xs font-bold hidden xl:flex",
              })}
            >
              LET&apos;S TALK
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div
            className={`absolute left-0 z-50 bg-white py-0 w-full ${
              menuopen ? "opacity-100 visible" : "opacity-0 invisible"
            } border-t-[1px] xl:hidden rounded-b-3xl transition-all ease-in-out duration-500`}
          >
            {menuopen ? (
              <div className="md:px-12 flex flex-col space-y-1">
                <Link
                  href="/"
                  className={buttonVariants({
                    size: "default",
                    variant: "ghost",
                    className:
                      "rounded-[1rem] font-kanit text-xs md:text-base xl:hidden items-start justify-start py-5",
                  })}
                >
                  HOME
                </Link>

                <div className="flex flex-col relative group">
                  <Link
                    href="/"
                    className={buttonVariants({
                      size: "default",
                      variant: "ghost",
                      className:
                        "rounded-[1rem] font-kanit text-xs md:text-base xl:hidden flex items-start justify-start py-5",
                    })}
                  >
                    Marketing Solutions
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Link>
                  <div className="hidden group-hover:flex border-t-[1px] transition-all ease-in-out duration-1000">
                    <div className="bg-[#F7F7FA] w-full top-12 p-2 rounded-2xl box-border flex flex-col space-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-t-3xl rounded-b-xl transition-all">
                        Amazon shoping
                      </p>
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Conversion rate optimization
                      </p>
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Email marketing
                      </p>

                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Google shopping
                      </p>

                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Influencer marketing
                      </p>

                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Paid search marketing
                      </p>

                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Search engine optimization
                      </p>
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Social media marketing
                      </p>
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-b-3xl rounded-t-xl transition-all">
                        Meet the Team
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col relative group">
                  <Link
                    href="/"
                    className={buttonVariants({
                      size: "default",
                      variant: "ghost",
                      className:
                        "rounded-[1rem] font-kanit text-xs md:text-base xl:hidden flex items-start justify-start py-5",
                    })}
                  >
                    Who We Are
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Link>
                  <div className="hidden group-hover:flex border-t-[1px]">
                    <div className="bg-[#F7F7FA] w-full top-12 p-2 rounded-2xl box-border flex flex-col space-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-t-3xl rounded-b-xl transition-all">
                        About Us
                      </p>
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Blog
                      </p>
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-xl transition-all">
                        Careers
                      </p>
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-b-3xl rounded-t-xl transition-all">
                        Meet the Team
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col relative group">
                  <Link
                    href="/"
                    className={buttonVariants({
                      size: "default",
                      variant: "ghost",
                      className:
                        "rounded-[1rem] font-kanit text-xs md:text-base xl:hidden flex items-start justify-start py-5",
                    })}
                  >
                    Work
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Link>
                  <div className="hidden group-hover:flex border-t-[1px]">
                    <div className="bg-[#F7F7FA] w-full top-12 p-2 rounded-2xl box-border flex flex-col space-y-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-t-3xl rounded-b-xl transition-all">
                        Success Stories
                      </p>

                      <p className="hover:bg-white hover:text-[#6754E9] py-2 px-4 font-kanit text-base rounded-b-3xl rounded-t-xl transition-all">
                        Awards
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/"
                  className={buttonVariants({
                    size: "default",
                    variant: "ghost",
                    className:
                      "rounded-b-[1.5rem] font-kanit text-xs md:text-base xl:hidden items-start justify-start py-5",
                  })}
                >
                  Contact
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="relative text-white">
        <div>
          <MaxWidthWrapper className="relative w-full bg-gradient-to-b from-[#6754E9] to-[#4534B8] rounded-b-[2rem] z-20 py-10 space-y-4 md:flex md:items-center xl:h-[38rem]">
            <div className="flex flex-col space-y-4 md:flex-[1.3] xl:flex-1">
              <h1 className="font-syne font-bold text-4xl md:text-5xl xl:text-7xl">
                Digital marketing that drives revenue
              </h1>
              <p className="font-syne text-sm md:text-base">
                It&apos;s your turn to shine when we put the spotlight on your
                brand. We help get the attention and revenues your business
                deserves in the digital world.
              </p>
              {/* Form section */}
              <div className=""></div>
              <div className="relative">
                <div className="relative bg-white rounded-3xl overflow-hidden">
                  <div className="px-7 w-full">
                    <div className="h-1 bg-[#E9E5FF] rounded-md"></div>
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
                <div className="absolute top-2 -right-[0.6rem] w-[101%] h-[101%] rounded-[2rem] bg-black -z-10"></div>
              </div>
            </div>
            <div className="md:flex-1 md:flex md:justify-end md:pl-10">
              <div className="relative">
                <div
                  className="pointer-events-none absolute top-[30%] transform-gpu overflow-hidden blur-3xl bg-gradient-to-tr from-[#bfb8e4] to-white opacity-40 aspect-[1155/678] w-[20.125rem] -z-10"
                  style={{ clipPath: "circle(1000% at 50% 50%)" }}
                />
                <div className="grid grid-rows-2 grid-flow-col place-items-center gap-6 mt-12 md:mt-0 xl:mt-28">
                  <Image
                    src="/box-1.png"
                    height={300}
                    width={227}
                    quality={100}
                    alt="#"
                    className="row-start-1 row-span-2 rounded-[2rem]"
                  />
                  <Image
                    src="/box-2.png"
                    height={300}
                    width={227}
                    quality={100}
                    alt="#"
                    className="row-start-1 rounded-[2rem]"
                  />
                  <Image
                    src="/box-3.png"
                    height={300}
                    width={227}
                    quality={100}
                    alt="#"
                    className="row-start-2 rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
        <div className="relative w-full bg-zinc-100/95 rounded-b-[2rem] h-44 z-10 -top-10 text-black">
          <MaxWidthWrapper>
            <div className="pt-16">
              <p className="font-syne font-bold text-md">
                A PARTNER, NOT A VENDOR
              </p>
            </div>
            <div className="flex justify-evenly space-x-4 mt-4 whitespace-nowrap overflow-scroll scroll-smooth md:overflow-hidden md:justify-start md:space-x-16">
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
          </MaxWidthWrapper>
        </div>
      </div>

      <div className="mt-0 md:mt-8">
        <MaxWidthWrapper>
          <div className="flex flex-col space-y-3">
            <p className="font-syne font-bold">WHAT WE DO</p>
            <div className="flex flex-col space-y-3 md:flex-row md:justify-between">
              <div className="flex flex-col space-y-3 flex-[1.1] xl:max-w-xl">
                <h1 className="font-syne font-bold text-2xl md:text-4xl xl:text-5xl">
                  Driving a better way of doing marketing
                </h1>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-7 flex-[1] xl:max-w-lg">
                <p className="text-xs md:text-sm text-gray-700">
                  We deliver business impact through PR & marketing with a
                  combination of intellectual curiosity, industry experience,
                  urgency, and precision.
                </p>

                <div className="border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                  <Link
                    href="/"
                    className="font-syne text-xs font-bold md:text-sm"
                  >
                    VIEW ALL SOLUTIONS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="mt-12 md:mt-20">
        {/* <MaxWidthWrapper className=""> */}
        <div className="md:flex relative px-5 mx-auto md:px-0">
          <div className="text-white md:flex-[1.1] xl:flex-[1.1] md:pl-12 xl:pl-20">
            <div className="flex flex-col space-y-6 px-4 py-6 bg-black rounded-[3rem] md:pl-8 xl:pl-14 md:pr-2 md:space-y-8 md:py-12">
              <div
                className={`relative flex justify-between items-center mx-auto ${
                  renderNavigation === 0 ? "md:bg-[#6754E9]" : ""
                } px-4 py-4 w-full rounded-full md:pl-6 md:py-3 md:pr-2 z-20`}
                onClick={() => setRenderNavigation(0)}
              >
                <p className="font-syne font-bold text-lg leading-5 w-44">
                  Search engine optimization
                </p>
                <Plus className="w-7 h-7 bg-[#E9E5FF] rounded-full text-[#6754E9] md:hidden" />
                <div
                  className={`hidden bg-black ${
                    renderNavigation === 0 ? "md:flex" : ""
                  } rounded-full p-3`}
                >
                  <ArrowRight className="h-9 w-9" />
                </div>
              </div>
              <div
                className={`relative flex justify-between items-center mx-auto ${
                  renderNavigation === 1 ? "md:bg-[#6754E9]" : ""
                } px-4 py-4 w-full rounded-full md:pl-6 md:py-3 md:pr-2 z-20`}
                onClick={() => setRenderNavigation(1)}
              >
                <p className="font-syne font-bold text-lg leading-5 w-44">
                  Paid search marketing
                </p>
                <Plus className="w-7 h-7 bg-[#E9E5FF] rounded-full text-[#6754E9] md:hidden" />
                <div
                  className={`hidden bg-black ${
                    renderNavigation === 1 ? "md:flex" : ""
                  } rounded-full p-3`}
                >
                  <ArrowRight className="h-9 w-9" />
                </div>
              </div>
              <div
                className={`relative flex justify-between items-center mx-auto ${
                  renderNavigation === 2 ? "md:bg-[#6754E9]" : ""
                } px-4 py-4 w-full rounded-full md:pl-6 md:py-3 md:pr-2 z-20`}
                onClick={() => setRenderNavigation(2)}
              >
                <p className="font-syne font-bold text-lg leading-5 w-44">
                  Conversion rate optimization
                </p>
                <Plus className="w-7 h-7 bg-[#E9E5FF] rounded-full text-[#6754E9] md:hidden" />
                <div
                  className={`hidden bg-black ${
                    renderNavigation === 2 ? "md:flex" : ""
                  } rounded-full p-3`}
                >
                  <ArrowRight className="h-9 w-9" />
                </div>
              </div>
              <div
                className={`relative flex justify-between items-center mx-auto ${
                  renderNavigation === 3 ? "md:bg-[#6754E9]" : ""
                } px-4 py-4 w-full rounded-full md:pl-6 md:py-3 md:pr-2 z-20`}
                onClick={() => setRenderNavigation(3)}
              >
                <p className="font-syne font-bold text-lg leading-5 w-44">
                  Social media marketing
                </p>
                <Plus className="w-7 h-7 bg-[#E9E5FF] rounded-full text-[#6754E9] md:hidden" />
                <div
                  className={`hidden bg-black ${
                    renderNavigation === 3 ? "md:flex" : ""
                  } rounded-full p-3`}
                >
                  <ArrowRight className="h-9 w-9" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:flex-[2] bg-[#F7F7FA] text-black relative rounded-[3rem] z-10 w-full md:-left-12 xl:-left-20">
            <div className="flex justify-center items-center w-full space-x-4 p-12 xl:space-x-12 xl:p-0">
              <div className="flex flex-col space-y-5 max-w-sm">
                <p className="font-syne font-semibold text-xl">
                  {renderNavigation === 0
                    ? "Increase your organic traffic by ranking high on search engines and AI discovery tools like ChatGPT"
                    : renderNavigation === 1
                    ? "Struggling to find PPC experts who drive long term results? Our world-class marketers would love to help your business thrive!"
                    : renderNavigation === 2
                    ? "Unlock your website’s full potential and boost your revenue with Numerique’s top-notch conversion rate optimization services."
                    : "Finding the balance between staying current and relying on proven strategies is essential for staying competitive in the ever-changing landscape of marketing."}
                </p>
                <div className="flex flex-col space-y-2 text-gray-700">
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-base">
                      {renderNavigation === 0
                        ? "Keyword and competitor research"
                        : renderNavigation === 1
                        ? "Keyword and competitor research"
                        : renderNavigation === 2
                        ? "Improve contact form completions"
                        : "Social Media Design"}
                    </p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-base">
                      {renderNavigation === 0
                        ? "SKAGS (single keyword ad groups)"
                        : renderNavigation === 1
                        ? "SKAGS (single keyword ad groups)"
                        : renderNavigation === 2
                        ? "Increase online orders"
                        : "Advanced demographic targeting"}
                    </p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-base">
                      {renderNavigation === 0
                        ? "Negative keyword pruning"
                        : renderNavigation === 1
                        ? "Negative keyword pruning"
                        : renderNavigation === 2
                        ? "Decrease abandoned shopping cart rates"
                        : "Custom ad strategy"}
                    </p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-base">
                      {renderNavigation === 0
                        ? "Ad copy optimization"
                        : renderNavigation === 1
                        ? "Ad copy optimization"
                        : renderNavigation === 2
                        ? "Accelerate website-generated revenue"
                        : "Unique ad campaigns and ads"}
                    </p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-kanit text-base">
                      {renderNavigation === 0
                        ? "Backlink Generation"
                        : renderNavigation === 1
                        ? "Backlink Generation"
                        : renderNavigation === 2
                        ? "Maximize site design and conversion rates"
                        : "Advanced demographic targeting"}
                    </p>
                  </div>
                </div>
                <div className="border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                  <Link
                    href="/"
                    className="font-syne text-xs font-bold md:text-xs"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div className="md:hidden max-w-[15rem] bg-white px-5 py-10 rounded-3xl lg:flex flex-col space-y-6 items-center">
                <div className="w-[11rem] h-[11rem] border rounded-full p-4 flex justify-center items-center">
                  <div className="w-[8.5rem] h-[8.5rem] border border-[#6754E9] rounded-full p-6 flex justify-center items-center">
                    <div className="flex flex-col items-center relative">
                      <p className="font-bold font-syne text-4xl">
                        {renderNavigation === 0
                          ? "93%"
                          : renderNavigation === 1
                          ? "82%"
                          : renderNavigation === 2
                          ? "71%"
                          : "86%"}
                      </p>
                      <ArrowBigUp className="h-6 w-6 text-[#6754E9] absolute top-12" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm">
                  {renderNavigation === 0
                    ? "Of customers reported that their online experience begins with search"
                    : renderNavigation === 1
                    ? "Of clicks on Search Ads are more likely to buy, making for better leads"
                    : renderNavigation === 2
                    ? "Of customers reported that they increase the contact form submissions"
                    : "Of customers reported an increase in conversion rates through the social media marketing strategies"}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </MaxWidthWrapper> */}
      </div>

      <div className="mt-14 md:mt-16">
        <MaxWidthWrapper>
          <div className="flex flex-col space-y-3">
            <p className="font-syne font-bold">ABOUT NUMERIQUE</p>
            <div className="flex flex-col space-y-3 md:flex-row md:justify-between">
              <div className="flex flex-col space-y-3 flex-[1.1] xl:max-w-xl">
                <h1 className="font-syne font-bold text-2xl md:text-4xl xl:text-5xl">
                  We combines customer data with thoughtful work
                </h1>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-7 flex-[1] xl:max-w-lg">
                <p className="text-xs md:text-sm text-gray-700">
                  Numerique is a tech-enabled digital marketing solutions
                  provider, and we create custom strategies for each of our
                  clients based on their needs and goals. As a result,
                  we&apos;ve driven over $3 billion in sales and over 7.8
                  million leads for our clients.
                </p>

                <div className="border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                  <Link
                    href="/"
                    className="font-syne text-xs font-bold md:text-sm"
                  >
                    MORE ABOUT OUR UNIQUE APPROACH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="mt-14">
        <MaxWidthWrapper>
          <div className="flex flex-col space-y-1 md:flex-row md:space-x-0 md:space-y-0">
            <div className="relative border-t-2 border-black/5 border-dashed py-6 md:flex-1 md:py-10">
              <div className="absolute inset-x-0 -top-2 h-4 w-4 bg-[#6754E9] rounded-full"></div>
              <p className="font-syne font-semibold text-sm md:max-w-[90%] xl:max-w-[80%]">
                Our customers have raised over $350mn in Funding
              </p>
            </div>
            <div className="relative border-t-2 border-black/5 border-dashed py-6 md:flex-1 md:py-10">
              <div className="absolute inset-x-0 -top-2 h-4 w-4 bg-[#6754E9] rounded-full"></div>
              <p className="font-syne font-semibold text-sm md:max-w-[90%] xl:max-w-[80%]">
                In over 2 years, we&apos;ve never lost a customer
              </p>
            </div>
            <div className="relative border-t-2 border-black/5 border-dashed py-6 md:flex-1 md:py-10">
              <div className="absolute inset-x-0 -top-2 h-4 w-4 bg-[#6754E9] rounded-full"></div>
              <p className="font-syne font-semibold text-sm md:max-w-[90%] xl:max-w-[80%]">
                We work with the world&apos;s fastest growing startups
              </p>
            </div>
            <div className="relative border-t-2 border-black/5 border-dashed py-6 md:flex-1 md:py-10">
              <div className="absolute inset-x-0 -top-2 h-4 w-4 bg-[#6754E9] rounded-full"></div>
              <p className="font-syne font-semibold text-sm md:max-w-[90%] xl:max-w-[80%]">
                Distributed team of over 20 of the worlds best marketers,
                podcasters and copywriters
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="mt-6 md:mt-20">
        <MaxWidthWrapper className="relative w-full bg-gradient-to-b from-[#E9E5FF] to-white rounded-t-[2rem] py-12 z-10 pb-24 md:pb-28 xl:pb-36">
          <div className="flex flex-col space-y-6">
            <div className="max-w-xs mx-auto px-2 md:max-w-md md:px-0">
              <p className="font-syne font-bold text-md text-center md:text-xs">
                OUR CUSTOMERS ARE SOME OF THE WORLD&apos;S...
              </p>
            </div>
            <div className="max-w-xs mx-auto px-2 md:max-w-md md:px-0">
              <p className="font-syne font-bold text-xl text-center md:text-4xl">
                Fastest growing companies
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/"
                className={buttonVariants({
                  size: "default",
                  className: "rounded-[1rem] font-syne text-xs font-bold",
                })}
              >
                VIEW ALL
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* carousel */}
            <div className="flex flex-col space-y-10">
              <div className="md:flex md:space-x-10">
                <div className="md:flex flex-1">
                  <div className="relative mt-4 w-full">
                    <div className="relative bg-white rounded-[2.2rem] xl:rounded-[3rem] overflow-hidden z-10">
                      <div className="px-9 pt-14 pb-8 flex flex-col space-y-4 mx-auto md:pt-16 md:px-10 md:pb-14">
                        <p className="font-syne font-bold text-[1.75rem] text-center tracking-tighter md:text-[2.5rem]">
                          ZARA
                        </p>
                        <p className="font-kanit font-medium text-lg text-center md:text-xl md:font-normal">
                          Ecommerce growth
                        </p>
                        <p className="font-syne font-bold text-2xl text-center text-[#6754E9] md:text-[2.5rem]">
                          &#43;40%
                        </p>

                        <div className="">
                          <div className="border-y-[1px] py-7 mt-2 md:mt-5">
                            <p className="font-kanit text-base text-center">
                              Paid Search, Paid Social, SEO
                            </p>
                          </div>
                        </div>
                        <div className="w-full flex justify-center">
                          <div className="border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all mt-3 md:mt-16">
                            <Link
                              href="/"
                              className="font-syne text-xs font-bold md:text-xs"
                            >
                              READ THE SUCCESS STORIES
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 -right-[0.6rem] w-[100%] h-[101%] rounded-[2.2rem] xl:rounded-[3rem] bg-[#6754E9] -z-0"></div>
                  </div>
                </div>

                {/* 2nd */}
                <div className="hidden md:flex flex-1">
                  <div className="relative mt-4 w-full">
                    <div className="relative bg-white rounded-[2.2rem] xl:rounded-[3rem] overflow-hidden z-10">
                      <div className="px-9 pt-14 pb-8 flex flex-col space-y-4 mx-auto md:pt-16 md:px-10 md:pb-14">
                        <p className="font-syne font-bold text-[1.75rem] text-center tracking-tighter md:text-[2.5rem]">
                          Homme
                        </p>
                        <p className="font-kanit font-medium text-lg text-center md:text-xl md:font-normal">
                          Engagement rates
                        </p>
                        <p className="font-syne font-bold text-2xl text-center text-[#6754E9] md:text-[2.5rem]">
                          &#43;50%
                        </p>

                        <div className="">
                          <div className="border-y-[1px] py-7 mt-2 md:mt-5">
                            <p className="font-kanit text-base text-center">
                              Organic Social Media, Paid Social
                            </p>
                          </div>
                        </div>
                        <div className="w-full flex justify-center">
                          <div className="border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all mt-3 md:mt-16">
                            <Link
                              href="/"
                              className="font-syne text-xs font-bold md:text-xs"
                            >
                              READ THE SUCCESS STORIES
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 -right-[0.6rem] w-[100%] h-[101%] rounded-[2.2rem] xl:rounded-[3rem] bg-[#6754E9] -z-0"></div>
                  </div>
                </div>

                {/* 3rd */}
                <div className="hidden xl:flex flex-1">
                  <div className="relative mt-4 w-full">
                    <div className="relative bg-white rounded-[2.2rem] xl:rounded-[3rem] overflow-hidden z-10">
                      <div className="px-9 pt-14 pb-8 flex flex-col space-y-4 mx-auto md:pt-16 md:px-10 md:pb-14">
                        <p className="font-syne font-bold text-[1.75rem] text-center tracking-tighter md:text-[2.5rem]">
                          IKEA
                        </p>
                        <p className="font-kanit font-medium text-lg text-center md:text-xl md:font-normal">
                          Ecommerce growth
                        </p>
                        <p className="font-syne font-bold text-2xl text-center text-[#6754E9] md:text-[2.5rem]">
                          &#43;40%
                        </p>

                        <div className="">
                          <div className="border-y-[1px] py-7 mt-2 md:mt-5">
                            <p className="font-kanit text-base text-center">
                              Paid Search, Paid Social, SEO
                            </p>
                          </div>
                        </div>
                        <div className="w-full flex justify-center">
                          <div className="border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all mt-3 md:mt-16">
                            <Link
                              href="/"
                              className="font-syne text-xs font-bold md:text-xs"
                            >
                              READ THE SUCCESS STORIES
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 -right-[0.6rem] w-[100%] h-[101%] rounded-[2.2rem] xl:rounded-[3rem] bg-[#6754E9] -z-0"></div>
                  </div>
                </div>
              </div>

              {/* carousel pointer */}
              <div className="flex space-x-[0.65rem] md:space-x-2 w-full justify-center">
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 xl:hidden"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
              </div>
            </div>
          </div>

          <div className="bg-[#E9E5FF] px-4 pt-10 pb-14 rounded-[2.2rem] xl:rounded-[3rem] mt-14 md:mt-32 md:px-12 md:py-10 mx-auto">
            <div className="flex flex-col space-y-6 md:flex-row md:items-center">
              <div className="flex flex-col space-y-3 md:flex-1 xl:flex-[1.1] md:space-y-7 xl:pr-9">
                <p className="font-syne font-bold text-[1.45rem] md:text-3xl xl:text-5xl">
                  Get your free marketing audit
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
                <div className="relative bg-white rounded-3xl overflow-hidden z-10">
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
                <div className="absolute top-2 -right-[0.6rem] w-[101%] h-[101%] rounded-[2rem] bg-black -z-0"></div>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-24">
            <div className="flex flex-col space-y-3 md:space-y-5">
              <p className="font-syne font-bold md:text-center">
                Why NUMERIQUE
              </p>
              <h1 className="font-syne font-bold text-2xl md:text-4xl xl:text-5xl md:text-center">
                How we drive revenue
              </h1>

              <div className="flex flex-col space-y-3 items-start md:flex-row md:space-x-12 md:space-y-0 md:justify-between md:items-center">
                <div className="flex flex-col space-y-3 items-start md:flex-1 mt-2 md:mt-0">
                  <div className="p-4 bg-[#F7F7FA] rounded-full">
                    <RadioTower className="h-8 w-8 text-[#6754E7]" />
                  </div>
                  <p className="font-syne font-bold">DRIVE WEBSITE TRAFFIC</p>
                  <p className="text-xs md:text-xs text-gray-700">
                    If you&apos;re ready to increase traffic to your website,
                    it&apos;s time to partner with an agency that knows how to
                    help you accomplish your goals.
                  </p>
                </div>

                <div className="flex flex-col space-y-3 items-start md:flex-1">
                  <div className="p-4 bg-[#F7F7FA] rounded-full">
                    <Medal className="h-8 w-8 text-[#6754E7]" />
                  </div>
                  <p className="font-syne font-bold">
                    CREATE & MANAGE POWERFUL AD CAMPAIGNS
                  </p>
                  <p className="text-xs md:text-xs text-gray-700">
                    When you use ad marketing, you create specific messages to
                    motivate people to take action.
                  </p>
                </div>

                <div className="flex flex-col space-y-3 items-start md:flex-1">
                  <div className="p-4 bg-[#F7F7FA] rounded-full">
                    <Lightbulb className="h-8 w-8 text-[#6754E7]" />
                  </div>
                  <p className="font-syne font-bold">
                    COLLECT, ANALYZE AND DEPLOY MARKETING DATA
                  </p>
                  <p className="text-xs md:text-xs text-gray-700">
                    Get the tools you need to collect marketing data, like
                    Google Analytics, and set up processes for collecting and
                    analyzing it.
                  </p>
                </div>

                <div className="flex flex-col space-y-3 items-start md:flex-1">
                  <div className="p-4 bg-[#F7F7FA] rounded-full">
                    <Snail className="h-8 w-8 text-[#6754E7]" />
                  </div>
                  <p className="font-syne font-bold">
                    IMPROVE BRAND MESSAGING AND CONVERSION
                  </p>
                  <p className="text-xs md:text-xs text-gray-700">
                    Keeping your brand marketing consistent enables you to
                    create a lasting impression that sticks in consumers minds
                    and keeps them coming back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Driving Digital revenue */}
      <div className="relative z-20 bg-[#F7F7FA] rounded-t-[2rem] py-16 w-full -top-10 box-border pb-32">
        <MaxWidthWrapper>
          <div className="flex flex-col space-y-6 md:space-y-8">
            <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
              <div className="flex flex-col space-y-5 md:space-y-20 md:flex-[1] md:border-r-[1px] md:pr-20 box-border">
                <h1 className="font-syne font-bold text-2xl md:text-4xl xl:text-5xl xl:leading-[1]">
                  Driving digital revenue for our 1000+ satisfied customers
                </h1>

                <div className="flex justify-between items-center bg-white w-full xl:max-w-[70%] rounded-full pr-4">
                  <div className="flex space-x-4 items-center">
                    <div className="p-4 bg-[#F7F7FA] rounded-full">
                      <Rocket className="h-7 w-7 text-[#6754E7]" />
                    </div>
                    <p className="font-syne font-bold text-3xl md:text-4xl">
                      21%
                    </p>
                  </div>
                  <p className="font-kanit text-sm max-w-[8rem]">
                    Average Traffic Increase for Clients
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-6 md:flex-[1] md:pl-16 box-border">
                <p className="font-kanit text-sm md:text-md font-light">
                  “The entire staff at Numerique has been phenomenal. They are
                  quick with their replies and incredibly helpful.”{" "}
                </p>

                <div className="flex flex-col">
                  <p className="font-kanit font-semibold text-sm">
                    Edward Kennedy
                  </p>
                  <p className="font-kanit font-light text-sm">
                    Director, Client Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="md:flex-[1] md:pr-20"></div>
              <div className="flex space-x-4 md:flex-[1] md:pl-16 items-center xl:mb-10">
                <div className="p-2 bg-white rounded-full">
                  <ArrowLeft className="h-5 w-5 text-[#6754E7]" />
                </div>
                <div className="p-2 bg-white rounded-full">
                  <ArrowRight className="h-5 w-5 text-[#6754E7]" />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-7 md:space-x-16 xl:space-x-24 md:justify-between py-4 overflow-auto whitespace-nowrap">
              <div className="flex items-center space-x-2 md:space-x-4">
                <Squirrel className="h-8 w-8" />
                <p className="text-xl font-bold md:text-2xl xl:text-4xl">
                  Squirrel
                </p>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <Rabbit className="h-8 w-8" />
                <p className="text-xl font-bold md:text-2xl xl:text-4xl">
                  Rabbit
                </p>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <Dog className="h-8 w-8" />
                <p className="text-xl font-bold md:text-2xl xl:text-4xl">Dog</p>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <PawPrint className="h-8 w-8" />
                <p className="text-xl font-bold md:text-2xl xl:text-4xl">
                  PawPrint
                </p>
              </div>

              <div className="flex items-center space-x-2 md:space-x-4">
                <Rat className="h-8 w-8" />
                <p className="text-xl font-bold md:text-2xl xl:text-4xl">Rat</p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="relative z-30 bg-[#E9E5FF] rounded-t-[2rem] pt-14 md:pt-20 w-full -top-20 box-border flow-root isolate">
        <MaxWidthWrapper>
          <div className="flex flex-col space-y-5 md:flex-row md:items-center md:space-x-24">
            <div className="flex flex-col space-y-3 md:space-y-5 md:flex-[0.9]">
              <p className="font-syne font-bold">THE TEAM BEHIND</p>
              <div className="flex flex-col space-y-3 md:space-y-5">
                <div className="flex flex-col space-y-3 md:space-y-5 xl:max-w-xl">
                  <h1 className="font-syne font-bold text-2xl md:text-4xl xl:text-5xl">
                    Team of over 450 experts
                  </h1>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-5 xl:max-w-lg">
                  <p className="text-xs md:text-sm text-gray-700">
                    At Numerique, we&apos;re focused on building strong and
                    lasting client partnerships. By drawing on our deep industry
                    knowledge and expertise, we provide the insights you need to
                    build and evolve your brand, drive business performance and
                    mitigate risk.
                  </p>

                  <div className="">
                    <Link
                      href="/"
                      className={buttonVariants({
                        size: "default",
                        className:
                          "rounded-[1rem] font-syne text-xs font-bold w-[50%] mt-2 md:mt-2",
                      })}
                    >
                      MEET THE TEAM
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* img */}
            <div className="md:flex-[1.1]">
              <div className="relative mt-8 md:mt-0">
                <div className="relative z-10">
                  <Image
                    src="/GettyImages-1436826358.jpg"
                    height={831}
                    width={450}
                    quality={100}
                    alt="#"
                    className="row-start-1 row-span-2 rounded-[2.5rem] w-[80%]"
                  />{" "}
                </div>

                <div className="relative z-20 p-2 rounded-[2.5rem] bg-[#E9E5FF] -top-36 md:-top-40 xl:-top-52 w-[50%] md:w-[80%] xl:w-fit left-40 md:left-[7.5rem] xl:left-80">
                  <Image
                    src="/GettyImages-1437209359-768x930.jpg"
                    height={450}
                    width={300}
                    quality={100}
                    alt="#"
                    className="rounded-[2rem] w-[100%] md:w-[80%] xl:w-[90%]"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="relative z-30 bg-[#FFFFFF] rounded-t-[2rem] py-12 pb-28 md:py-40 w-full -top-32 box-border">
        <MaxWidthWrapper>
          <div className="flex flex-col space-y-8 md:space-y-0 lg:flex-row lg:space-x-6 lg:justify-between">
            <div className="flex flex-col space-y-3 justify-between lg:flex-[0.8]">
              <p className="font-syne font-bold">Blog</p>
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-3 xl:max-w-xl">
                  <h1 className="font-syne font-bold text-2xl md:text-4xl xl:text-5xl">
                    Digital marketing & industry insights
                  </h1>
                </div>
              </div>
              <div className="border-b-2 pb-[0.10rem] border-[#6754E9] w-fit hover:border-[#B0A7EF] trasition-all">
                <Link
                  href="/"
                  className="font-syne text-xs font-bold md:text-sm"
                >
                  View More
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-6 items-center">
              <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 xl:space-x-8">
                <div className="border rounded-[2.5rem] flow-root isolate max-w-sm object-contain pb-8 md:mt-8 lg:mt-0">
                  <div className="flex flex-col space-y-3">
                    <Image
                      src="/milad-fakurian-58Z17lnVS4U-unsplash-Copy.jpg"
                      height={450}
                      width={300}
                      quality={100}
                      alt="#"
                      className="rounded-t-[2.5rem] aspect-[1/0.8] w-[100%] object-cover"
                    />
                    <div className="px-7">
                      <p className="text-sm text-gray-500 mt-3">May 2023</p>
                    </div>

                    <div className="px-7">
                      <p className="font-syne font-bold text-lg">
                        The evolution of live-stream content and short-form
                        video: a look at the TikTok revolution
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden border rounded-[2.5rem] md:flow-root isolate max-w-sm object-contain pb-8 md:mt-8 lg:mt-0">
                  <div className="flex flex-col space-y-3">
                    <Image
                      src="/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
                      height={450}
                      width={300}
                      quality={100}
                      alt="#"
                      className="rounded-t-[2.5rem] aspect-[1/0.8] w-[100%] object-cover"
                    />
                    <div className="px-7">
                      <p className="text-sm text-gray-500 mt-3">May 2023</p>
                    </div>

                    <div className="px-7">
                      <p className="font-syne font-bold text-lg">
                        The Metaverse boom: brands unite and Apple takes a rain
                        check
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-[0.65rem] md:space-x-3 w-full justify-center">
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
                <div className="h-[0.37rem] w-[0.37rem] rounded-full bg-black/10 md:hidden"></div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="relative z-40 bg-[#6754E9] rounded-t-[2rem] py-12 md:py-24 w-full -top-48 box-border">
        <MaxWidthWrapper>
          <div className="flex flex-col space-y-0 text-white">
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between">
              <div className="xl:w-[34rem] flex flex-col space-y-6  md:w-[26rem]">
                <h1 className="font-syne font-bold text-2xl md:text-4xl xl:text-5xl">
                  Get a Free consultation to boost your business
                </h1>
                <p className="font-kanit font-light text-xs md:text-sm lg:text-base">
                  A marketing audit is an evaluation of your company&apos;s
                  marketing efforts and their effectiveness. Here what you will
                  get:
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
                    Evaluate your target audience to see if they have changed or
                    if you need to adjust your messaging to better reach them
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

      <div className="relative z-50 -mt-60 bg-white py-4 md:py-8 rounded-t-[2rem] w-full box-border">
        <MaxWidthWrapper>
          <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
            <div className="hidden md:flex space-x-4">
              <p className="font-kanit font-light text-xs">
                &copy; 2023 Numerique
              </p>
              <p className="font-kanit font-light text-xs">
                Terms & Conditions
              </p>
              <p className="font-kanit font-light text-xs">Privacy Policy</p>
            </div>

            <div className="flex space-x-4">
              <div className="p-4 bg-[#F7F7FA] rounded-full">
                <Linkedin className="h-5 w-5 text-black" />
              </div>

              <div className="p-4 bg-[#F7F7FA] rounded-full">
                <Twitter className="h-5 w-5 text-black" />
              </div>
              <div className="p-4 bg-[#F7F7FA] rounded-full">
                <Instagram className="h-5 w-5 text-black" />
              </div>
              <div className="p-4 bg-[#F7F7FA] rounded-full">
                <Facebook className="h-5 w-5 text-black" />
              </div>
              <div className="p-4 bg-[#F7F7FA] rounded-full">
                <Youtube className="h-5 w-5 text-black" />
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
    </>
  );
}
