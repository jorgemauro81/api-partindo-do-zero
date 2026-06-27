import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify([
      {
        podcastName: "Flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        categories: ["humor", "policial"],
      },
      {
        podcastName: "Britto podcast",
        episode: "FERRUGEM - Brito Podcast especial episódio 300",
        videoId: "bhKz9ep9Cm4",
        categories: ["humor", "musical"],
      },
    ]),
  );
};
