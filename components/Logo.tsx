import Link from "next/link";
import Image from "next/image";
import { logo } from "@/images";
import React from "react";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex items-center">
      <Image
        src={logo}
        alt="3DPinaka Logo"
        // width={50}
        height={50}
        className="object-contain hover:scale-105 transition-transform duration-200"
      />
    </Link>
  );
};

export default Logo;
