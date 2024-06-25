import Image from "next/image";
import { Inter } from "next/font/google";
import GeneralLayout from "@/layouts/general-layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <GeneralLayout>
    <article className="p-2 home-body">
      <h1 className="m-2">Welcome to TrendyLux Store</h1>      
      <h2>Discover the Future of Shopping</h2>

      <h3>Electronics</h3>
      <p>Cutting-Edge Technology at Your Fingertips</p>
      <p>Explore our wide range of electronics, featuring the latest gadgets and devices designed to simplify your life. From high-performance laptops and smartphones to smart home devices and accessories, we have everything you need to stay connected and ahead of the curve.</p>
      <Link href={"/products"}>Shop Now</Link>

      <h3>Jewelry</h3>
      <p>Timeless Elegance, Modern Designs</p>
      <p>Indulge in our exquisite collection of jewelry, crafted to perfection. Whether you&apos;re looking for a statement piece for a special occasion or everyday elegance, our selection includes stunning rings, necklaces, bracelets, and more, all designed to add a touch of luxury to your look.</p>
      <Link href={"/products"}>Shop Now</Link>

      <h3>Men&apos;s Clothing</h3>
      <p>Style Meets Comfort</p>
      <p>Upgrade your wardrobe with our latest men&apos;s clothing line. From casual wear to formal attire, our collection features high-quality fabrics and trendy designs that keep you looking sharp and feeling comfortable, no matter the occasion.</p>
      <Link href={"/products"}>Shop Now</Link>

      <h3>Women&apos;s Clothing</h3>
      <p>Fashion Forward, Effortlessly Chic</p>
      <p>Step into style with our women&apos;s clothing collection. Discover the latest trends and timeless classics, including elegant dresses, chic tops, versatile pants, and more. Our pieces are designed to make you feel confident and fabulous every day.</p>
      <Link href={"/products"}>Shop Now</Link>


      <h3>Why Choose Us?</h3>
      <ul>
        <li>Premium Quality: We offer only the finest products, ensuring top-notch quality and durability.</li>
        <li>Affordable Prices: Enjoy luxury and style without breaking the bank.</li>
        <li>Customer Satisfaction: Our priority is your happiness. We offer hassle-free returns and excellent customer service.</li>
        <li>Join our community and experience shopping like never before. TrendyLux Store – where technology, elegance, and fashion meet.</li>
      </ul>
      <p>Affordable Prices: Enjoy luxury and style without breaking the bank.</p>
      <Link href={"/products"}>Start Shopping Today</Link>

    </article>
    
    



    </GeneralLayout>
  );
}

