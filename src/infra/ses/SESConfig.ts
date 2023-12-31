import aws from "aws-sdk";
export class SESConfig {
  static instance() {
    return new aws.SES({
      region: process.env.REGION_AWS,
      accessKeyId: process.env.ACESS_KEY_ID,
      secretAccessKey: process.env.SECRET_KEY
    })
  }
}