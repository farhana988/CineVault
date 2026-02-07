import type { HamburgerProps } from "@/types/navbar.type";
import { Menu, X } from "lucide-react";

const Hamburger = ({ isOpen, toggleMenu }: HamburgerProps) => {
  return (
    <button
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className=" block lg:hidden"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};

export default Hamburger;
