import React from "react";
import styles from "@/styles/components/Footer.module.scss"
import List from "./List";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles['footer-list']}>
      <List/>
    </div>
    Copylight © 2020 ULTRA MARINE Inc.
  </footer>
);

export default Footer;
