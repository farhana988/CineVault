import { Button } from "@/components/ui/button";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const GradientButton = ({
  children,
  className,
  ...props
}: GradientButtonProps) => {
  return (
    <Button
      {...props}
      className={`font-semibold transition hover:opacity-90 text-black
        bg-[linear-gradient(135deg,var(--secondary-foreground),var(--secondary),var(--muted-foreground))]
        ${className ?? ""}`}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
