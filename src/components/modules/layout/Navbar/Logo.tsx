import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className={`text-2xl font-medium flex items-center leading-tight text-primary`}
    >
      <Image src={"/images/logo.png"} width={80} height={80} alt="" />
    </Link>
  );
};

export default Logo;
