"use client";
import Icons from "@/app/components/Icons";
import { validateEmail, validatePassword } from "@/app/utils/FormValidation";
import Image from "next/image";
// import { useLoading } from "@/app/context/LoaderContext";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      console.log("Form Submitted", formData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((value) => !value);
  };

  // const { setIsLoading } = useLoading();
  // useEffect(() => {
  //   setIsLoading(true);
  // }, [setIsLoading]);

  return (
    <div className="w-full md:w-2/3 flex flex-col lg:flex-row box-shadow-1">
      <div className="w-full lg:w-1/2 bg-[#FEDDC7] p-4 rounded-none lg:rounded-l-md flex flex-col items-center justify-center">
        <Image alt="Auth" src="/assets/login.png" width={300} height={300} />
        <p className="text-4xl font-bold mt-2">
          <span className="text-primary_color">TO</span>
          <span className="text-secondary_color">DO</span>
        </p>
        <p className="text-sm text-primary_color font-semibold">
          &quot;Plan It, Do It,{" "}
          <span className="text-secondary_color">Done!</span>&quot;
        </p>
      </div>
      <div className="w-full lg:w-1/2 py-5 px-10 rounded-r-md bg-white">
        <p className="text-2xl text-primary_color font-bold">Login</p>
        <p className="text-sm text-gray-700">
          Welcome back to <span className="text-primary_color">TO</span>
          <span className="text-secondary_color">DO</span>
        </p>

        <form onSubmit={handleSubmit}>
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
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary_color focus:border-primary_color"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          {/* Password Input */}
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mb-4 mt-1 ">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-primary_color focus:border-primary_color"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="w-auto px-3 py-2 text-sm font-medium text-gray-600 hover:text-secondary_color focus:outline-none shrink-0"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? Icons.eye_off : Icons.eye}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </div>
          {/* Remember Me */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-primary_color border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link
              href="#"
              className="text-sm text-primary_color hover:underline"
            >
              Forgot Password?
            </Link>
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
          Don&apos;t have an account?&nbsp;
          <Link
            href="register"
            className="text-secondary_color font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
