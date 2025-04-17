import React from "react";
import DashboardCards from "../cards/DashboardCards";

export default function DashboardHeader() {
  return (
    <>
      <section className="md:sticky md:16 lg:top-[80px] md:z-[9] ">
        <div className="-mt-6 pt-0 pb-[210px] sm:pb-[220px] xl:pb-22 xl:pt-12 bg-green-600 text-white rounded-b-2xl md:rounded-b-[20px]">
          <div className="container">
            <div className="xl:flex gap-4  items-baseline  hidden">
              <h4 className="font-extrabold text-white text-[28px]">
                Welcome back, Valentina
              </h4>
              <p className="text-xl text-white">
                Manage your account details, track your orders, and discover our
                additional services with ease.
              </p>
            </div>
          </div>
        </div>
        <DashboardCards />
      </section>
    </>
  );
}
