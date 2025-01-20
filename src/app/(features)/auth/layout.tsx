"use client";

import React, { useEffect } from "react";
import "./auth.scss";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/services";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // prevent this route if the user is authenticated
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/home");
    }
  }, [router]);
  return (
    <div className="relative bg-auth min-h-screen justify-center items-center flex">
      <div className="absolute top-0 left-0 w-full h-screen bg-[aliceblue] bg-opacity-50"></div>
      <div className="z-10 flex justify-center items-center w-full ">
        {children}
      </div>
    </div>
  );
}
