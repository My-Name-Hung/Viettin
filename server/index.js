const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
require("dotenv").config();
const cron = require("node-cron");

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: [
      "https://viettinvaluation.com",
      "https://viettin.netlify.app",
      "http://localhost:5173",
    ],
  })
);
cron.schedule("*/5 * * * *", () => {
  // Google Sheets API setup
  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
  const auth = new google.auth.JWT(
    process.env.CLIENT_EMAIL, // Service account email from JSON
    null, // No key file required
    process.env.PRIVATE_KEY.replace(/\\n/g, "\n"), // Handle newlines in private key
    SCOPES
  );
  const sheets = google.sheets({ version: "v4", auth });

  const SPREADSHEET_ID = process.env.SHEET_ID; // Replace with your Google Sheet ID

  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const sendEmailNotification = (formData) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "support@viettinvaluation.com",
      subject: "Yêu cầu sử dụng dịch vụ Việt Tín",
      text: `
      Có một yêu cầu sử dụng dịch vụ mới được ghi nhận tại sheet: https://docs.google.com/spreadsheets/d/1IUQWT6O_6KyZ2VlXPnb1i8iw1tSR9j8UnR0QR5iAvaI/edit?gid=0#gid=0

      Full Name: ${formData.fullName}
      Phone Number: ${formData.phoneNumber}
      Email: ${formData.email}
      Request Details: ${formData.requestDetails || "No details provided"}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent successfully:", info.response);
      }
    });
  };

  app.post("/api/appraisal-request", async (req, res) => {
    const { fullName, email, phoneNumber, requestDetails } = req.body;

    try {
      const request = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:D",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        resource: {
          values: [[fullName, phoneNumber, email, requestDetails]],
        },
      };

      await sheets.spreadsheets.values.append(request);
      sendEmailNotification({ fullName, phoneNumber, email, requestDetails });

      res.status(200).json({
        message: "Request saved successfully and email notification sent.",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// speed run server
const https = require("https");

exports.handler = async (event, context) => {
  const url = "https://viettin-server.onrender.com";

  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve({
          statusCode: 200,
          body: "Server pinged successfully",
        });
      } else {
        reject(
          new Error(`Server ping failed with status code: ${res.statusCode}`)
        );
      }
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
};
