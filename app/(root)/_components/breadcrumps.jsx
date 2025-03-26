"use client";

import Link from "next/link";

function BreadCrumps({ links }) {
  return (
    <div className="flex items-center gap-[10px]">
      {links &&
        links.map((link, idx) => {
          return (
            <>
              <Link
                href={link.href}
                key={idx}
                className={
                  idx !== links.length - 1
                    ? "text-[16px] leading-[20px] font-medium font-montserrat text-[#453C3C80]/50"
                    : "text-[16px] leading-[20px] font-medium font-montserrat text-miniBlack"
                }
              >
                {link.name}
              </Link>
              {idx !== links.length - 1 ? (
                <p className="w-[2px] h-full bg-mainBlack min-h-[15px]"></p>
              ) : (
                ""
              )}
            </>
          );
        })}
    </div>
  );
}

export default BreadCrumps;
