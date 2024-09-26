// import Sidebar from "@/components/Sidebar";
import { SidebarDemo } from "./SidebarDemo";
import { cn } from "../lib/utils";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

const Dashboard = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div
      className={cn(
        "bg-[#2c2c29] text-white flex flex-col md:flex-row flex-1   w-full overflow-hidden",
        "h-screen"
      )}
    >
      {" "}
      {/* <Sidebar /> */}
      <SidebarDemo />
      <div className=" flex flex-1 flex-col items-center  px-4 bg-background mt-20">
        <div>
          <div>
            <h1 className="mb-5 sm:mb-10 text-xl text-center sm:text-5xl text-white ">
              Where knowledge begins
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

export default Dashboard;
