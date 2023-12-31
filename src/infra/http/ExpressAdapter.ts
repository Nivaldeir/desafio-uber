import express, { Request, Response } from "express"
import cors from "cors"
import { HttpServer } from "./HttpServer";
export class ExpressAdapter implements HttpServer {
  private app: any;
  constructor() {
    this.app = express();
    this.app.use(cors())
    this.app.use(express.json());
  }
  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async (req: Request, res: Response) => {
      try {
        const output = await callback(req);
        res.json(output)
      } catch (e: any) {
        console.log(e)
        res.status(425).send(e.message)
      }
    })
  }
  listen(port: number, host?: string | undefined): void {
    this.app.listen(port)
    console.log(`server listening on ${host ?? ""}:${port}`)
  }
}