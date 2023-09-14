import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link href={"/"}>
          <Image className={styles.img} src={"/p1.jpeg"} alt="postImage" fill />
        </Link>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>FOOD</span>
        </div>
        <Link href={"/"}>
          <h1>Lorem ipsum dolor sit amet elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
          fugit, sunt vero asperiores odit minima dolores quos consequatur
          voluptates, porro a earum expedita! Ex optio repellendus quasi ipsam
          nam animi...
        </p>
        <Link href={"/"} className={styles.links}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
