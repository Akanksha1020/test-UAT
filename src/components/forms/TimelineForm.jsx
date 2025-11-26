import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Button,
  Stack
} from "@mui/material";

export default function TimelineForm({ onClose }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = () => {
    alert("Timeline submitted successfully!");
    if (onClose) onClose();
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  return (
    <Paper
      elevation={3}
          sx={{
        p: 4,
        width: "70%",
        margin: "auto",
        mt: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        Timeline Form
      </Typography>

      {/* Start Date */}
      <TextField
        fullWidth
        type="date"
        label="Start Date"
        InputLabelProps={{ shrink: true }}
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* End Date */}
      <TextField
        fullWidth
        type="date"
        label="End Date"
        InputLabelProps={{ shrink: true }}
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Deadline */}
      <TextField
        fullWidth
        type="date"
        label="Deadline Date"
        InputLabelProps={{ shrink: true }}
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        sx={{ mb: 3 }}
      />

      {/* Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Paper>
  );
}
