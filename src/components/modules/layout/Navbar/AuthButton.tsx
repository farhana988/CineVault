import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthButton = () => {
  return (
    <Link href="/login">
      <Button
        className="font-semibold hover:opacity-90 transition  text-black
          bg-[linear-gradient(135deg,var(--secondary-foreground),var(--secondary),var(--muted-foreground))]"
      >
        Login
      </Button>
    </Link>
  );
};

export default AuthButton;
