"use client";

import { menuLinks } from "@/data/navbarData";
import type { MenuLinksProps } from "@/types/navbar.type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLinks = ({ isMobile = false, onLinkClick }: MenuLinksProps) => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onLinkClick}
            className={clsx(
              "transition-colors",
              isMobile
                ? "block py-2 text-lg"
                : "text-sm xl:text-base hover:text-secondary",
              isActive &&
                "text-secondary font-semibold underline underline-offset-4",
            )}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
