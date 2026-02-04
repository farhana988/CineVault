import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center
     space-y-6 bg-black/90 text-white"
    >
      <AlertTriangle className="w-16 h-16 text-red-500" />
      <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
      <p className="max-w-md text-gray-300">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center
        px-6 py-2 rounded-md
        border border-white/70
        text-white font-medium
        transition
        hover:bg-white hover:text-black
        focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
