"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Header } from "./_components";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (default: 400ms)
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="select-none pt-[75px] desktop:pt-[155px]">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
