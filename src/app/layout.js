import "./globals.css";
import { Inter } from "next/font/google";
// import NavBar from "./Components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "B.B.M",
  description: "Poprtfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
