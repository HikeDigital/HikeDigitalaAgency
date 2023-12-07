import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  AlignJustify,
  Twitter,
  Facebook,
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
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-30 bg-white">
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

        <MaxWidthWrapper>
          <div className="flex justify-between items-center pb-1">
            <div className="flex space-x-2 items-center">
              <div className="h-[3.5rem] w-10 bg-black rounded-b-full flex items-center justify-center">
                <p className="text-white font-semibold text-lg">N</p>
              </div>
              <p className="font-semibold text-lg">NUMERIQUE</p>
            </div>
            <AlignJustify className="h-6 w-6 stroke-[3] xl:hidden" />
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="relative mt-2 text-white">
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
                    alt="#"
                    className="row-start-1 row-span-2 rounded-[2rem]"
                  />
                  <Image
                    src="/box-2.png"
                    height={300}
                    width={227}
                    alt="#"
                    className="row-start-1 rounded-[2rem]"
                  />
                  <Image
                    src="/box-3.png"
                    height={300}
                    width={227}
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
              <div className="relative flex justify-between items-center mx-auto md:bg-[#6754E9] px-4 py-4 w-full rounded-full md:pl-6 md:py-3 md:pr-2 z-20">
                <p className="font-syne font-bold text-lg leading-5 w-44">
                  Search engine optimization
                </p>
                <Plus className="w-7 h-7 bg-[#E9E5FF] rounded-full text-[#6754E9] md:hidden" />
                <div className="hidden md:flex bg-black rounded-full p-3">
                  <ArrowRight className="h-9 w-9" />
                </div>
              </div>
              <div className="relative flex justify-between items-center mx-auto active:bg-[#6754E9] px-4 py-4 w-full rounded-full md:pl-6 md:py-3 md:pr-2 z-20">
                <p className="font-syne font-bold text-lg leading-5 w-44">
                  Paid search marketing
                </p>
                <Plus className="w-7 h-7 bg-[#E9E5FF] rounded-full text-[#6754E9] md:hidden" />
                <div className="hidden bg-black rounded-full p-3">
                  <ArrowRight className="h-9 w-9" />
                </div>
              </div>
              <div className="relative flex justify-between items-center mx-auto active:bg-[#6754E9] px-4 py-4 w-full rounded-full md:pl-6 md:py-3 md:pr-2 z-20">
                <p className="font-syne font-bold text-lg leading-5 w-44">
                  Conversion rate optimization
                </p>
                <Plus className="w-7 h-7 bg-[#E9E5FF] rounded-full text-[#6754E9] md:hidden" />
                <div className="hidden bg-black rounded-full p-3">
                  <ArrowRight className="h-9 w-9" />
                </div>
              </div>
              <div className="relative flex justify-between items-center mx-auto active:bg-[#6754E9] px-4 py-4 w-full rounded-full md:pl-6 md:py-3 md:pr-2 z-20">
                <p className="font-syne font-bold text-lg leading-5 w-44">
                  Social media marketing
                </p>
                <Plus className="w-7 h-7 bg-[#E9E5FF] rounded-full text-[#6754E9] md:hidden" />
                <div className="hidden bg-black rounded-full p-3">
                  <ArrowRight className="h-9 w-9" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:flex-[2] bg-[#F7F7FA] text-black relative rounded-[3rem] z-10 w-full md:-left-12 xl:-left-20">
            <div className="flex justify-center items-center w-full space-x-4 p-12 xl:space-x-12 xl:p-0">
              <div className="flex flex-col space-y-5 max-w-sm">
                <p className="font-syne font-semibold text-xl">
                  Increase your organic traffic by ranking high on search
                  engines and AI discovery tools like ChatGPT
                </p>
                <div className="flex flex-col space-y-2 text-gray-700">
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-syne text-base">
                      Keyword and competitor research
                    </p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-syne text-base">
                      SKAGS (single keyword ad groups)
                    </p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-syne text-base">
                      Negative keyword pruning
                    </p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-syne text-base">Ad copy optimization</p>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <div className="bg-[#6754E9] rounded-full p-[0.12rem]">
                      <Check className="h-4 w-4 text-white stroke-[3.5]" />
                    </div>
                    <p className="font-syne text-base">Backlink Generation</p>
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
              <div className="max-w-[15rem] bg-white px-5 py-10 rounded-3xl flex flex-col space-y-6 items-center">
                <div className="w-[11rem] h-[11rem] border rounded-full p-4 flex justify-center items-center">
                  <div className="w-[8.5rem] h-[8.5rem] border border-[#6754E9] rounded-full p-6 flex justify-center items-center">
                    <div className="flex flex-col items-center relative">
                      <p className="font-bold font-syne text-4xl">93%</p>
                      <ArrowBigUp className="h-6 w-6 text-[#6754E9] absolute top-12" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm">
                  Of customers reported that their online experience begins with
                  search
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
                    alt="#"
                    className="row-start-1 row-span-2 rounded-[2.5rem] w-[80%]"
                  />{" "}
                </div>

                <div className="relative z-20 p-2 rounded-[2.5rem] bg-[#E9E5FF] -top-36 md:-top-40 xl:-top-52 w-[50%] md:w-[80%] xl:w-fit left-40 md:left-[7.5rem] xl:left-80">
                  <Image
                    src="/GettyImages-1437209359-768x930.jpg"
                    height={450}
                    width={300}
                    alt="#"
                    className="rounded-[2rem] w-[100%] md:w-[80%] xl:w-[90%]"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="relative z-30 bg-[#FFFFFF] rounded-t-[2rem] py-12 md:py-20 w-full -top-32 box-border">
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

            <div className="flex flex-col md:flex-row md:justify-between xl:space-x-8">
              <div className="border rounded-[2.5rem] flow-root isolate max-w-sm object-contain pb-8 md:mt-8 lg:mt-0">
                <div className="flex flex-col space-y-3">
                  <Image
                    src="/milad-fakurian-58Z17lnVS4U-unsplash-Copy.jpg"
                    height={450}
                    width={300}
                    alt="#"
                    className="rounded-t-[2.5rem] aspect-[1/0.8] w-[100%]"
                  />
                  <div className="px-7">
                    <p className="text-sm text-gray-500 mt-3">May 2023</p>
                  </div>

                  <div className="px-7">
                    <p className="font-syne font-bold text-lg">
                      The evolution of live-stream content and short-form video:
                      a look at the TikTok revolution
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
                    alt="#"
                    className="rounded-t-[2.5rem] aspect-[1/0.8] w-[100%]"
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
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
}

// GettyImages-1436826358
// GettyImages-1437209359-768x930
