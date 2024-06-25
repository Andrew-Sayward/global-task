import getCategories from "@/helpers/getCategories"
import getProducts from "@/helpers/getProducts"
import GeneralLayout from "@/layouts/general-layout"
import Category from "@/models/Category"
import Product from "@/models/Product"
import { get } from "http"
import { useEffect } from "react"

type Props = {
  products: Product[],
  categories: Category[],
}

const Products = (props: Props) => {

  useEffect(()=>{
    console.log(props.products);
  })

  return(
    <GeneralLayout>
      <div>
        <h1>Products</h1>
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