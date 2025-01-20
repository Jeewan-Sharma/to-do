"use client";

import { useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <div className="absolute left-0 lg:relative">
          {isSidebarVisible && <SideNav />}
        </div>
        <div className="w-full h-[calc(100vh-5rem)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
