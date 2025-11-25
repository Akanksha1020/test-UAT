// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3001;

// app.use(express.json());

// app.use(cors({ origin: "http://localhost:5173" })); // Vite default port

// app.get('/', (req, res) => {
//   res.send('UAT backend running');
// });

// app.get('/api/health', (req, res) => {
//   res.json({ status: 'ok' });
// });

// app.listen(port, () => {
//   console.log(`UAT backend listening on http://localhost:${port}`);
// });

// uat-backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check routes
app.get("/", (req, res) => {
  res.json({ message: "UAT Backend Server is running!", status: "OK" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));   // your auth routes
app.use("/api/projects", require("./routes/projectRoutes")); // your project routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`🚀 Server running on port ${PORT}`)
);