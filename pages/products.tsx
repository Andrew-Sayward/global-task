import Categories from "@/components/Categories/Categories"
import ProductsListing from "@/components/ProductsListing/ProductsListing"
import getCategories from "@/helpers/getCategories"
import getProducts from "@/helpers/getProducts"
import GeneralLayout from "@/layouts/general-layout"
import Product from "@/models/Product"
import { useEffect, useState } from "react"

type Props = {
  products: Product[],
  categories: string[],
}

const Products = (props: Props) => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState(props.products);

  useEffect(()=>{
    if(category){
      setProducts(props.products.filter(product => product.category === category))
    }else{
      setProducts(props.products)
    }
  },[category, props.products])
  

  return(
    <GeneralLayout>
      <div>
        <h1 className="m-2">Products</h1>
      </div>
     <div className="flex gap-8">
      <Categories categories={props.categories} setIsCategory={setCategory} />
      <ProductsListing products={products} />
     </div>
    </GeneralLayout>
  )
}

export default Products;

export const getServerSideProps = (async () => {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return {
    props: {
      products,
      categories,
    }
  }
})