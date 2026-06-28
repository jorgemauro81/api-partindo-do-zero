import { repositoryListEpisodes } from "../repository/podscasts-repository";

export const servicesFilterEpisodes = async (
  podecastName: string | undefined,
) => {
  const queryString = podecastName?.split("?p=")[1] ?? "";
  const data = await repositoryListEpisodes(queryString);
  return data;
};
