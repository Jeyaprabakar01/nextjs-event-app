import Image from "next/image";

const EventsCatPage = ({ data }) => {
  return (
    <div>
      <h1>Events in london </h1>

      {data.map((ev) => (
        <a key={ev.id} href={`/events/cat/${ev.city}/${ev.id}`}>
          <Image src={ev.image} width={300} height={300} />
          <h1>{ev.title}</h1>
          <p>{ev.description}</p>
        </a>
      ))}
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
    props: { data },
  };
}
