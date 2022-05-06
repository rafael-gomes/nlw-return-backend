import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "08b8bd567bb072",
    pass: "3a3499a200ca63"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData)  {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Rafael Gomes <rafaell.gomes@gmail.com>',
    subject,
    html: body,
  });
  }
}