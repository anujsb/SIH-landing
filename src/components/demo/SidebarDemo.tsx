import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { motion } from "framer-motion";
import { logo } from "../../assets";
import { Dashboard, Search, Chat } from "../../assets";

export function SidebarDemo() {
  const links = [
    {
      label: "Search",
      href: "/demo",
      icon: <img src={Search} alt="Search logo" className="h-7 w-7 mr-2" />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <img src={Dashboard} alt="Dashboard logo" className="h-7 w-7 mr-2" />,
    },
    {
      label: "Chat",
      href: "/chat",
      icon: <img src={Chat} alt="Chat logo" className="h-7 w-7 mr-2" />,
    },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current location

  return (
    <div className="relative">
      {/* Button to toggle the sidebar for mobile view */}
      <button
        className="absolute top-4 left-4 md:hidden z-30 bg-transparent dark:bg-transparent"
        onClick={() => setOpen(!open)}
      >
        <div className="space-y-2">
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </div>
      </button>

      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-white border-r border-[#aa9b93] shadow-2xl rounded-r-xl">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={`${
                    location.pathname === link.href
                      ? "bg-[#fcf0eb] px-1 rounded-lg"
                      : "bg-[#faf9f8] px-1  rounded-lg"
                  }`} // Apply the active class if the current route matches
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Nyay Sutra",
                href: "#",
                icon: (
                  <img
                    src={logo}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black text-3xl"
      >
        Nyay Sutra
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="#"
      className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20"
    >
      <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
