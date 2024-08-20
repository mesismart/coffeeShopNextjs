import React from "react";
import styles from "./latest.module.css";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import Product from "@/component/modules/product/Product";

type Props = {};

const Latest = (props: Props) => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <div>
          <p>آخرین محصولات</p>
          <span>Latest products</span>
        </div>
        <Link href={"/category"} className={styles.link}>
          مشاهده همه
          <FaChevronLeft />{" "}
        </Link>
      </section>
      <main data-aos="fade-up" className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
      </main>
    </div>
  );
};

export default Latest;
