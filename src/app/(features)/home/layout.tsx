"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  useEffect(() => {
    const checkIfMobileView = () => {
      if (window.innerWidth <= 1024) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    checkIfMobileView(); // Check on mount
    window.addEventListener("resize", checkIfMobileView); // Listen for resizing

    return () => window.removeEventListener("resize", checkIfMobileView); // Cleanup listener
  }, []);

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <div className="absolute left-0 lg:relative">
          <SideNav isSidebarVisible={isSidebarVisible} />
        </div>
        <div className="w-full h-[calc(100vh-5rem)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
