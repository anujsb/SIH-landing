import Versatile from "../../assets/Versatile.svg";
import { logo } from "../../assets";

import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={logo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    title: "Automated Legal Research",
    description:
      "Instantly aggregates and processes case laws, statutes, and legal rules, providing relevant and customized insights for each case.",
  },
  {
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={logo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    title: "Predictive Case Outcomes",
    description:
      "AUses AI and historical data to forecast potential outcomes, helping judges and legal professionals make informed decisions faster.",
  },
  {
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={logo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    title: "Multilingual Support",
    description:
      "Supports multiple languages, ensuring accessibility for courts across different regions of India.",
  },
  {
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={logo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    title: "Customizable for Local Laws",
    description:
      "Ensures the highest standards of data protection, complying with India's legal and privacy regulations for judicial data.",
  },
  {
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={logo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    title: "Data Security & Compliance",
    description:
      "Ensures the highest standards of data protection, complying with India's legal and privacy regulations for judicial data.",
  },
  {
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={logo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    title: "User-Friendly Interface",
    description:
      "Designed for ease of use, offering an intuitive, accessible platform for judges, lawyers, and legal professionals to navigate efficiently.",
  },
];
export function Features() {
  return (
    <div
      id="features"
      className="container mx-auto px-4 my-16 lg:my-32 flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center bg-[#F8F9FA] border border-5black rounded-full px-2 py-1 ">
        <img
          src={Versatile}
          width={15}
          height={15}
          alt="versatile icon"
          className="mr-1"
        />
        <div>Versatile AI assistant</div>
      </div>
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center mt-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
