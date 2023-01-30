import Image from "next/image";

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events page</h1>
      <div>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}/`}>
            <Image src={ev.image} alt="" width={200} height={200} />
            <h2>{ev.title}</h2>
          </a>
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
