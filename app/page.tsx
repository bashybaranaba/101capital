"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Perspectives from "@/components/Perspectives";

export default function Home() {
  //function to handle the click event and taje the user to the team section
  const handleClick = () => {
    const team = document.getElementById("team");
    team?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative h-screen bg-gray-800">
        <Image
          src="/images/101collage.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
          <div className="-mt-16 bg-white text-white p-1.5 rounded-full  ">
            <Image
              src="/images/logo.png"
              alt="Vercel Logo"
              width={60}
              height={60}
              className=""
            />
          </div>
          <div className="mt-2 bg-white text-white p-1.5 rounded-full mb-8">
            <Image
              src="/images/101capital.png"
              alt="Vercel Logo"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            PEOPLE-CENTRIC ADVISORS
            <br /> INVESTORS AND OPERATORS
          </h1>

          <button
            onClick={handleClick}
            className="mt-8 p-3 bg-indigo-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="mt-12" id="team">
        <div className="relative z-20 flex flex-col items-center justify-center h-full ">
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-6">
              <div className="hidden lg:flex mt-8 py-10">
                <div className="flex flex-col">
                  <h1 className="text-5xl font-bold text-indigo-700">
                    We invest growth
                  </h1>
                  <h1 className="text-5xl font-bold text-indigo-600">
                    equity to foster global
                  </h1>
                  <h1 className="text-5xl font-bold text-indigo-500">
                    leadership positions
                  </h1>

                  <h1 className="mt-6 text-2xl font-semibold text-gray-600">
                    We have jointly managed US$ 5Bn of AUM
                  </h1>

                  <h1 className="mt-1 text-lg  text-gray-600">
                    Our focus is on Afrocentric late stage technology companies
                  </h1>
                  <h1 className="mt-1 text-lg  text-gray-600">
                    We cross-fertilise human & financial capital, and experience
                    <br />
                    to create value for our portfolio
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 container">
              <div className="grid grid-cols-4 gap-4 mt-8">
                <div className="col-span-2 flex flex-col items-center justify-center mx-6 my-2">
                  <Avatar className="h-36 w-36">
                    <AvatarImage
                      src="/images/stephane.jpg"
                      alt="@shadcn"
                      className="object-cover aspect-[1] "
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg font-bold mt-2">Stéphane Eboko</h2>
                  <p className="text-xs text-gray-600">
                    Co-founder {"&"} Managing Partner
                  </p>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center mx-6 my-2">
                  <Avatar className="h-36 w-36 object-cover aspect-[5/6] ">
                    <AvatarImage
                      src="/images/jessica-photo.jpg"
                      alt="@shadcn"
                      className="object-cover aspect-[1] "
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg font-bold mt-2">Jessica Colaço</h2>
                  <p className="text-xs text-gray-600">
                    Co-founder {"&"} Managing Partner
                  </p>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center mx-6 my-2">
                  <Avatar className="h-36 w-36">
                    <AvatarImage
                      src="/images/kris-photo.jpg"
                      alt="@shadcn"
                      className="object-cover aspect-[1] "
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg font-bold mt-2">Kris Senanu</h2>
                  <p className="text-xs text-gray-600">General Partner</p>
                </div>
                <div className="col-span-2 flex flex-col items-center justify-center mx-6 my-2">
                  <Avatar className="h-36 w-36">
                    <AvatarImage
                      src="/images/ishmael-comic.png"
                      alt="@shadcn"
                      className="object-cover aspect-[1] "
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg font-bold mt-2">Ishmael Diaw</h2>
                  <p className="text-xs text-gray-600">General Partner</p>
                </div>
              </div>
            </div>

            <div className="lg:hidden col-span-12 flex flex-col item-center justify-center p-6 text-center">
              <div className="flex lg:hidden mt-8 py-2">
                <div className="flex flex-col">
                  <h1 className="text-4xl font-bold text-indigo-700">
                    We invest growth equity to foster global leadership
                    positions
                  </h1>
                  <h1 className="mt-6 text-2xl font-semibold text-gray-600">
                    We have jointly managed US$ 5Bn of AUM
                  </h1>
                  <h1 className="mt-1 text-lg  text-gray-600">
                    Our focus is on Afrocentric late stage technology companies
                    We cross-fertilise human & financial capital, and experience
                    to create value for our portfolio
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
      <div className="m-28"></div>
      <Perspectives />
      <div className="m-28"></div>
      <Footer />
    </div>
  );
}
