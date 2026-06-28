import fs from "fs";
import path from "path";
import { IPodscasts } from "../models/IPodscasts";
const filePath = path.join(__dirname, "../repository/podscasts.json");

export const repositoryListEpisodes = async (): Promise<IPodscasts[]> => {
  const data = fs.readFileSync(filePath, "utf-8");
  const vJSONFile = JSON.parse(data);
  return vJSONFile;
};
