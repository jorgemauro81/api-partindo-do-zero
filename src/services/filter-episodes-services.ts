import { repositoryListEpisodes } from "../repository/podscasts-repository";

export const servicesFilterEpisodes = async (podecastName: string) => {
  const data = await repositoryListEpisodes(podecastName);
  return data;
};
