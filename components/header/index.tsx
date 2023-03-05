/*
 * @Author: Jerrvis 675926782@qq.com
 * @Date: 2023-02-26 13:15:54
 * @LastEditors: Jerrvis 675926782@qq.com
 * @LastEditTime: 2023-03-04 19:51:18
 * @FilePath: \new-blog\components\header\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Header() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setVisible(
        currentScrollPosition <= prevScrollPosition ||
          currentScrollPosition < 80
      );
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);
  return (
    <header
      className={
        styles.header +
        " " +
        styles.h_fixed +
        " " +
        (visible ? styles.header_visible : styles.header_hidden)
      }
    >
      <nav className={styles.mw_container + " mg-mid"}>
        <ul>
          <li>
            <Link href="/">首页</Link>
          </li>
          <li>
            <Link href="/node">机场</Link>
          </li>
          <li>
            <Link href="/tech">技术</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
