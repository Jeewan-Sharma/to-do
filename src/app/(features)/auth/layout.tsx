import React from "react";
import "./auth.scss";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-auth h-screen justify-center items-center flex">
      <div className="absolute top-0 left-0 w-full h-screen bg-[aliceblue] bg-opacity-50"></div>
      <div className="z-10 flex justify-center items-center w-full h-screen">
        {children}
      </div>
    </div>
  );
}
