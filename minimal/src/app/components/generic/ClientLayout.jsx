"use client";

import Header from "../core/Header";
import DashboardHeader from "../cards/DashboardCards";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const layoutVisiblePaths = [];

  const showLayout = layoutVisiblePaths.includes(pathname);

  return (
    <>
      {showLayout && <Header />}
      {showLayout && <DashboardHeader />}
      {children}
    </>
  );
}
