"use client";

import Icons from "@/app/components/Icons";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNumber,
} from "@/app/utils/FormValidation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    const firstNameError = validateName(formData.firstName);
    const lastNameError = validateName(formData.lastName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhoneNumber(formData.phone);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
      phone: phoneError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !phoneError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      console.log("Form Submitted", formData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((value) => !value);
  };

  return (
    <div className="w-full md:w-4/5 flex flex-col lg:flex-row box-shadow-1">
      <div className="w-full lg:w-2/5 bg-[#FEDDC7] p-4 rounded-none lg:rounded-l-md flex flex-col items-center justify-center">
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
      <div className="w-full lg:w-3/5 py-5 px-10 rounded-r-md bg-white">
        <p className="text-2xl text-primary_color font-bold">Register</p>
        <p className="text-sm text-gray-700">
          Welcome to <span className="text-primary_color">TO</span>
          <span className="text-secondary_color">DO</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid my-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* First Name Input */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary_color focus:border-primary_color"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>
              {/* Last Name Input */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary_color focus:border-primary_color"
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>
          <div className="grid my-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Email Input */}
              <div>
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
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary_color focus:border-primary_color"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary_color focus:border-primary_color"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid my-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-1 overflow-hidden">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 focus:outline-none focus:ring-primary_color focus:border-primary_color"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="w-auto px-3 py-2 text-sm font-medium text-gray-600 hover:text-secondary_color focus:outline-none shrink-0"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? Icons.eye_off : Icons.eye}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500">{errors.password}</p>
                )}
              </div>
              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg mt-1 overflow-hidden">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 focus:outline-none focus:ring-primary_color focus:border-primary_color"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="w-auto px-3 py-2 text-sm font-medium text-gray-600 hover:text-secondary_color focus:outline-none shrink-0"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? Icons.eye_off : Icons.eye}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary_color text-white py-2 px-4 rounded-lg hover:bg-secondary_color focus:ring-2 focus:ring-primary_color focus:ring-opacity-50"
          >
            Register
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
