import fs from "fs";
import path from "path";
import { IPodscasts } from "../interfaces/IPodscasts";
const filePath = path.join(__dirname, "../repository/podscasts.json");

export const repositoryListEpisodes = async (
  podcastName?: string,
): Promise<IPodscasts[]> => {
  const rawData = fs.readFileSync(filePath, "utf-8");
  let vJSONFile = JSON.parse(rawData);
  if (podcastName) {
    return vJSONFile.filter(
      (episode: IPodscasts) => episode.podcastName === podcastName,
    );
  }
  return vJSONFile;
};
