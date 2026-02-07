import type { MobileMenuProps } from "@/types/navbar.type";
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="absolute lg:hidden bg-background hover:bg-white dark:hover:bg-black
       w-64 md:w-96 px-12 py-5 space-y-4 left-0 top-14 rounded-3xl"
    >
      <NavLinks isMobile onLinkClick={onClose} />
    </div>
  );
};

export default MobileMenu;
