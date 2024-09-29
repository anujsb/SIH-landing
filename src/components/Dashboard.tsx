// import Sidebar from "@/components/Sidebar";
import { SidebarDemo } from "./SidebarDemo";
// import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Dashboard = () => {


  return (
    <div className="bg-[#faf9f8] text-black flex md:flex-row  w-full min-h-screen">
      {" "}
      <SidebarDemo />
      <div className="flex flex-1 flex-col w-full">
        <div className=" m-4 w-full">
          <BentoGrid className="mt-10">
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 "></div>
);
const items = [
  {
    title: (
      <p>
        Total Cases <span className="text-blue-600 ml-2">75,826</span>
      </p>
    ),
    description: "description",
    header: <Skeleton />,
    //   icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cases By Category",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Daily Cases",
    description: "Go to columns for details.",
    header: <Skeleton />,
    //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Summary",
    description: "description",
    header: <Skeleton />,
    //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Total Cases",
    description: "3,192",
    header: <Skeleton />,
    //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "??",
  //   description: "description",
  //   header: <Skeleton />,
  // },
  // {
  //   title: "??",
  //   description: "description",
  //   header: <Skeleton />,
  // },
];
