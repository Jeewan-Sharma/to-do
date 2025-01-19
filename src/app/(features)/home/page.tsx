"use client";
import React from "react";
import Dashboard from "./Dashboard";

import { useEffect } from "react";
import { isAuthenticated } from "@/app/services/auth.services";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/auth/login");
    }
  }, [router]);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;
