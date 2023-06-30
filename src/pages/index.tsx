import { Products } from "@/components/products";
import { IProducts } from "@/types";
import { GET_PRODUCTS_ENDPOINT } from "@/utils/constants/endpoints";
import axios from "axios";

export default function Home({ products }: { products: IProducts[] }) {
  return (
    <main
      className="container mx-auto p-4"
    >
      <Products products={products} />
    </main>
  )
}

export async function getServerSideProps() {
  const { data: { products } } = await axios.get(GET_PRODUCTS_ENDPOINT)

  return {
    props: { products }
  }
}


