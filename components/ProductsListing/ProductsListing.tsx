import Product from '@/models/Product';
import Image from 'next/image';
import styles from './products-listing.module.scss';
import Link from 'next/link';

type Props = {
  products: Product[];
};

const ProductsListing = (props: Props) => {
  return (
    <div className={styles.productListingContainer}>
      {props.products.map((product) => {
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
  );
};

export default ProductsListing;
