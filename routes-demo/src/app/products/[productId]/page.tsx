import { Metadata } from "next";

type Props = {
  params:{
    productId:string;
  };
}

export const generateMetadata =  ({params}:Props):Metadata=>{
  return {
    title:`product ${params.productId}`,
  }
}

function ProductDetails({params}:Props) {
  return (
    <h1>Details about Product {params.productId} </h1>
  )
}

export default ProductDetails