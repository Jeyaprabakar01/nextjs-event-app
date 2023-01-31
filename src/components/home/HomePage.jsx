import Image from "next/image";
import Link from "next/link";

const HomePage = ({ data }) => {
  return (
    <div className="flex flex-col gap-7">
      {data.map((ev) => (
        <Link
          className="flex flex-row gap-7 justify-center content-center items-center "
          key={ev.id}
          href={`/events/${ev.id}/`}
        >
          <Image src={ev.image} alt="" width={200} height={200} />

          <div className="w-6/12">
            <h2 className="font-bold text-2xl">{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
