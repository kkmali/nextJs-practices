"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function AuthLayout({ children }: {
  children: React.ReactNode;
}) {
  const [input,setInput] = useState("");
  const NavLink = [
    {
      name: "login", href: "/login",
    },
    {
      name: "register", href: "/register",
    },
    {
      name: "forgotpassword", href: "/forgot-password",
    },
  ]
  const pathname = usePathname();
  return (
    <>
      <input value={input} onChange={(e)=> setInput(e.target.value)} />
      <br />
      {
        NavLink.map((link)=>{
          const isActive = pathname.startsWith(link.href);
          return (
            <Link className={`ml-4 ${isActive ? "font-bold" :"text-blue-500"} `} href={link.href} key={link.name} >{link.name} </Link>
          )
        })
      }
      {children}
      <div>Inside AuthLayout</div>
    </>
  )
}

export default AuthLayout