const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
require("dotenv").config();

// Initialize Express app
const app = express();
app.use(bodyParser.json());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server URL
  })
);

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});

// API endpoint to handle the form submission
app.post("/api/appraisal-request", async (req, res) => {
  const { fullName, email, phoneNumber, requestDetails } = req.body; // Updated field names

  try {
    // Insert data into the PostgreSQL database (updated field names)
    const result = await pool.query(
      "INSERT INTO appraisal_requests (full_name, email, phone_number, request_details) VALUES ($1, $2, $3, $4) RETURNING *",
      [fullName, email, phoneNumber, requestDetails]
    );

    res.status(200).json({
      message: "Request saved successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error saving request:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message, // Include error message for debugging on frontend
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
