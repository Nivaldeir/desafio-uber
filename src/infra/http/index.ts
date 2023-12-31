import { Request } from 'express';
import { HttpServer } from "./HttpServer";
import { EmailSender } from '../../aplication/services/EmailSender.service';
import { SesEmailSender } from '../ses/SesEmailSender';
import { SESConfig } from '../ses/SESConfig';

export class Http {
  constructor(private readonly _httpServer: HttpServer) {
    this._httpServer.on('post', "/", async (req: Request) => {
      const Ses = new SesEmailSender(SESConfig.instance())
      const usecase = new EmailSender(Ses)
      await usecase.execute(req.body)
      return "SUCCESS"
    })
  }
}