import Link from "next/link";
import React from "react";

const SpMenu = () => (
<section className="slide-menu">
  <ul>
      <li><Link href='#'>ログイン/新規登録</Link></li>
      <li><Link href=''>BLUE</Link></li>
      <li><Link href=''>ITEM</Link></li>
      <li><Link href=''>SHOP</Link></li>
      <li><Link href=''>STORY</Link></li>
  </ul>
</section>
);

export default SpMenu;
