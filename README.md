# 📬 Mailer Action – Send Emails from GitHub Actions

Send plain text or HTML emails automatically from your GitHub Actions workflows using this action powered by **Nodemailer**.

---

## 🚀 Features

- ✅ Send emails using any SMTP provider (Gmail, Outlook, Mailgun, etc.)
- 📩 Supports plain text and HTML messages
- 🔐 Uses encrypted secrets (no hardcoded credentials)
- 🛠️ Simple integration into any CI/CD pipeline

---

## 📦 Usage

### ✅ Step 1: Configure Your SMTP Secrets

Go to your **repository Settings → Secrets → Actions**, and add:

| Secret Name     | Description                                              |
| --------------- | -------------------------------------------------------- |
| `MAIL`          | Your SMTP email address (e.g., `noreply@yourdomain.com`) |
| `MAIL_PASSWORD` | Your email password or SMTP token                        |
| `MAIL_HOST`     | SMTP host (e.g., `smtp.gmail.com`)                       |
| `MAIL_PORT`     | SMTP port (usually `465` or `587`)                       |

---

### ✅ Step 2: Use the Action in Your Workflow

```yaml
name: Notify Team

on:
  push:
    branches:
      - main

jobs:
  send-email:
    runs-on: ubuntu-latest
    steps:
      - name: Send Deployment Email
        uses: wesdevteam/maileraction@v1
        with:
          to: team@example.com
          subject: "✅ Production Deployment Complete"
          text: "The deployment was completed successfully."
          html: "<p>The <strong>deployment</strong> to production was successful 🎉</p>"
        env:
          MAIL: ${{ secrets.MAIL }}
          MAIL_PASSWORD: ${{ secrets.MAIL_PASSWORD }}
          MAIL_HOST: ${{ secrets.MAIL_HOST }}
          MAIL_PORT: ${{ secrets.MAIL_PORT }}
```

---

## ✉️ Inputs

| Name      | Required | Description                       |
| --------- | -------- | --------------------------------- |
| `to`      | ✅ Yes   | Recipient email address           |
| `subject` | ✅ Yes   | Subject line of the email         |
| `text`    | ✅ Yes   | Plain text message                |
| `html`    | ❌ No    | HTML-formatted message (optional) |

---

## 🧪 Example Use Cases

- ✅ Notify developers on production deployment
- 📦 Alert stakeholders about CI/CD pipeline status
- 🔔 Send manual reports or reminders

---

## 🛠️ Development

To test locally:

```bash
git clone https://github.com/wesdevteam/maileraction.git
cd maileraction
npm install
node index.js
```

Ensure you have a `.env` file or environment variables set for:

```env
MAIL=you@example.com
MAIL_PASSWORD=yourpassword
MAIL_HOST=smtp.yourhost.com
MAIL_PORT=587
```

---

## 📄 License

MIT © [WES Dev Team](./LICENSE)
