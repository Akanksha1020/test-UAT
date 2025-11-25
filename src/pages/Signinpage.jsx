import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";

const Signinpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ " + data.message);
        return;
      }

      setMessage("✅ Signup successful! Redirecting...");
      setTimeout(() => (window.location.href = "/login"), 1500);

    } catch (err) {
      setMessage("❌ Error connecting to server");
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
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: 390,
          textAlign: "center",
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
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
        
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>

        {message && (
          <Typography
            sx={{
              mt: 2,
              color: message.includes("✅") ? "green" : "red",
              fontWeight: 500,
            }}
          >
            {message}
          </Typography>
        )}

        <Typography sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link href="/login" underline="hover" color="primary">
            Login
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signinpage;