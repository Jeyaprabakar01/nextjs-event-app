import Image from "next/image";

const EventPage = ({ data }) => {
  return (
    <div className="p-10 flex flex-col items-center gap-4">
      <h1 className="text-center text-3xl font-bold">{data.title}</h1>
      <Image src={data.image} alt="" height={600} width={600} />
      <p className="text-center">{data.description} </p>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");

  const eventData = allEvents.find((ev) => id === ev.id);
  return {
    props: { data: eventData },
  };
}
