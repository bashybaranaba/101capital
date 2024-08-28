import Image from "next/image";
import Link from "next/link";
import { Factory, LeafyGreen, BatteryCharging, Sprout } from "lucide-react";

const perspectivesData = [
  {
    icon: Factory,
    title: "The New Industrial Revolution",
    description:
      "We are currently experiencing a transformative shift comparable to the beginning of the 20th century. The transition from a fossil fuel-based society to a green economy is set to drive significant changes. These changes will not only impact corporate energy use, business models, and skill requirements but will also redefine how we build, live, and learn.",
  },
  {
    icon: BatteryCharging,
    title: "The Energy and Transport Transition",
    description:
      "The global energy system and transportation are among the largest contributors to emissions. The corporate sector is at the forefront of efforts to decarbonize these interconnected systems. However, each step forward presents new challenges. Anticipating these challenges is crucial for developing a smarter, integrated, net-zero transport-energy nexus.",
  },
  {
    icon: LeafyGreen,
    title: "Nature, Food Systems, and Health",
    description:
      "Harnessing the power of nature to reduce emissions and improve our food systems' health is essential to combating global warming. The link between climate and health is undeniable, with climate change recognized as the most significant public health crisis of our time. Success in this area will be measured by both the reduction of carbon emissions and the positive impact on human lives.",
  },
  {
    icon: Sprout,
    title: "Leadership and Green Growth",
    description:
      "Accelerating the transition to a green economy requires financing solutions and technologies on a large scale. However, funders are often hesitant to invest in solutions that have not yet proven scalable. To break this impasse, we need to explore existing financing options, innovative models, and new collaborations between governments and the private sector. It is also crucial that this transition is both fair and just.",
  },
];

export default function Perspectives() {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <div className="flex flex-col items-center justify-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-600 text-center"></h1>
      </div>
      <div className="flex flex-col items-center justify-center px-16">
        <div className="grid grid-cols-12 gap-4">
          {perspectivesData.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="col-span-12 lg:col-span-6 p-6 bg-indigo-700 rounded-3xl"
            >
              <div className="flex flex-col items-center justify-center">
                <Icon className="h-12 w-12 text-white" />
                <h1 className="text-white text-2xl font-bold mb-2">{title}</h1>
                <p className="text-white text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
