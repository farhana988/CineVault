"use client";

import { useState } from "react";
import { useMenuToggle } from "@/components/hooks/useMenuToggle";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
import ThemeToggle from "@/components/shared/ThemeToggle";
import AuthButton from "./AuthButton";
import MobileMenu from "./MobileMenu";
import SearchModal from "@/components/modals/SearchModal";
import { LucideSearch } from "lucide-react";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuToggle();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-background py-2 shadow-sm">
        <div className="max-w-7xl xl:mx-auto">
          <nav className="pl-5 xl:pl-8 pr-2 xl:pr-4 relative">
            <div className="flex justify-between items-center relative">
              {/* Logo */}
              <div className="hidden lg:block">
                <Logo />
              </div>

              {/* Links */}
              <div className="flex items-center space-x-3">
                <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                <div className="lg:hidden">
                  <Logo />
                </div>
                <div className="hidden lg:flex gap-3 xl:gap-5 bg-muted-foreground/10 px-6 py-2 rounded-md">
                  <NavLinks />
                </div>
              </div>

              {/* Right section */}
              <div className="flex items-center gap-3">
                <LucideSearch
                  onClick={() => setIsSearchOpen(true)}
                  className="w-5 h-5"
                />

                <ThemeToggle />
                <AuthButton />
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
          </nav>
        </div>
      </header>

      {/* Fullscreen Search Modal */}
      <SearchModal open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

export default Navbar;
