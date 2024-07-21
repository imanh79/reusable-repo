import React, { useState } from "react";
import styles from "./animation.module.css"; // Adjust the path as needed

const AnimationWithState = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="checkbox"
        id="checkbox"
        className={styles.checkbox}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox" className={styles.toggle}>
        <div className={styles.bars}></div>
        <div className={styles.bars}></div>
        <div className={styles.bars}></div>
      </label>
    </div>
  );
};

export default AnimationWithState;
