const core = require("@actions/core");
const transporter = require("./config");

async function run() {
  try {
    const to = core.getInput("to");
    const subject = core.getInput("subject");
    const text = core.getInput("text");
    const html = core.getInput("html");

    const result = await transporter.sendMail({
      from: process.env.MAIL,
      to,
      subject,
      text,
      html,
    });

    core.info(`📧 Email sent successfully: ${result.messageId}`);
  } catch (error) {
    core.setFailed(`❌ Failed to send email: ${error.message}`);
  }
}

run();
