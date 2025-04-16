"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import constants from "../generic/constants";
import {usePathname} from "next/navigation";

function DashboardCards() {
  const {dashboardCardData} = constants();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="container">
      <div className=" mt-[-170px]  xl:mt-[-64px] grid grid-cols-2 max-w-[700px] xl:max-w-full xl:grid-cols-4 gap-4 sm:gap-6 mx-auto ">
        {dashboardCardData.map((item, index) => {
          const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
                  
          return (
            <Link
              key={index}
              href={item.href}
              className={`sm:py-8 rounded-2xl ${
                isActive
                  ? "bg-primary border-primary"
                  : "bg-white border-white hover:border-green-500 hover:bg-green-200"
              } max-w-100 sm:px-4 p-2 flex items-center sm:gap-4 shadow-card border-2 transition duration-700`}
            >
              <div
                className={`size-5 rounded-full border-3  flex justify-center items-center shrink-0 max-sm:self-start max-sm:mt-2.5 ${
                  isActive ? "border-white" : "border-green-500"
                } `}
              >
                <span className="size-2 rounded-full bg-white"></span>
              </div>
              <div className="flex sm:flex-row w-full flex-col items-center gap-x-4 gap-y-1 text-white ">
                <div>
                  {
                    <item.icon
                      className={`${
                        isActive ? "text-white" : "text-green-500"
                      }`}
                    />
                  }
                </div>
                <h4
                  className={`md:text-2xl sm:text-lg text-base  ${
                    isActive
                      ? "text-white font-black"
                      : "text-green-500 font-semibold"
                  }`}
                >
                  {item.title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardCards;
