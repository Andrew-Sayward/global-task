import Link from "next/link";

const NavBar = () => {
  return(
    <nav className="flex gap-8 text-white p-2">
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
  )
} 

export default NavBar;