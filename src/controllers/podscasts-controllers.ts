import { IncomingMessage, ServerResponse } from "http";
import { servicesListEpisodes } from "../services/list-episodes-services";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const Response = await servicesListEpisodes();
  res.end(JSON.stringify({ Response }));
};
