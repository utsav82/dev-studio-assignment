import React from "react";
import styles from "@/styles/profile.module.scss";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Header from "@/components/Header";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <Header backLink="/" title="Profile" />

      <div className={styles.profilePicture}>
        <div className={styles.cameraIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>
      </div>

      <div className={styles.formContainer}>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
        />
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
          />
        </div>
        <Input type="email" id="email" name="email" placeholder="Email" />
        <Input type="text" id="street" name="street" placeholder="Street" />
        <select
          id="city"
          name="city"
          defaultValue="City"
          className={styles.select + " form-select"}
        >
          <option disabled>City</option>
          <option>New Delhi</option>
          <option>Patna</option>
        </select>
        <select
          id="district"
          name="district"
          defaultValue="District"
          className={styles.select + " form-select"}
        >
          <option disabled>District</option>
          <option>Lucknow</option>
          <option>Kanpur</option>
        </select>
      </div>

      <div className={styles.buttonContainer}>
        <Button href="/" text="Cancel" className={styles.cancelButton} />
        <Button href="/login" text="Save" className={styles.saveButton} />
      </div>
    </div>
  );
};

export default ProfilePage;
