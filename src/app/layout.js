import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/compornents/Navbar";
import Footer from "@/compornents/Footer";

const OutfitFont = Outfit({
  subsets: ["latin"],
});



export const metadata = {
  title: "Artiva",
  description: "Generate and explore stunning AI artworks with Artiva.",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className}  h-full antialiased`}
    >
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
