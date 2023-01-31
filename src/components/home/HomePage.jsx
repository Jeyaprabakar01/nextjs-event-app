import Image from "next/image";
import Link from "next/link";

const HomePage = ({ data }) => {
  return (
    <main className="">
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}/`}>
          <Image src={ev.image} alt="" width={200} height={100} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
