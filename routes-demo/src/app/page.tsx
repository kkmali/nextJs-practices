import Link from "next/link"

function Home() {
  return (
    <>
    <h1 className=" text-5xl" >Welcome Home!</h1>
    <Link href="/blog">blog</Link>
    </>
  )
}

export default Home