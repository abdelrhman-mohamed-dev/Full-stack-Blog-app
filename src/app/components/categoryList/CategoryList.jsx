import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    _id: 1,
    title: "style",
    img: "/style.png",
    color: "#57c4ff31",
  },
  {
    _id: 2,
    title: "fashion",
    img: "/fashion.png",
    color: "#da85c731",
  },
  {
    _id: 3,
    title: "travel",
    img: "/travel.png",
    color: "#ff795736",
  },
  {
    _id: 4,
    title: "culture",
    img: "/culture.png",
    color: "#ffb04f45",
  },
  {
    _id: 5,
    title: "coding",
    img: "/coding.png",
    color: "#5e4fff31",
  },
];

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map((category) => (
          <Link
            style={{ backgroundColor: `${category.color}` }}
            key={category._id}
            href={`/blog?cat=${category.title}`}
            className={styles.category}
          >
            <Image
              src={category.img}
              alt={category.title}
              width={32}
              height={32}
              className={styles.image}
            />
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
