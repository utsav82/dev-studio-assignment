import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Input from "@/components/Input";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-5 space-y-8 relative">
      <Header backLink="/profile" title="" />

      <div className="text-2xl pt-4">
        Sign up with your email or phone number
      </div>

      <div className="w-full max-w-md space-y-4">
        <Input type="text" id="name" name="name" placeholder="Name" />
        <Input type="email" id="email" name="email" placeholder="Email" />

        <div className="relative flex items-center w-full border border-gray-300 rounded-md px-4 h-[60px]">
          <img
            src="india.png"
            alt="India Flag"
            className="mr-2 h-6 rounded-md"
          />

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div className="border-r border-gray-300 h-4 mr-2"></div>

          <span className="mr-2">+91</span>

          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Your Mobile Number"
            className="flex-1 block w-full border-none p-2"
          />
        </div>

        <select
          id="gender"
          name="gender"
          defaultValue="Gender"
          className="form-select appearance-none pr-8 bg-no-repeat mt-1 block w-full bg-white border border-gray-300 rounded-md px-4 h-[60px] text-gray-400"
        >
          <option disabled>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#08B783"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>

          <p className="text-sm text-[#B8B8B8]">
            By signing up, you agree to the{" "}
            <span className="text-[#08B783] inline-block">
              Terms of service
            </span>{" "}
            and{" "}
            <span className="text-[#08B783] inline-block">Privacy policy</span>.
          </p>
        </div>
      </div>

      <div className="flex space-x-4 w-full max-w-md">
        <Button
          href="/dashboard"
          text="Sign up"
          className="bg-primary text-white border border-[#008955] rounded-md"
        />
      </div>

      <div className="flex items-center w-full max-w-md">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      <div className="flex w-full flex-col gap-4 max-w-md">
        <div className="w-full border border-gray-300 rounded-md h-[60px] pl-5 flex items-center justify-center">
          <Image
            src={"gmail.svg"}
            height={100}
            width={100}
            className="w-4 mr-2"
            alt="Gmail"
          />{" "}
          Sign up with Gmail
        </div>

        <div className="w-full border border-gray-300 rounded-md h-[60px] pl-5 flex items-center justify-center">
          <Image
            src={"/Facebook.png"}
            height={100}
            width={100}
            className="w-5 mr-2"
            alt="Facebook"
          />{" "}
          Sign up with Facebook
        </div>

        <div className="w-full border border-gray-300 rounded-md h-[60px] pl-5 flex items-center justify-center">
          <Image
            src={"/Apple.png"}
            height={100}
            width={100}
            className="w-5 mr-2"
            alt="Apple"
          />{" "}
          Sign up with Apple
        </div>
      </div>
      <p className="text-[16px] pb-4">
        Already have an account?
        <Link href="/login">
          <span className="text-[#08B783] inline-block ml-2">Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
