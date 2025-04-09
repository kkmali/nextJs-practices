"use client";
import { useRouter } from "next/navigation";

function OrderProduct() {
    const router = useRouter();
    const handleClick = () =>{
        router.push("/");
    };
  return (
    <>
    <button  onClick={handleClick} className="border-2 p-2 bg-pink-200">Place order</button>
    <div>Order Product</div>
    </>
  )
}

export default OrderProduct