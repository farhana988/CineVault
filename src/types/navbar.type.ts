export interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MenuLink {
  href: string;
  label: string;
}

export interface MenuLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}
