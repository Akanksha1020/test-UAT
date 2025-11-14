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
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'UAT Backend Server is running!', status: 'OK' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));