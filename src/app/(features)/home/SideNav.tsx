import Icons from "@/app/components/Icons";
import { logout } from "@/app/services/auth.services";
import React, { useState } from "react";

const handleLogout = () => {
  logout();
  window.location.reload();
};

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <div
        className={`bg-primary_color h-[calc(100vh-5rem)] py-3 px-6 relative flex flex-col gap-4 text-white ${
          isCollapsed ? "w-auto" : "w-64"
        }`}
      >
        {/* Collapse Button */}
        <div className="absolute top-4 right-0 -mr-3">
          <div className={`${isCollapsed ? "hidden" : ""}`}>
            <button
              onClick={() => setIsCollapsed(true)}
              className="cursor-pointer bg-primary_color rounded-full"
            >
              {Icons.contract_left}
            </button>
          </div>
          <div className={`${isCollapsed ? "" : "hidden"}`}>
            <button
              onClick={() => setIsCollapsed(false)}
              className="cursor-pointer bg-primary_color rounded-full"
            >
              {Icons.expand_right}
            </button>
          </div>
        </div>
        {/* sidebar */}
        <div className="relative flex gap-3 items-center cursor-pointer border-1 rounded-md p-1 border-primary_color bg-white text-primary_color hover:border-white active:bg-white active:text-primary_color">
          <div>{Icons.dashboard}</div>
          <div className={`${isCollapsed ? "hidden" : ""}`}>Dashboard</div>
        </div>
        <div className="flex gap-3 items-center cursor-pointer border-1 rounded-md p-1 border-primary_color hover:border-white active:bg-white active:text-primary_color">
          <div>{Icons.important}</div>
          <div className={`${isCollapsed ? "hidden" : ""}`}>Important</div>
        </div>
        <div className="flex gap-3 items-center cursor-pointer border-1 rounded-md p-1 border-primary_color hover:border-white active:bg-white active:text-primary_color">
          <div>{Icons.profile}</div>
          <div className={`${isCollapsed ? "hidden" : ""}`}>Profile</div>
        </div>
        <div className="flex gap-3 items-center cursor-pointer border-1 rounded-md p-1 border-primary_color hover:border-white active:bg-white active:text-primary_color">
          <div>{Icons.settings}</div>
          <div className={`${isCollapsed ? "hidden" : ""}`}>Settings</div>
        </div>
        <div className="flex gap-3 items-center cursor-pointer border-1 rounded-md p-1 border-primary_color hover:border-white active:bg-white active:text-primary_color">
          <div>{Icons.help}</div>
          <div className={`${isCollapsed ? "hidden" : ""}`}>Help</div>
        </div>
        <div
          onClick={() => handleLogout()}
          className="absolute bottom-2 w-3/4 flex gap-3 items-center cursor-pointer border-1 rounded-md p-1 border-primary_color hover:border-white active:bg-white active:text-primary_color"
        >
          <div>{Icons.logout}</div>
          <div className={`${isCollapsed ? "hidden" : ""}`}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
