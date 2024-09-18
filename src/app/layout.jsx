import localFont from "next/font/local";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";


export const metadata = {
  title: "YoutubeClone By DREAMDEV",
  description: "A YouTube clone application developed to enhance frontend skills.",
  keywords: "YouTube clone, frontend development, web application, JavaScript, React, Next.js, frontend skills, DREAMDEV"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav />

        {children}

       <Footer />


      </body>


    </html>
  );
}
