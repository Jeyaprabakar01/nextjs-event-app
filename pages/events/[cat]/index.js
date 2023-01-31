import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div className="p-10 flex flex-col items-center gap-4 ">
      <h1 className="text-center text-3xl font-bold">Events in {pageName} </h1>

      <div className="flex flex-col items-center content-center text-center text-lg font-semibold	gap-6 ">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
            <h1>{ev.title}</h1>
            <Image src={ev.image} alt="" width={300} height={300} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");

  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, pageName: id },
  };
}
