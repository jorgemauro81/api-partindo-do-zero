import { IncomingMessage, ServerResponse } from "http";
import { servicesListEpisodes } from "../services/list-episodes-services";
import { servicesFilterEpisodes } from "../services/filter-episodes-services";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const Response = await servicesListEpisodes();
  res.end(JSON.stringify({ Response }));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const queryString = req.url?.split("?p=")[1] ?? "";
  const Response = await servicesFilterEpisodes(queryString);
  res.end(JSON.stringify({ Response }));
};
