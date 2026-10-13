import React from "react";
import styles from "./NavControl.module.css";

function NavControl({ navStateSetter, navState }) {
  const allStates = ["All", "Active", "Completed"];
  return (
    <nav className={`${styles.wrapper}`}>
      {allStates.map((state) => (
        <button
          onClick={() => navStateSetter(state)}
          className={`${styles.navbtn} ${
            navState === state ? styles.selectnav : ""
          }`}
        >
          {state}
        </button>
      ))}
    </nav>
  );
}

export default NavControl;
