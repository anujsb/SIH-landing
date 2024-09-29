import { useState } from "react";
import { SidebarDemo } from "../SidebarDemo";
import { useNavigate } from "react-router-dom";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

const Demo = () => {
  const placeholders = [
    "Show recent case laws on breach of contract.",
    "Predict the outcome for a commercial arbitration case.",
    "Find relevant precedents for intellectual property disputes.",
    "What are the statutory provisions for insolvency in India?",
    "Summarize key judgments from Delhi High Court in 2023.",
    "Provide a list of laws related to e-commerce regulations.",
    "Translate this judgment to Hindi.",
    "Show historical trends for patent infringement cases.",
    "Find the latest rules on data privacy compliance.",
    "Compare rulings on breach of contract across different states.",
  ];

  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted", inputValue);

    setTimeout(() => {
      navigate("/chat", { state: { input: inputValue } });
    }, 1000);
  };
  return (
    <div>
      <div className="bg-[#faf9f8] text-black flex md:flex-row  w-full min-h-screen">
        {" "}
        <SidebarDemo />
        <div className="flex flex-1 flex-col items-center justify-center w-full">
          <div className="h-[40rem] flex flex-1 flex-col items-center  px-4 bg-background mt-20 w-full">
            <h1 className="mb-7 text-3xl text-center text-black ">
              Search Legal Insights in Seconds...
            </h1>
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
