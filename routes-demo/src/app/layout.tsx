import "./globals.css"
import Footer from "./components/core/Footer";
import Header from "./components/core/Header";

export const metadata = {
  title: 'cozmo',
  description: 'cozmo app!',
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return(
        <html>
            <body>
              <Header />
              {children}
              <Footer />
            </body>
        </html>
    )
}