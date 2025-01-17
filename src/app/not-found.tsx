import Image from "next/image";
import React from "react";
import Button from "@/app/components/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="wrapper bg-[#fffbf7] min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end p-0 lg:pr-10">
        <p className="text-4xl text-gray-800 font-snap-ITC">
          Oops, Wrong Turn...
        </p>
        <p className="text-gray-600 mt-5 w-full lg:w-2/3">
          Looks like you have wondered off the beaten path, Our team is working
          to get you back on track and find what you&apos;re looking for.
        </p>
        <Link href="/home" className="mt-5">
          <Button name="Back to Home" type="btn-primary" />
        </Link>
      </div>
      <div className="w-screen lg:w-1/2 flex justify-center lg:justify-start">
        <Image
          alt="404"
          src="/assets/broken-robot.png"
          height={700}
          width={700}
          priority
          className="w-screen lg:w-2/3"
        />
      </div>
    </div>
  );
};

export default NotFound;
