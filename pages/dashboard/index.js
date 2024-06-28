import Link from "next/link";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import styles from "@/styles/dashboard.module.scss";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://299e2f7a-3a0f-4d1e-b8f4-8fe77bee946a.mock.pstmn.io/wallet-summary"
  );
  const data = await res.json();
  return { props: { data } };
};

const Dashboard = ({ data }) => {
  const { avialableBalance, totalExpense, transactions } = data;

  return (
    <div className={styles.container}>
      <Header backLink="/login" title="" />
      <div className="w-full flex justify-end items-center">
        <button className={styles.addMoneyButton}>Add Money</button>
      </div>
      <div className={styles.cardContainer}>
        <Card amount={`₹${avialableBalance}`} text="Available Balance" />
        <Card amount={`₹${totalExpense}`} text="Total Expense" />
      </div>
      <div className={styles.transactionHeader}>
        <div className={styles.transactionHeaderTitle}>Transactions</div>
        <Link href="/" className={styles.transactionHeaderLink}>
          See All
        </Link>
      </div>
      <div className={styles.transactionList}>
        {transactions &&
          transactions.map((transaction, index) => (
            <div key={index} className={styles.transactionItem}>
              <div className={styles.transactionItemLeft}>
                <div
                  className={`${styles.transactionItemIcon} ${
                    transaction.type === "expense"
                      ? styles.transactionItemIconExpense
                      : styles.transactionItemIconTopup
                  }`}
                >
                  <img
                    src={
                      transaction.type === "expense" ? "/down.svg" : "/up.svg"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <div className={styles.transactionItemLabel}>
                    {transaction.label}
                  </div>
                  <div className={styles.transactionItemDate}>
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
