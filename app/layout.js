import { Montserrat } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
  subsets: ["cyrillic", "latin-ext", "latin", "cyrillic-ext"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "FLOWERS&OPT",
  description: "FLOWERS&OPT",
  icons: {
    icon: "/images/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-mainWhite`}>{children}</body>
    </html>
  );
}
