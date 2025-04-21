import React from "react";
import DashboardCards from "../cards/DashboardCards";

export default function DashboardHeader() {
  return (
    <>
      <section className="md:sticky md:16 lg:top-[80px] md:z-[9] ">
        <div className="-mt-11 pt-0 pb-[210px] sm:pb-[220px] xl:pb-22 xl:pt-12 bg-green-600 text-white rounded-b-2xl md:rounded-b-[20px]">
          <div className="container">
            <div className="xl:block   hidden">
              <h4 className="font-extrabold text-white text-[28px]">
                Welcome back, Valentina
                <span className="ml-4 text-xl text-white">
                  Manage your account details, track your orders, and discover
                  our additional services with ease.
                </span>
              </h4>
            </div>
          </div>
        </div>
        <DashboardCards />
      </section>
    </>
  );
}
