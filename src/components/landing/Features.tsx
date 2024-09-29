import React from "react";

import smart from "../../assets/Smart.svg";
import Async from "../../assets/Async.svg";
import Question from "../../assets/Question.svg";
import Style from "../../assets/Style.svg";
import Customize from "../../assets/Customize.svg";
import Generate from "../../assets/Generate.svg";
import Versatile from "../../assets/Versatile.svg";

// import { smart, Async, Question, Style, Customize, Generate, Versatile  } from "../assets";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col justify-center bg-[#F8F9FA] hover:bg-[#f4fbff] hover:shadow-xl hover:border-[#8290EB] p-4 border shadow-sm rounded-2xl w-full lg:w-[555px] h-[156px]">
    <div className="flex items-center">
      <div className="p-2 bg-[#EBEDFC] rounded-2xl border mr-4 ">
        <img src={icon} width={25} height={25} alt={`${icon} icon`} />
      </div>
      <h1 className="text-xl mr-4">{title}</h1>
    </div>
    <p className="text-dark-grey font-light mt-4">{description}</p>
  </div>
);

const MoreFeatures = () => {
  const features = [
    {
      icon: smart,
      title: "Automated Legal Research",
      description:
        "Instantly aggregates and processes case laws, statutes, and legal rules, providing relevant and customized insights for each case.",
    },
    {
      icon: Async,
      title: "Predictive Case Outcomes",
      description:
        "AUses AI and historical data to forecast potential outcomes, helping judges and legal professionals make informed decisions faster.",
    },
    {
      icon: Question,
      title: "Multilingual Support",
      description:
        "Supports multiple languages, ensuring accessibility for courts across different regions of India.",
    },
    {
      icon: Style,
      title: "Customizable for Local Laws",
      description:
        "Ensures the highest standards of data protection, complying with India's legal and privacy regulations for judicial data.",
    },
    {
      icon: Customize,
      title: "Data Security & Compliance",
      description:
        "Ensures the highest standards of data protection, complying with India's legal and privacy regulations for judicial data.",
    },
    {
      icon: Generate,
      title: "User-Friendly Interface",
      description:
        "Designed for ease of use, offering an intuitive, accessible platform for judges, lawyers, and legal professionals to navigate efficiently.",
    },
  ];

  return (
    <div
      id="features"
      className="container mx-auto px-4 my-16 lg:my-32 flex flex-col items-center justify-center"
    >
      <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center">
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
        <h1 className="my-6 text-2xl lg:text-4xl">
          Beyond just a legal Search engine
        </h1>
        {/* <p className="text-dark-grey font-light">
          Ellipsis functions as an AI teammate adept at answering questions,
          crafting release notes, developing features, and resolving build
          issues.
        </p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreFeatures;
