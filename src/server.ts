import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podscasts-controllers";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];
    console.log(baseUrl);
    console.log(queryString);

    if (req.method === "GET" && baseUrl === "/api/list") {
      await getListEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl === "/api/episode") {
      await getFilterEpisodes(req, res);
    }
  },
);
const vPort = process.env.PORT;
server.listen(vPort, () => {
  console.log(`Servidor iniciado na porta ${vPort}`);
});
