import { IncomingMessage, ServerResponse } from "http";
import { servicesListEpisodes } from "../services/list-episodes-services";
import { servicesFilterEpisodes } from "../services/filter-episodes-services";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { IFilterPodsCasts } from "../interfaces/IFilter-Podscasts";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON });
  const Response = await servicesListEpisodes();
  res.end(JSON.stringify({ Response }));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const Resp: IFilterPodsCasts = await servicesFilterEpisodes(req.url);
  res.writeHead(Resp.statusCode, { "Content-Type": ContentType.JSON });
  const Response = Resp.body;

  res.end(JSON.stringify({ Response }));
};
