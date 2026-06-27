import * as http from "http";
import { getListEpisodes } from "./controllers/podscasts-controllers";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
      await getListEpisodes(req, res);
    }
  },
);
const vPort = process.env.PORT;
server.listen(vPort, () => {
  console.log(`Servidor iniciado na porta ${vPort}`);
});
