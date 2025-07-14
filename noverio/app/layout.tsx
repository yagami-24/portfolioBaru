// app/laout.js
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Definisikan font dengan properti 'variable'
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit", // Tambahkan ini
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo", // Tambahkan ini
});

export const metadata = {
  title: "portfolio - Noverio",
  description: "",
};

export default function RootLayout({ children }: {children: any}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
         className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}