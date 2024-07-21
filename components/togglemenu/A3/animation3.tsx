import React, { useState } from "react";
import styles from "./animation3.module.css"; // Adjust the path as needed

const Animation3 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center">
      <input
        className={styles.checkIcon}
        id="check-icon"
        name="check-icon"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className={styles.iconMenu} htmlFor="check-icon">
        <div className={`${styles.bar} ${styles.bar1}`}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </label>
    </div>
  );
};

export default Animation3;
