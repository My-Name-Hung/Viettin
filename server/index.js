const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["https://viettin.netlify.app", "http://localhost:5173"],
  })
);

// Google Sheets API setup
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const auth = new google.auth.GoogleAuth({
  keyFile: "./mythic-veld-412903-9a1709d84126.json", // Replace with the path to your Google service account key
  scopes: SCOPES,
});
const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.SHEET_ID; // Replace with your Google Sheet ID

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services too, such as Yahoo, Outlook, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address (configured in .env)
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password (configured in .env)
  },
});

const sendEmailNotification = (formData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: "support@viettinvaluation@gmail.com", // The recipient's email (configured in .env or hardcoded)
    subject: "Yêu cầu sử dụng dịch vụ Việt Tín", // Subject line
    text: `
      Có một yêu cầu sử dụng dịch vụ mới được ghi nhận tại sheet:https://docs.google.com/spreadsheets/d/1IUQWT6O_6KyZ2VlXPnb1i8iw1tSR9j8UnR0QR5iAvaI/edit?gid=0#gid=0

      Full Name: ${formData.fullName}
      Phone Number: ${formData.phoneNumber}
      Email: ${formData.email}
      Request Details: ${formData.requestDetails || "No details provided"}
    `,
  };

  // Send email
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
    // Append the data to the Google Sheet
    const request = {
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:D", // Adjust range based on your sheet structure
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [
          [fullName, phoneNumber, email, requestDetails], // Order matches the columns in your sheet
        ],
      },
    };

    await sheets.spreadsheets.values.append(request);

    // Send email notification
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

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
