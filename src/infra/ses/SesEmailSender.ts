import { EmailSenderRepository } from "../../aplication/repository/EmailSender";
import { SES } from 'aws-sdk';
export class SesEmailSender implements EmailSenderRepository {
  constructor(private readonly _ses: SES) { }
  async sendEmail(to: string, subject: string, message: string): Promise<void> {
    const params = {
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Text: {
            Data: message,
          },
        },
        Subject: {
          Data: subject,
        },
      },
      Source: 'nivaldeir-silva@hotmail.com',
    }
    try {
      await this._ses.sendEmail(params).promise();
      console.log("Email sent sucessfully")
    } catch (error) {
      console.log(error)
      throw new Error("Failed to send Email")
    }
  }
}