import Link from "next/link";
import React from "react";
import {Medical} from "../generic/icon";

function DashboardCards() {
  return (
    <Link href="/" className="block py-8 rounded-2xl bg-primary max-w-100">
      <div></div>
      <div className="flex items-center gap-4 text-white ">
        <div>
          <Medical className="text-white" />
        </div>
        <h4 className="text-2xl font-black">Treatments</h4>
      </div>
    </Link>
  );
}

export default DashboardCards;
