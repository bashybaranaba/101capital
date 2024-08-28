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
    <div className="flex flex-col items-center justify-center mt-16 mb-16">
      <div className="flex flex-col items-center justify-center  mb-16">
        <h1 className="text-4xl font-bold text-indigo-600 text-center"></h1>
      </div>
      <div className="flex flex-col items-center justify-center px-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6 p-6 bg-indigo-700 rounded-xl">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-white text-sm">
                We are currently experiencing a transformative shift comparable
                to the beginning of the 20th century. The transition from a
                fossil fuel-based society to a green economy is set to drive
                significant changes. These changes will not only impact
                corporate energy use, business models, and skill requirements
                but will also redefine how we build, live, and learn.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 p-6 bg-indigo-700 rounded-xl">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-white text-sm">
                The global energy system and transportation are among the
                largest contributors to emissions. The corporate sector is at
                the forefront of efforts to decarbonize these interconnected
                systems. However, each step forward presents new challenges.
                Anticipating these challenges is crucial for developing a
                smarter, integrated, net-zero transport-energy nexus.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 p-6 bg-indigo-700 rounded-xl">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-white text-sm">
                Harnessing the power of nature to reduce emissions and improve
                our food systems' health is essential to combating global
                warming. The link between climate and health is undeniable, with
                climate change recognized as the most significant public health
                crisis of our time. Success in this area will be measured by
                both the reduction of carbon emissions and the positive impact
                on human lives.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 p-6 bg-indigo-700 rounded-xl">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-white text-sm">
                Accelerating the transition to a green economy requires
                financing solutions and technologies on a large scale. However,
                funders are often hesitant to invest in solutions that have not
                yet proven scalable. To break this impasse, we need to explore
                existing financing options, innovative models, and new
                collaborations between governments and the private sector. It is
                also crucial that this transition is both fair and just.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
