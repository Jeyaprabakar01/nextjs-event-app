import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/events">Events</Link>
      </nav>
    </header>
  );
};

export default Header;
