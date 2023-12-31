export interface EmailSenderRepository {
  sendEmail(to: string, subject: string, message: string): Promise<void>;
}