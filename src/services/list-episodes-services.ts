import { repositoryListEpisodes } from "../repository/podscasts-repository";

export const servicesListEpisodes = async () => {
  const data = await repositoryListEpisodes();
  return data;
};
