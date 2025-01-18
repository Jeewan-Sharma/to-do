"use client";

import Icons from "@/app/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((value) => !value);
  };

  return (
    <div className="w-4/5 flex box-shadow-1">
      <div className="w-2/5 bg-[#FEDDC7] p-4 rounded-l-md flex flex-col items-center justify-center">
        <Image alt="Auth" src="/assets/register.png" width={250} height={250} />
        <p className="text-4xl font-bold mt-2">
          <span className="text-primary_color">TO</span>
          <span className="text-secondary_color">DO</span>
        </p>
        <p className="text-sm text-primary_color font-semibold">
          &quot;Plan It, Do It,{" "}
          <span className="text-secondary_color">Done!</span>&quot;
        </p>
      </div>
      <div className="w-3/5 py-5 px-10 rounded-r-md bg-white">
        <p className="text-2xl text-primary_color font-bold">Register</p>
        <p className="text-sm text-gray-700">
          Welcome to <span className="text-primary_color">TO</span>
          <span className="text-secondary_color">DO</span>
        </p>
        <form>
          <div className="grid">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* First Name Input */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Enter your first name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary_color focus:border-primary_color"
                />
              </div>
              {/* Last Name Input */}
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Enter your last name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary_color focus:border-primary_color"
                />
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="my-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary_color focus:border-primary_color"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-primary_color focus:border-primary_color"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-secondary_color focus:outline-none"
              >
                {showPassword ? Icons.eye_off : Icons.eye}
              </button>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary_color text-white py-2 px-4 rounded-lg hover:bg-secondary_color focus:ring-2 focus:ring-primary_color focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        <div className="mt-3 flex items-center justify-center">
          <div className="flex items-center w-full max-w-md">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-4">
          <div className="p-1 cursor-pointer hover:bg-blue-100 rounded-md">
            <p>{Icons.google}</p>
          </div>
          <div className="p-1 cursor-pointer hover:bg-blue-100 rounded-md">
            <p>{Icons.facebook}</p>
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-gray-600">
          Already have an account?&nbsp;
          <Link
            href="login"
            className="text-secondary_color font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
