import React from "react";
import { HomeIcon, FolderIcon, CreditCardIcon, CogIcon } from "lucide-react";
import profile from "../assets/images/profile.png";
const Sidebar = () => {
  return (
    <div className="max-w-64 bg-[#15624C] text-white min-h-screen flex-1">
      <div className="p-4">
        <h4 className="font-bold text-white text-[28px]">
          <a href="/">
            {" "}
            Agro<span className="text-[#1EB45E]">Invest</span>
          </a>
        </h4>
      </div>
      <nav className="mt-8 px-4 space-y-[6px]">
        <SidebarLink
          icon={<HomeIcon className="w-6 h-6" />}
          text="Dashboard"
          path="/createProject"
        />
        <SidebarLink
          icon={<FolderIcon className="w-6 h-6" />}
          text="Project management"
          active
          path="/browseProjects"
        />
        <SidebarLink
          icon={<CreditCardIcon className="w-6 h-6" />}
          text="Financial services"
          path="#"
        />
      </nav>
      <div className="absolute bottom-0 w-64 p-4">
        <SidebarLink
          path="#"
          icon={<CogIcon className="w-6 h-6" />}
          text="Settings"
        />
        <div className="flex items-center mt-4">
          <img src={profile} alt="User" className="rounded-full w-10 h-10" />
          <div className="ml-3">
            <p className="font-semibold">David Eyo</p>
            <p className="text-sm">@thealisoneyo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, text, active, path }) => {
  return (
    <a
      href={path}
      className={`flex items-center px-2 py-2  rounded-lg ${
        active ? "bg-white/20" : "hover:bg-white/20"
      }`}
    >
      <span className={` ${active ? "text-[#1EB45E]" : "text-white"}`}>
        {icon}
      </span>
      <span className="ml-3">{text}</span>
    </a>
  );
};

export default Sidebar;
