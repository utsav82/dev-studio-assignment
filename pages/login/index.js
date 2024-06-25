import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/login.module.scss";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Input from "@/components/Input";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Header backLink="/profile" title="" />

      <div className={styles.title}>
        Sign up with your email or phone number
      </div>

      <div className={styles.formContainer}>
        <Input type="text" id="name" name="name" placeholder="Name" />
        <Input type="email" id="email" name="email" placeholder="Email" />

        <div className={styles.phoneInput}>
          <img src="india.png" alt="India Flag" className={styles.flag} />
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
          <div className={styles.divider}></div>
          <span className={styles.countryCode}>+91</span>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Your Mobile Number"
            style={{ minWidth: "300px" }}
          />
        </div>

        <select
          id="gender"
          name="gender"
          defaultValue="Gender"
          className={styles.select + " form-select"}
        >
          <option disabled>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <div className={styles.termsContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#08B783"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            height={24}
            width={24}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <p>
            By signing up, you agree to the{" "}
            <span className={styles.termsLink}>Terms of service</span> and{" "}
            <span className={styles.termsLink}>Privacy policy</span>.
          </p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          href="/dashboard"
          text="Sign up"
          className={styles.signupButton}
        />
      </div>

      <div className={styles.divider}>
        <div className={styles.line}></div>
        <span className={styles.text}>or</span>
        <div className={styles.line}></div>
      </div>

      <div className={styles.socialButtonsContainer}>
        <div className={styles.socialButton}>
          <Image
            src={"gmail.svg"}
            height={100}
            width={100}
            style={{ width: "20px", marginRight: "10px" }}
            alt="Gmail"
          />
          Sign up with Gmail
        </div>

        <div className={styles.socialButton}>
          <img
            src={"/Facebook.png"}
            style={{ width: "24px", marginRight: "10px" }}
            alt="Facebook"
          />
          Sign up with Facebook
        </div>

        <div className={styles.socialButton}>
          <img
            src={"/Apple.png"}
            style={{ width: "24px", marginRight: "10px" }}
            alt="Apple"
          />
          Sign up with Apple
        </div>
      </div>

      <p className={styles.footer}>
        Already have an account?
        <Link href="/login" className={styles.signinLink}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
