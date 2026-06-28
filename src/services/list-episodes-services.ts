import { IFilterPodsCasts } from "../interfaces/IFilter-Podscasts";
import { repositoryListEpisodes } from "../repository/podscasts-repository";
import { StatusCode } from "../utils/status-code";

export const servicesListEpisodes = async (): Promise<IFilterPodsCasts> => {
  let ResponseFormat: IFilterPodsCasts = { statusCode: 0, body: [] };
  const data = await repositoryListEpisodes();
  ResponseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };
  return ResponseFormat;
};
