"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import constants from "../generic/constants";
import { usePathname } from "next/navigation";

function DashboardCards() {
  const { dashboardCardData } = constants();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {dashboardCardData.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`py-8 rounded-2xl ${
                isActive ? "bg-primary" : "bg-white"
              } max-w-100 pl-4 flex items-center gap-5`}
            >
              <div
                className={`size-5 rounded-full border-3  flex justify-center items-center ${
                  isActive ? "border-white" : "border-green-500"
                } `}
              >
                <span className="size-2 rounded-full bg-white"></span>
              </div>
              <div className="flex items-center gap-4 text-white ">
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
                  className={`md:text-2xl text-lg  ${
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
    </>
  );
}

export default DashboardCards;
