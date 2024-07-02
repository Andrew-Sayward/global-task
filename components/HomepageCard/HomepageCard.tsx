import HomepageCardTypes from "@/models/HomepageCard";
import Link from "next/link"
import styles from "./homepage-card.module.scss";

const HomepageCard = ({title, subtitle, description, link}: HomepageCardTypes) =>{
  return (
    <div className={styles.homepageCard}>
      <h3>Electronics</h3>
      <p>Cutting-Edge Technology at Your Fingertips</p>
      <p>Explore our wide range of electronics, featuring the latest gadgets and devices designed to simplify your life. From high-performance laptops and smartphones to smart home devices and accessories, we have everything you need to stay connected and ahead of the curve.</p>
      <Link href={"/products"}>Shop Now</Link>
     </div>
  )
}

export default HomepageCard;