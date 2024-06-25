import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const data = {
    avialableBalance: 500,
    totalExpense: 175,
    transactions: [
      { date: "1717150831365", amount: 45, label: "Pune", type: "expense" },
      { date: "1717150831365", amount: 25, label: "Pune", type: "expense" },
      {
        date: "1717150831365",
        amount: 25,
        label: "Cancellation",
        type: "expense",
      },
      { date: "1717150831365", amount: 100, label: "Topup", type: "topup" },
      { date: "1717150831365", amount: 35, label: "Mumbai", type: "expense" },
    ],
  };
  const { avialableBalance, totalExpense, transactions } = data;

  return (
    <div className="h-screen flex flex-col items-center p-5 space-y-5">
      <Header backLink="/" title="" />

      <div className="w-full flex justify-end items-center">
        <button className="w-[170px] h-[54px] p-2 border border-[#008955] rounded-md text-[#008955]">
          Add Money
        </button>
      </div>

      <div className="w-full flex justify-between my-5 space-x-2">
        <div className="h-[145px] w-[166px] bg-[#E2F5ED] border border-[#08B783] text-[#5A5A5A] rounded-md p-2 flex flex-col justify-center items-center">
          <div className="text-3xl">{`₹${avialableBalance}`}</div>
          <div className="mt-5">Available Balance</div>
        </div>
        <div className="h-[145px] w-[166px] bg-[#E2F5ED] border border-[#08B783] text-[#5A5A5A] rounded-md p-2 flex flex-col justify-center items-center">
          <div className="text-3xl">{`₹${totalExpense}`}</div>
          <div className="mt-5">Total Expense</div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold">Transactions</div>
        <Link href="/" className="text-[#007848]">
          See All
        </Link>
      </div>

      <div className="w-full space-y-4 overflow-scroll">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-gray-300 rounded-md p-4"
          >
            <div className="flex items-center">
              <div
                className="w-[40px] h-[40px] rounded-full mr-2 flex justify-center items-center"
                style={{
                  background:
                    transaction.type === "expense" ? "#FFCDD2" : "#E2F5ED",
                }}
              >
                <img
                  src={transaction.type === "expense" ? "/down.svg" : "/up.svg"}
                  alt=""
                />
              </div>
              <div>
                <div className="font-semibold">{transaction.label}</div>
                <div className="text-sm text-gray-500">
                  {new Date(parseInt(transaction.date)).toLocaleString()}
                </div>
              </div>
            </div>
            <div>
              {transaction.type === "expense" ? "-" : ""}₹
              {transaction.amount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
