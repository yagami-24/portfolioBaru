import { ThemeProvider } from "./componentNope/theme-provider";
import { Outfit, Ovo } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
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

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
    <GoogleTagManager gtmId="GTM-MQJLLWG8" />
      <body
         className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-[#11001F]`}
      ><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}