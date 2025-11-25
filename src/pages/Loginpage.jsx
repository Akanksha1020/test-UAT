import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";


function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Demo mode - bypass authentication for presentation
    if (email && password) {
      setMessage("✅ Login successful! Redirecting...");
      
      // Save demo credentials
      localStorage.setItem("token", "demo-token");
      localStorage.setItem("email", email);

      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      setMessage("❌ Please enter email and password");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8",
        width: '100vw',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 390, textAlign: "center" }}>
        <img
          src="/Labhlogo.png"
          alt="Labh Logo"
          style={{
            height: "60px",
            width: "auto",
            objectFit: "contain",
            marginBottom: "8px"
          }}
        />
        <Typography variant="body2" sx={{ mb: 2, color: "#666", fontWeight: "500" }}>
          AN EPC COMPANY | DESIGN TO DELIVER
        </Typography>
        <Box sx={{ width: "100%", height: "1px", backgroundColor: "#ddd", mb: 2 }} />
        <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
          Login
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: "#666", fontStyle: "italic" }}>
          Demo Mode - Use any email and password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="demo@labh.com"
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="demo123"
            sx={{ mb: 2 }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
              Login
          </Button>
        </form>
        {message && (
          <Typography sx={{ mt: 2, color: message.includes("✅") ? "green" : "red" }}>
            {message}
          </Typography>
        )}
        <Typography sx={{ mt: 2 }}>
          Don't have an account? <Link href="/signin" underline="hover" color="primary">Sign Up</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Loginpage;
