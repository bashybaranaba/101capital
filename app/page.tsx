import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
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

          <h1 className="text-5xl font-bold text-white">
            PEOPLE-CENTRIC ADVISORS
            <br /> INVESTORS AND OPERATORS
          </h1>

          <button className="mt-8 p-3 bg-indigo-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300">
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="mt-12">
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl font-bold text-black">Our team</h1>

          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="col-span-2 flex flex-col items-center justify-center">
              <Avatar className="h-36 w-36">
                <AvatarImage src="/images/stephane.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-bold mt-2">Stéphane Eboko</h2>
              <p className="text-sm text-gray-600">
                Co-founder and Managing Partner{" "}
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center">
              <Avatar className="h-36 w-36 object-fit aspect-[1] ">
                <AvatarImage src="/images/jessica.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-bold mt-2">Jessica Colaço</h2>
              <p className="text-sm text-gray-600">
                Co-founder and Managing Partner{" "}
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center">
              <Avatar className="h-36 w-36 object-fit aspect-[1] ">
                <AvatarImage src="/images/kris.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-bold mt-2">Kris Senanu</h2>
              <p className="text-sm text-gray-600">General Partner</p>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center">
              <Avatar className="h-36 w-36 object-fit aspect-[1] ">
                <AvatarImage src="/images/ishmael.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="text-lg font-bold mt-2">Ishmael Diaw</h2>
              <p className="text-sm text-gray-600">General Partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
