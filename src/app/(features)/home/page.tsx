// "use client";
// import { useLoading } from "@/app/context/LoaderContext";
import React from "react";
import Dashboard from "./Dashboard";
const Home = () => {
  // const { setIsLoading } = useLoading();

  // useEffect(() => {
  //   setIsLoading(true);
  // }, [setIsLoading]);
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;
