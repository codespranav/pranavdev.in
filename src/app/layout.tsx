import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Web Developer in India  | Pranav Singh",
  description: "Pranav Singh is the website developer working as a freelance since 2018. According to google review He is the best Website Developer in India, Website Developer in Bihar",
};
const poppins = Poppins({
  weight: ['400', "500", "600", "700", "900"],
  subsets: ['latin'],
})
 
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
