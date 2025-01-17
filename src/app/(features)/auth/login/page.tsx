"use client";
// import { useLoading } from "@/app/context/LoaderContext";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  // const { setIsLoading } = useLoading();

  // useEffect(() => {
  //   setIsLoading(true);
  // }, [setIsLoading]);

  return (
    <div>
      <p className="text-red-700">welcone to Login Page</p>
      <Link href="register" className="mt-10">
        Go to register
      </Link>
    </div>
  );
};

export default LoginPage;
