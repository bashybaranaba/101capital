import Image from "next/image";
import Link from "next/link";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Footer() {
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

  return (
    <div className="border-t p-16">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Vercel Logo"
              width={60}
              height={60}
              className=""
            />
            <Image
              src="/images/101capital.png"
              alt="Vercel Logo"
              width={150}
              height={150}
            />
            <p className="text-gray-500 ml-1 text-xs mt-2">
              {" "}
              © 2024 101 Capital Partners
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 m-2 flex flex-col items-center justfy-center">
          <h3 className="font-semibold text-gray-700 mb-2">Contact us</h3>
          <div className="flex flex-col">
            <div className="flex text-gray-700 items-center justfy-center">
              <CallIcon className="h-4 w-4 mr-1" />
              <p className="text-gray-500 ml-1 text-sm "> +254 0792123456</p>
            </div>

            <div className=" flex text-gray-700 mt-2">
              <EmailOutlinedIcon className="h-5 w-5 mr-1" />
              <p className="text-gray-500 ml-1 text-sm ">
                101capital2email.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="flex">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                className="text-gray-700"
                href={social.href}
                target="_blank"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
