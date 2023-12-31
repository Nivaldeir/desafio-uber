import { EmailSenderRepository } from "../repository/EmailSender";

export class EmailSender {
  constructor(private readonly _messageService: EmailSenderRepository) { }
  async execute(input: Input): Promise<void> {
    await this._messageService.sendEmail(input.to, input.subject, input.body)
  }
}

type Input = {
  to: string
  subject: string
  body: string
}