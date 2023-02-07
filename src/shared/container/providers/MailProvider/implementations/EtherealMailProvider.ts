import nodemailer, { Transporter } from "nodemailer";
import { injectable } from "tsyringe";
import handlebars from "handlebars";
import fs from "fs";

import { IMailProvider } from "../IMailProvider";

@injectable()
class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
  }

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {

    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const templateParse = handlebars.compile(templateFileContent);

    const templateHTML = templateParse(variables);

    const client = await this.createAccountFake()
    const message = await client.sendMail({
      to,
      from: "Rentx <noreplay@rentx.com.br>",
      subject,
      html: templateHTML,
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }

  async createAccountFake() {
    return new Promise<any>((resolve, reject) => {
      nodemailer
        .createTestAccount()
        .then((account) => {
          const transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
              user: account.user,
              pass: account.pass,
            },
          });

          resolve(transporter)
        })
        .catch((err) => {
          console.error(err)
          reject(null)
        });
    })
  }
}

export { EtherealMailProvider };