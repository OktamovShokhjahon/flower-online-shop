import { useEffect, useState } from "react";
import useScrollStore from "./scroll.store";

const SCROLL_THRESHOLD = 40; // 30px yoki 40px qilib sozlash mumkin

const useScrollDirection = () => {
    const { setScrollDirection } = useScrollStore();
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollDiff = Math.abs(scrollTop - lastScrollTop);

            if (scrollDiff < SCROLL_THRESHOLD) return; // 40px dan kam harakat bo‘lsa, hech narsa qilmaymiz

            if (scrollTop > lastScrollTop) {
                setScrollDirection(false); // Pastga siljigan bo‘lsa, yashiramiz
            } else {
                setScrollDirection(true); // Tepaga siljigan bo‘lsa, ko‘rsatamiz
            }

            setLastScrollTop(scrollTop);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop, setScrollDirection]);

};

export default useScrollDirection;
