import React from "react";
import styles from './Header.module.css'

function Header() {
  return <h1 className={`container ${styles.header}`}>What are you thinking today?</h1>;
}

export default Header;
