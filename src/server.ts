import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podscasts-controllers";
import { Routes } from "./routes/Routes";
import { HttpMethods } from "./utils/http-methods";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(request, response);
    }

    if (request.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
  },
);
const vPort = process.env.PORT;
server.listen(vPort, () => {
  console.log(`Servidor iniciado na porta ${vPort}`);
});
