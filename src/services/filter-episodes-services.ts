import { IFilterPodsCasts } from "../interfaces/IFilter-Podscasts";
import { repositoryListEpisodes } from "../repository/podscasts-repository";
import { StatusCode } from "../utils/status-code";

export const servicesFilterEpisodes = async (
  podecastName: string | undefined,
): Promise<IFilterPodsCasts> => {
  let ResponseFormat: IFilterPodsCasts = { statusCode: 0, body: [] };
  const queryString = podecastName?.split("?p=")[1] ?? "";
  const data = await repositoryListEpisodes(queryString);

  ResponseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

  // if (data.length !== 0) {
  //   ResponseFormat.statusCode = StatusCode.OK;
  // } else {
  //   ResponseFormat.statusCode = StatusCode.NoContent;
  // }

  ResponseFormat.body = data;
  return ResponseFormat;
};
