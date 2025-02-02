import Categories from '@/components/Categories/Categories';
import ProductsListing from '@/components/ProductsListing/ProductsListing';
import getCategories from '@/helpers/getCategories';
import getProducts from '@/helpers/getProducts';
import GeneralLayout from '@/layouts/general-layout';
import Product from '@/models/Product';
import { useEffect, useState } from 'react';

type Props = {
  products: Product[];
  categories: string[];
};

const Products = (props: Props) => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState(props.products);
  const [sortValue, setSortValue] = useState();

  useEffect(() => {
    // This useEffect rerenders our page based off of the value of categories, which then updates the state of the products listing
    if (category) {
      setProducts(
        props.products.filter((product) => product.category === category)
      );
    } else {
      setProducts(props.products);
    }
  }, [category, props.products]);

  useEffect(() => {
    console.log(sortValue)
    // Sort products based on the selected sort order, this is done by subtracting id values and comparing wether they are negative or positive
    if (sortValue === 'ascending') {
      setProducts(products.sort((a, b) => a.id - b.id));
    } else if (sortValue === 'descending') {
      setProducts(products.sort((a, b) => b.id - a.id));
    }
  }, [products, sortValue]);

  return (
    <GeneralLayout>
      <div className="container">
        <h1 className="my-4">Products</h1>
      </div>
      <div className="lg:flex gap-8 container">
        {/* Here we are passing the function for setting category down into the category component, this allows us to use the value of
           Category when filtering the products.
       */}
        <Categories categories={props.categories} setIsCategory={setCategory} />
        <ProductsListing products={products} setSortValue={setSortValue} />
      </div>
    </GeneralLayout>
  );
};

export default Products;

export const getServerSideProps = async () => {
  const [products, categories] = await Promise.all([
    //We call two functions to get the properties of the products and categories and pass these to two different states
    getProducts(),
    getCategories(),
  ]);

  return {
    props: {
      products,
      categories,
    },
  };
};
