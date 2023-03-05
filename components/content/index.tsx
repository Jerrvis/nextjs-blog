import styles from "./index.module.css";
import { ReactNode, useEffect } from "react";
import Image from "next/image";

interface props {
  children: ReactNode;
}

const author_image = require("../../public/blackmagicgirl-e.png");

export default function index({ children }: props) {
  useEffect(() => {});
  return (
    <div>
      <div className={styles.conatiner}>
        <div className={styles.route}>{children}</div>

        <aside className={styles.aside}>
          <div className={styles.part1}>
            <div className={styles.author_state}>
              <Image
                className={styles.author_image}
                src={author_image.default.src}
                width={100}
                height={100}
                alt="author_image"
              ></Image>
              <h5>jkun</h5>
              <h6>打工人</h6>
            </div>
            <nav className={styles.site_state}></nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
