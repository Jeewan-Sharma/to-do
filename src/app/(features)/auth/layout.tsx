import React from "react";
// import './auth.css';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-red-100 min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
