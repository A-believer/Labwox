// import { render } from "@react-email/render";
// import nodemailer from "nodemailer";

// import { Resend } from "resend";


// const transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "my_user",
//     pass: "my_password",
//   },
// });


// export async function sendMail(emailTemplate, senderEmail, userEmail, subject) {

//   const emailHtml = render(emailTemplate);

// const options = {
//   from: senderEmail,
//   to: userEmail,
//   subject: subject,
//   html: emailHtml,
// };
// await transporter.sendMail(options);

// }

// export const resend = new Resend('re_SzbQqJGB_HWQcVEmQHSBeAy2WKLXPebYS')
