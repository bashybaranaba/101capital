import Image from "next/image";
import Link from "next/link";
import { Factory, LeafyGreen, BatteryCharging, Sprout } from "lucide-react";

const perspectivesData = [
  {
    icon: Factory,
    title: "The New Industrial Revolution",
    image: "/images/dawn.png",
    description:
      "We are witnessing a major shift from a fossil fuel-based society to a green economy. This transformation will redefine corporate energy use, business models, and required skills, as well as how we build, live, and learn.",
  },
  {
    icon: BatteryCharging,
    title: "Energy & Transport Transition",
    image: "/images/basigo-kenya-built-in-kenya.jpg",
    description:
      "Global energy and transportation are among the largest emitters, and decarbonizing these systems is crucial. The corporate sector plays a key role, but new challenges arise with each step forward. A smarter, integrated net-zero approach is essential to navigate these challenges.",
  },
  {
    icon: LeafyGreen,
    title: "Nature, Food, and Health",
    image: "/images/green.png",
    description:
      "Nature has the power to reduce emissions and restore the health of our food systems. Climate change, the biggest public health crisis of our time, is inextricably linked to these areas. Success will be measured by both emission reductions and the impact on human lives.",
  },
  {
    icon: Sprout,
    title: "Leadership and Green Growth",
    image: "/images/ishmael.png",
    description:
      "To speed up the transition to a green economy, large-scale financing of solutions and technologies is needed. Overcoming hesitation to fund scalable solutions requires exploring new finance models and partnerships, ensuring a fair and just transition.",
  },
];

export default function Perspectives() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-20 mb-16">
        <div className="col-span-12 lg:col-span-7 p-6 bg-indigo-700 lg:rounded-r-3xl">
          <div className="flex flex-col items-cernter justify-center lg:px-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-white lg:text-left text-center">
              Perspectives
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 mb-10">
        <div className="container flex flex-col items-center justify-center px-8lg:px-16">
          <div className="grid grid-cols-12 gap-4">
            {perspectivesData.map(
              ({ icon: Icon, title, description, image }, index) => (
                <div
                  key={index}
                  className="col-span-12 lg:col-span-6  border border-indigo-500 rounded-3xl"
                >
                  <div className="grid grid-cols-12">
                    <div className="hidden lg:flex lg:col-span-4">
                      <Image
                        src={image ?? ""}
                        alt={title}
                        width={200}
                        height={600}
                        className="rounded-l-3xl object-cover aspect-[5/7]"
                      />
                    </div>
                    <div className="col-span-12 lg:col-span-8 p-6">
                      <div className="flex flex-col ">
                        <Icon className="h-12 w-12 text-teal-500" />
                        <h1 className=" text-2xl font-bold mb-2 text-indigo-500">
                          {title}
                        </h1>
                        <p className=" text-sm text-gray-500 ">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
