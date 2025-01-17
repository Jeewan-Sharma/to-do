"use client";
import React from "react";
import { useLoading } from "@/app/context/LoaderContext";
import Image from "next/image";

const Loader = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-70 z-50 flex justify-center items-center">
          <Image
            alt="LOADING..."
            src="/assets/loader.gif"
            width={250}
            height={250}
            unoptimized
            priority
          />
        </div>
      )}
    </>
  );
};

export default Loader;
