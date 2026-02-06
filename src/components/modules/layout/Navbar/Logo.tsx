import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="relative w-14 h-14 lg:w-16 lg:h-16 pt-1.5">
        <Image src="/images/logo.png" alt="logo" width={80} height={80} />
      </div>
    </Link>
  );
};

export default Logo;
