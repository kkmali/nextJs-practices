"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import constants from "./constants";

function CoachingAsideBar() {
    const { CoachingAsideBarData } = constants();
    const pathname = usePathname();
    return (
        <aside className="md:w-[240px] max-md:flex   items-center w-full bg-white shadow-card md:p-4 p-1 md:space-y-4 md:rounded-2xl rounded-full h-fit">
            {
                CoachingAsideBarData.map((item, index) => {
                    const isActive =
                        item.href === "/coaching"
                            ? pathname === "/coaching"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`${isActive ? "bg-green-500 text-white font-semibold" : "text-green-400"} max-md:w-full  py-3 px-2.5 flex justify-center rounded-full  items-center  md:text-xl sm:text-base text-xs whitespace-nowrap`}
                        >
                            {item.title}
                        </Link>
                    )
                }
                )}
        </aside>
    )
}

export default CoachingAsideBar
