"use client";

import Icons from "@/app/components/Icons";
import { useLoading } from "@/app/context/LoaderContext";
import { getCurrentAuthUser, logout } from "@/app/services";
import { IUserDetails } from "@/app/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const handleLogout = () => {
  logout();
  window.location.reload();
};

const SideNav = () => {
  const [me, setMe] = useState<IUserDetails | null>(null);
  const [ApiError, setApiError] = useState<string | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const userData = await getCurrentAuthUser();
        setMe(userData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          // Using the message from the API error or fallback to a default message
          setApiError(
            error.message || "Something went wrong. Please try again."
          );
        } else {
          setApiError("Something went wrong. Please try again.");
          console.error(ApiError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [setIsLoading, ApiError]);

  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <div
        className={`bg-primary_color h-[calc(100vh-5rem)] py-3 px-6 relative flex flex-col gap-2 text-white ${
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

        <div className="flex flex-col items-center mt-2">
          <div className={`${isCollapsed ? "" : "hidden"} relative w-8 h-8`}>
            <Image
              src="/assets/login.png"
              alt="Profile Picture"
              className="rounded-full border-2 border-white"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className={`${isCollapsed ? "hidden" : ""}  relative w-20 h-20`}>
            <Image
              src="/assets/login.png"
              alt="Profile Picture"
              className="rounded-full border-2 border-white"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p
            className={`${
              isCollapsed ? "hidden" : ""
            } mt-1 text-md font-semibold text-white`}
          >
            {me?.firstName} {me?.lastName}
          </p>
          <p className={`${isCollapsed ? "hidden" : ""} text-sm text-white`}>
            {me?.email}
          </p>
        </div>

        <div className="relative flex gap-3 items-center cursor-pointer border-1 rounded-md mt-1 p-1 border-primary_color bg-white text-primary_color hover:border-white active:bg-white active:text-primary_color">
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
