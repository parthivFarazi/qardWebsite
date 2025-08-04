import React from "react";
import styles from "./SignupFormSection.module.css";

export default function SignupFormSection() {
  return (
    <section id="waitlist" className={styles["signup-section-bg"]}>
      <div className={styles["signup-form-container"]}>
        <h2 className={styles["signup-title"]}>
          ready to optimize your spending?
        </h2>
        <form className={styles["signup-form"]} onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className={styles["signup-input"]}
            placeholder="your name"
            required
          />
          <input
            type="email"
            className={styles["signup-input"]}
            placeholder="your email"
            required
          />
          <input
            type="tel"
            className={styles["signup-input"]}
            placeholder="your phone number"
            required
          />
          <div className={styles["signup-checkbox-row"]}>
            <input
              type="checkbox"
              className={styles["signup-checkbox"]}
              id="sms-consent"
            />
            <label htmlFor="sms-consent" className={styles["signup-checkbox-label"]}>
              i agree to receive text messages about promotions, updates, and product releases.
              message and data rates may apply.
            </label>
          </div>
          <button className={styles["signup-submit-btn"]} type="submit">
            submit
          </button>
        </form>
      </div>
    </section>
  );
}
