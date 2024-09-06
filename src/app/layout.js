import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"], preload: false});

export const metadata = {
  title: "Blog Us",
  description: "Daily updates blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Header />
              {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
