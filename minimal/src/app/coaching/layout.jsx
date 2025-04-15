import Link from "next/link";
import React from "react";

function CoachingLayout({children}) {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="flex gap-12">
            <aside className="w-[240px] bg-white shadow-card p-4 space-y-4 rounded-2xl">
              <Link
                href="/"
                className="bg-green-500 py-3 flex justify-center rounded-full text-white text-xl font-semibold"
              >
                My fitness plan
              </Link>
              <Link
                href="/"
                className="bg-green-500 py-3 flex justify-center rounded-full text-white text-xl font-semibold"
              >
                Nutrition
              </Link>
              <Link
                href="/"
                className="bg-green-500 py-3 flex justify-center rounded-full text-white text-xl font-semibold"
              >
                Community
              </Link>
            </aside>
            <div>{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoachingLayout;
