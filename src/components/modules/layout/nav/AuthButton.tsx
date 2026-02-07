import GradientButton from "@/components/buttons/GradientButton";
import Link from "next/link";

const AuthButton = () => {
  return (
    <Link href="/login">
      <GradientButton>Login</GradientButton>
    </Link>
  );
};

export default AuthButton;
