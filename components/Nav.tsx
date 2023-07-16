import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="text-white px-8 py-2 bg-neutral-900 flex items-center justify-between sm:px-32">
      <Link href="/" className="flex items-center justify-between space-x-4">
        <Image
          src={"/assets/images/pfp.jpg"}
          width={50}
          height={50}
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
