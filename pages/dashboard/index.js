import Link from "next/link";
import Header from "@/components/Header";
import Card from "@/components/Card";
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
      <Header backLink="/login" title="" />

      <div className="w-full flex justify-end items-center">
        <button className="w-[170px] h-[54px] p-2 border border-[#008955] rounded-md text-[#008955]">
          Add Money
        </button>
      </div>

      <div className="w-full flex justify-between my-5 space-x-2">
        <Card amount={`₹${avialableBalance}`} text="Available Balance" />
        <Card amount={`₹${totalExpense}`} text="Total Expense" />
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
                  {formatDate(transaction.date)}
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

function formatDate(dateString) {
  const transactionDate = new Date(parseInt(dateString));
  const now = new Date();

  if (
    transactionDate.getDate() === now.getDate() &&
    transactionDate.getMonth() === now.getMonth() &&
    transactionDate.getFullYear() === now.getFullYear()
  ) {
    const hours = transactionDate.getHours();
    const minutes = transactionDate.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12; 

    return `Today at ${formattedHours}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;
  } else {
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return transactionDate.toLocaleDateString("en-US", options);
  }
}

export default Dashboard;
