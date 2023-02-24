import React from "react";
import Link from "next/link";
import styles from "@/styles/components/List.module.scss"

const List: React.FC = () => (
  <div className={styles.list}>
      <Link href='/items'>ITEMS</Link>
      <Link href='/shades'>SHADES</Link>
      <Link href='/world'>WORLD</Link>
  </div>
);

export default List;
