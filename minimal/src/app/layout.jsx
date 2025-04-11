import {Inter} from "next/font/google";
import "./globals.css";
import Header from "./components/core/Header";
import DashboardCards from "./components/cards/DashboardCards";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Minimal",
  description: "Track your orders",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />
        <DashboardCards />
        {children}
      </body>
    </html>
  );
}
