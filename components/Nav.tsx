import Image from "next/image";

const Nav = () => {
  return (
    <nav className="p-8">
      <Image
        src={"/assets/images/pfp.jpg"}
        width={62.5}
        height={62.5}
        alt="Profile picture"
        className="rounded-full"
      />
    </nav>
  );
};

export default Nav;
