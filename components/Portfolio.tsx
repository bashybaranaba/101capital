import Image from "next/image";
import Link from "next/link";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Portfolio() {
  const socialLinks = [
    {
      href: "",
      icon: <XIcon className="h-6 w-6 m-2" />,
    },
    {
      href: "",
      icon: <InstagramIcon className="h-6 w-6 m-2" />,
    },
    {
      href: "",
      icon: <FacebookIcon className="h-6 w-6 m-2" />,
    },
    {
      href: "",
      icon: <LinkedInIcon className="h-6 w-6 m-2" />,
    },
  ];

  const portfolioItemsR1 = [
    {
      title: "Portfolio item 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      image: "/images/mamarocks.jpg",
    },
    {
      title: "Titan Air Mobility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      image: "/images/titan.png",
    },
    {
      title: "Portfolio item 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      image: "/images/twende.jpg",
    },
    {
      title: "Portfolio item 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      image: "/images/hustlesasa.png",
    },
  ];

  const portfolioItemsR2 = [
    {
      title: "Portfolio item 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      image: "/images/basi.png",
    },
    {
      title: "Portfolio item 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      image: "/images/logo.png",
    },
    {
      title: "Portfolio item 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      image: "/images/logo.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-24 mb-16">
      <h1 className="text-4xl font-bold text-indigo-600 text-center">
        Our portfolio
      </h1>
      <h1 className="mt-1 text-lg  text-gray-600 text-center">
        Our portfolio spans across Fintech Mobility Energy Food Health
        Entertainment and more
      </h1>
      <div className="container flex items-center justify-center mt-10 mb-10">
        {portfolioItemsR1.map((item, index) => (
          <div key={index} className="">
            <div className="bg-white p-4">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-lg m-2"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="container flex items-center justify-center mt-0">
        {portfolioItemsR2.map((item, index) => (
          <div key={index} className="">
            <div className="bg-white p-4">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-lg m-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
