const nodemailer = require("nodemailer");

const mailConfiguration = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 587,
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

mailConfiguration.verify((err) => {
  if (err) {
    console.error("❌ SMTP configuration invalid:", err);
  } else {
    console.log("✅ SMTP server is ready to send emails.");
  }
});

module.exports = mailConfiguration;
