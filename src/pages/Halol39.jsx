import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function Halol39Project({ onBack }) {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Paper sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={onBack}
            sx={{ mr: 2 }}
          >
            Back
          </Button>
          
        </Box>
      </Paper>
    </Box>
  );
}