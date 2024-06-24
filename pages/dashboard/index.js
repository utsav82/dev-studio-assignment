import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col items-center p-5 space-y-5">
      <div className="w-full flex items-center justify-between">
        <Link
          href="/"
          className="bg-[#8AD4B5] h-[34px] w-[34px] rounded-md flex items-center justify-center"
        >
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Link>
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
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      </div>
      <div className="w-full flex justify-end items-center">
        <button className="w-[170px] h-[54px] p-2 border border-[#008955] rounded-md text-[#008955]">
          Add Money
        </button>
      </div>
      <div className="w-full flex justify-between my-5 ">
        <button className="h-[145px] w-[166px] bg-[#E2F5ED] border border-[#08B783] text-[#5A5A5A] rounded-md p-2">
          <div className="text-3xl">₹500</div>
          <div className="mt-5">Available Balance</div>
        </button>
        <button className="h-[145px] w-[166px] bg-[#E2F5ED] border border-[#08B783] text-[#5A5A5A] rounded-md p-2">
          <div className="text-3xl">₹200</div>
          <div className="mt-5">Total Expend</div>
        </button>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold">Transactions</div>
        <Link href="/" className="text-[#007848]">
          See All
        </Link>
      </div>

      {/* Transactions List */}
      <div className="w-full space-y-4">
        {["Welton", "Nathsam", "Welton", "Nathsam", "Nathsam"].map(
          (name, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-gray-300 rounded-md p-4"
            >
              <div className="flex items-center ">
                <div
                  className="w-[40px] h-[40px] rounded-full mr-2 flex justify-center items-center"
                  style={{
                    background: name !== "Welton" ? "#E2F5ED" : "#FFCDD2",
                  }}
                >
                  <img
                    src={name === "Welton" ? "/up.svg" : "down.svg"}
                    alt=""
                  />
                </div>
                <div>
                  {" "}
                  <div className="font-semibold">{name}</div>
                  <div className="text-sm text-gray-500">Today at 09:20 am</div>
                </div>
              </div>
              <div>{name === "Welton" ? "-" : ""}₹570.00</div>
            </div>
          )
        )}
      </div>

      <div className="fixed bottom-0 w-full bg-white border-t border-gray-300 text-sm">
        <div className="flex justify-around py-4">
          <Link href="/" className="flex flex-col justify-center items-center">
            <img src="/house.svg" alt="Home" className="w-6 h-6" />
            <div>Home</div>
          </Link>
          <Link
            href="/"
            className="flex flex-col justify-center items-center -ml-5"
          >
            <img src="/heart.svg" alt="Home" className="w-6 h-6" />
            <div>Favourite</div>
          </Link>
          <div className="flex flex-col justify-center items-center -ml-2">
            <div
              className="absolute -top-10 w-20 h-20 bg-[#08B783] flex justify-center items-center"
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              }}
            >
              <img src="/wallet.svg" alt="Home" className="w-6 h-6" />
            </div>
            <div className="text-[#08B783] mt-8">Wallet</div>
          </div>
          <Link href="/" className="flex flex-col justify-center items-center">
            <img src="/discount.svg" alt="Home" className="w-6 h-6" />
            <div>Offer</div>
          </Link>
          <Link href="/" className="flex flex-col justify-center items-center">
            <img src="/user.svg" alt="Home" className="w-6 h-6" />
            <div>Profile</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
