"use client";

import { ReactNode } from "react";
import { LoadingProvider } from "@/app/context/LoaderContext";

const LoadingProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <LoadingProvider>{children}</LoadingProvider>;
};

export default LoadingProviderWrapper;
