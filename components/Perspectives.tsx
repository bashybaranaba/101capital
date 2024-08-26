import Image from "next/image";
import Link from "next/link";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Perspectives() {
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

  const portfolioItems = [
    {
      title: "Portfolio item 1",
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
    {
      title: "Portfolio item 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      image: "/images/logo.png",
    },
  ];

  return (
    <div className="flex flex-col items-cernter justify-center mt-16 mb-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 p-6 bg-indigo-700">
          <div className="flex flex-col items-cernter justify-center lg:px-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-white lg:text-left text-center">
              Perspectives
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-cernter justify-center mt-24 mb-16">
        <p className="text-lg text-gray-600 text-center px-12 lg:px-36">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam urna
          lorem, tempor vitae molestie in, tincidunt id arcu. Phasellus
          ultrices, arcu vitae eleifend efficitur, nunc lectus tincidunt nisl,
          at faucibus purus erat vestibulum nulla. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Sed
        </p>
      </div>
    </div>
  );
}
