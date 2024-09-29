import { SidebarDemo } from "../demo/SidebarDemo";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Dashboard = () => {
  return (
    <div className="bg-[#faf9f8] text-black flex flex-col md:flex-row w-full min-h-screen">
      <SidebarDemo />
      <div className="flex flex-1 flex-col w-full">
        <div className="m-4 w-full">
          <BentoGrid className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
  },
  {
    title: "Cases By Category",
    description: "description",
    header: <Skeleton />,
  },
  {
    title: "Daily Cases",
    description: "Go to columns for details.",
    header: <Skeleton />,
  },
  {
    title: "Summary",
    description: "description",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "Total Cases",
    description: "3,192",
    header: <Skeleton />,
  },
];
