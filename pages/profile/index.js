import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Header from "@/components/Header";

const ProfilePage = () => {
  return (
    <div className="h-screen flex flex-col items-center p-5 space-y-10 relative">
      <Header backLink="/" title="Profile" />

      <div className="relative min-h-[120px] min-w-[120px] bg-gray-300 rounded-full">
        <div className="absolute bottom-1 right-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-md space-y-4">
        <Input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
        />
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
          <span className=" mr-2">+91</span>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Your Mobile Number"
            className="flex-1 block w-full border-none p-2"
          />
        </div>
        <Input type="email" id="email" name="email" placeholder="Email" />
        <Input type="text" id="street" name="street" placeholder="Street" />
        <select
          id="city"
          name="city"
          defaultValue="City"
          className="form-select appearance-none pr-8 bg-no-repeat mt-1 block w-full bg-white border border-gray-300 rounded-md px-4 h-[60px] text-gray-400"
        >
          <option disabled>City</option>
          <option>New Delhi</option>
          <option>Patna</option>
        </select>
        <select
          id="district"
          name="district"
          defaultValue="District"
          className="form-select appearance-none pr-8 bg-no-repeat mt-1 block w-full bg-white border border-gray-300 rounded-md px-4 h-[60px] text-gray-400"
        >
          <option disabled>District</option>
          <option>Lucknow</option>
          <option>Kanpur</option>
        </select>
      </div>

      <div className="flex space-x-4 w-full max-w-md">
        <Button
          href="/"
          text="Cancel"
          className=" border border-[#008955] rounded-md"
        />
        <Button
          href="/login"
          text="Save"
          className="bg-primary text-white border border-[#008955] rounded-md"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
