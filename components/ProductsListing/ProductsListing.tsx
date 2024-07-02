import { useState, useEffect } from 'react';
import Product from '@/models/Product';
import Image from 'next/image';
import styles from './products-listing.module.scss';
import Link from 'next/link';

type Props = {
  products: Product[];
  setSortValue: Function;
};

const ProductsListing = ({ products, setSortValue }: Props) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
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
        {products.map((product) => {
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
