import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div className="p-10 flex flex-col items-center gap-4">
      <h1 className="text-center text-3xl font-bold">All Events</h1>
      <div className="flex flex-col items-center content-center text-center text-lg font-semibold	gap-6">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}/`}>
            <h2>{ev.title}</h2>
            <Image src={ev.image} alt="" width={400} height={400} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
