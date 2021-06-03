const nodemailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "78fa5333747012",
    pass: "1d307d6c068bbf",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "kbhthl11@gmail.com",
  to: "kbhthl11@gmail.com",
  subject: "테스트메일",
  text: "테스트내용",
};

send(email_data);
