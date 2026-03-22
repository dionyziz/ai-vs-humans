import Timeline from "@/components/Timeline";
import { events, eras } from "@/data/events";
import { wikipediaExcerpts } from "@/data/wikipedia-excerpts";

export default function Home() {
  const eventsWithData = events.map((e) => {
    const excerpt = wikipediaExcerpts[e.link];
    return {
      ...e,
      image: e.overrideImage ?? excerpt?.thumbnail,
      wikipediaTitle: excerpt?.title,
      wikipediaExtract: excerpt?.extract,
      wikipediaThumbnail: excerpt?.thumbnail,
    };
  });

  return <Timeline events={eventsWithData} eras={eras} />;
}
