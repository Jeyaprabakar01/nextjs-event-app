import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-24 p-5	bg-gradient-to-r from-cyan-500 to-fuchsia-500  ">
      <div className="flex justify-between content-center items-center">
        <Image src="/images/logo_black.png" alt="" width={50} height={50} />
        <nav className="flex gap-3.5 font-semibold text-base  ">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/events">Events</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
