import Link from 'next/link';
import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <nav className={`container ${styles.navbar}`}>
      <ul>
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
    </nav>
  );
};

export default NavBar;
