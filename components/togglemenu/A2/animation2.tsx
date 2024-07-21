import React, { useState } from "react";
import styles from "./animation2.module.css"; // Adjust the path as needed

const Animation2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="checkbox"
        id="checkbox2"
        className={styles.checkbox2}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor="checkbox2"
        className={`${styles.toggle} ${styles.toggle2}`}
      >
        <div className={`${styles.barss} ${styles.bar4}`}></div>
        <div className={`${styles.barss} ${styles.bar5}`}></div>
        <div className={`${styles.barss} ${styles.bar6}`}></div>
      </label>
    </div>
  );
};

export default Animation2;
