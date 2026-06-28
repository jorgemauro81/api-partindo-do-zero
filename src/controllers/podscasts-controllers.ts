import { IncomingMessage, ServerResponse } from "http";
import { servicesListEpisodes } from "../services/list-episodes-services";
import { servicesFilterEpisodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/content-type";
import { IFilterPodsCasts } from "../interfaces/IFilter-Podscasts";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const Resp: IFilterPodsCasts = await servicesListEpisodes();
  res.writeHead(Resp.statusCode, { "Content-Type": ContentType.JSON });

  const Response = Resp.body;
  res.write(JSON.stringify({ Response }));
  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const Resp: IFilterPodsCasts = await servicesFilterEpisodes(req.url);
  res.writeHead(Resp.statusCode, { "Content-Type": ContentType.JSON });
  const Response = Resp.body;
  res.write(JSON.stringify({ Response }));

  res.end();
};
