import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  className?: string;
}

const GradientButton = ({ children, className }: GradientButtonProps) => {
  return (
    <Button
      className={`font-semibold transition hover:opacity-90 text-black
          bg-[linear-gradient(135deg,var(--secondary-foreground),var(--secondary),var(--muted-foreground))]
          ${className ?? ""}`}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
