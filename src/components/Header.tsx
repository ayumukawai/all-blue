import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Header.module.scss"
import List from "@/components/List";

const Header = () => (
<header className={styles.header}>
    <Link className={styles.logo} href='/'>
        <Image src='/ULTRAMARINE_logo.png' alt='ロゴ'width={980} height={140}/>
    </Link>
    <div className={styles['header-list']}>
        <List/>
    </div>
</header>
);

export default Header;
