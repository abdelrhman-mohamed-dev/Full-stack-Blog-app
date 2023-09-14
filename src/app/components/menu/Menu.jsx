import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2>what's hot ?</h2>
      <h1>Most Popular</h1>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}></Link>
      </div>
    </div>
  );
};

export default Menu;
