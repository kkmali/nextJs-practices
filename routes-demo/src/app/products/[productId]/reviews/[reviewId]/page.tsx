"use client";
import { notFound } from "next/navigation"

function ReviewDetail({params}:{
    params:{
        productId:string
        reviewId:string}
}) {

    function getRandomNumber(count:number){
      return Math.floor(Math.random()*count);
    }

    const random = getRandomNumber(2);
    if(random === 1){
      throw new Error("Error laoding review");
    }

    if(parseInt(params.reviewId) > 1000){
      return notFound();
    }
  return (
    <h1>Review {params.reviewId} for Product {params.productId}</h1>
  )
}

export default ReviewDetail 