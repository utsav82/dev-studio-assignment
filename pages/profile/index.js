import React from "react";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="h-screen flex flex-col items-center p-5 space-y-10 relative">
      <div className=" flex justify-center w-full">
        <Link href="/" className="absolute left-5">
          {" "}
          {"< Back"}
        </Link>
        <div className="text-lg">Profile</div>
      </div>

      <div className="relative min-h-[120px] min-w-[120px] bg-gray-300 rounded-full">
        <div className="absolute bottom-1 right-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          className="mt-1 block w-full border border-gray-300 rounded-md h-[60px] pl-5"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-1 block w-full border border-gray-300 rounded-md pl-5 h-[60px]"
        />

        <input
          type="text"
          id="street"
          name="street"
          placeholder="Street"
          className="mt-1 block w-full border border-gray-300 rounded-md pl-5 h-[60px]"
        />

        <select
          id="city"
          name="city"
          defaultValue="City"
          className=" form-select appearance-none pr-8 bg-no-repeat mt-1 block w-full bg-white border border-gray-300 rounded-md px-4 h-[60px] text-gray-400"
        >
          <option disabled>City</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
        </select>

        <select
          id="district"
          name="district"
          defaultValue="District"
          className=" form-select appearance-none pr-8 bg-no-repeat mt-1 block w-full border bg-white border-gray-300 rounded-md px-4 h-[60px] text-gray-400"
        >
          <option disabled>District</option>
          <option>Manhattan</option>
          <option>Brooklyn</option>
          <option>Queens</option>
        </select>
      </div>

      <div className="flex space-x-4 w-full max-w-[450px] pb-4 ">
        <Link
          href={"/"}
          className="flex-1 h-[56px] py-2 px-4 border border-[#008955] rounded-md flex justify-center items-center"
        >
          Cancel
        </Link>
        <Link
          href={"/login"}
          className="flex-1 h-[56px] py-2 px-4 border border-[#008955] rounded-md bg-primary text-white flex justify-center items-center"
        >
          Save
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
