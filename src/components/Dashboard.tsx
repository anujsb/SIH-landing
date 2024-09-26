// import Sidebar from "@/components/Sidebar";
import { SidebarDemo } from "./SidebarDemo";
// import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

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
    <div className="bg-[#2c2c29] text-white flex flex-col md:flex-row  w-full h-full">
      {" "}
      {/* <Sidebar /> */}
      <SidebarDemo />
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        <div className="h-[40rem] flex flex-1 flex-col items-center  px-4 bg-background mt-20 w-full">
          <h1 className="mb-5 sm:mb-10 text-xl text-center sm:text-xl text-white ">
            Where knowledge begins
          </h1>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <div className=" m-4 w-full">
          <BentoGrid className="max-w-4xl mt-10">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={i === 3 || i === 6 ? "md:col-span-2 " : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div> */
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-700 to-neutral-600 "></div>
);
const items = [
  {
    title: "??",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "??",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "??",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "??",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "??",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "??",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "??",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
