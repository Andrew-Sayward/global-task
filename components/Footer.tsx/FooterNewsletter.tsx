import Link from "next/link";
import styles from "./footer.module.scss"; 

const FooterNewsletter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>© 2022 Your Website. All rights reserved.</p>
          <div>
            <ul className="flex gap-4 py-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/newsletter">Newsletter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterNewsletter;