import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="p-8 flex items-center justify-between sm:p-0 sm:my-8 sm:mx-32">
      <Link href="/" className="flex items-center justify-between space-x-4">
        <Image
          src={"/assets/images/pfp.jpg"}
          width={62.5}
          height={62.5}
          alt="Profile picture"
          className="rounded-full"
        />
        <p className="font-bebas text-2xl hidden sm:block">Frame Focus</p>
      </Link>

      <Link href="/about" className="font-bebas text-2xl">
        About
      </Link>
    </nav>
  );
};

export default Nav;
