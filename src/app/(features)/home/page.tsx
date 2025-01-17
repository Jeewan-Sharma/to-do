// "use client";
// import { useLoading } from "@/app/context/LoaderContext";
import React from "react";
import Header from "./Header";
const Home = () => {
  // const { setIsLoading } = useLoading();

  // useEffect(() => {
  //   setIsLoading(true);
  // }, [setIsLoading]);
  return (
    <div>
      <Header />
      <div className="flex">
        <div>sidebar</div>
        <div>Home</div>
      </div>
    </div>
  );
};

export default Home;
