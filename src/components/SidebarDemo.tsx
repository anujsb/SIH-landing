import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
// import {
//   IconArrowLeft,
//   IconBrandTabler,
//   IconSettings,
//   IconUserBolt,
// } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { cn } from "../lib/utils";
import { logo } from "../assets";
import { Dashboard } from "../assets";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/demo",
      icon: <img src={Dashboard} alt="EACC.dev logo" className="h-10 w-30 mr-2 " />,
    },
    {
      label: "?",
      href: "/demo",
      icon: <img src={Dashboard} alt="EACC.dev logo" className="h-10 w-30 mr-2 " />,
    },
    {
      label: "??",
      href: "/demo",
      icon: <img src={Dashboard} alt="EACC.dev logo" className="h-10 w-30 mr-2 " />,
    },
    // {
    //   label: "Logout",
    //   href: "#",
    //   icon: <IconArrowLeft className=" h-5 w-5 flex-shrink-0" />,
    // },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-[#22211d] border-r border-neutral-500 shadow-2xl rounded-r-xl">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "nyay sutra",
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
      className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20"
    >
      <div className="h-5 w-6 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-white text-3xl"
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
      <div className="h-5 w-6  rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
