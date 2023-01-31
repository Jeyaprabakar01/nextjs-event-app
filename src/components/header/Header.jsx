import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-48 p-5	bg-gradient-to-r from-cyan-500 to-fuchsia-500 flex flex-col justify-between">
      <div className="flex justify-between content-center">
        <Image src="/images/logo_black.png" alt="" width={50} height={50} />
        <nav className="flex gap-3.5 font-semibold text-base ">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/events">Events</Link>
        </nav>
      </div>
      <h1 className="w-3/5 text-4xl uppercase font-bold ">
        The Next js event application
      </h1>
    </header>
  );
};

export default Header;
