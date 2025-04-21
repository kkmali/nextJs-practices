import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/core/Header";
import DashboardHeader from "./components/generic/DashboardHeader";
import ProgressBar from "./components/generic/ProgressBar";

const inter = Inter({
  variable: "--font-Inter",
  weights: [400, 500, 600, 700, 800, 900],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Minimal",
  description: "Track your orders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ProgressBar />
        <Header />
        <DashboardHeader />
        {children}
      </body>
    </html>
  );
}
