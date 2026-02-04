import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} CineVault. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
