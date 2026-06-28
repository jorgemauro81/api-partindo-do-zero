import { IPodscasts } from "./IPodscasts";

export interface IFilterPodsCasts {
  statusCode: number;
  body: IPodscasts[];
}
