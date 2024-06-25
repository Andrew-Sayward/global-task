import Product from "@/models/Product";
import Image from "next/image";

type Props = {
  products: Product[]
}

const ProductsListing = (props:Props) => {
  return (
    <div className="grid grid-cols-3">
      {props.products.map(product => {
        return (
          <div key={product.id} className="bg-white text-black p-4 m-2">
            <span>{"£" + product.price}</span>
            <h1>{product.title}</h1>
            <div className="relative aspect-square mx-24 my-12">
              <Image src={product.image} alt={product.title} fill />  
            </div>
            <p>{product.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsListing;