import { useState, useEffect } from 'react';
import Product from '@/models/Product';
import Image from 'next/image';
import styles from './products-listing.module.scss';
import Link from 'next/link';

type Props = {
  products: Product[];
};

const ProductsListing = ({ products }: Props) => {
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;

    const sorted = [...products].sort((a, b) => {
      if (order === 'ascending') {
        //We compare the values being sorted by subtracting them from each other and comparing the negative and positive values
        return a.id - b.id;
      } else if (order === 'descending') {
        return b.id - a.id;
      }
      return 0;
    });

    setSortedProducts(sorted);
  };

  return (
    <section>
      <div className={styles.sort}>
        <select onChange={handleSortChange}>
          <option value="" selected disabled>
            Sort by:
          </option>
          <option value="descending">Descending</option>
          <option value="ascending">Ascending</option>
        </select>
      </div>
      <div className={styles.productListingContainer}>
        {sortedProducts.map((product) => {
          return (
            <div key={product.id} className={styles.productListing}>
              <span>{'£' + product.price}</span>
              <h3>{product.title}</h3>
              <div className={styles.image}>
                <Image src={product.image} alt={product.title} fill />
              </div>
              <p>{product.description}</p>
              <div className={styles.link}>
                <Link href="">Buy Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsListing;
