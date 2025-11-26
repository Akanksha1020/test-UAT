import React, { useState } from "react";
import {
  Paper,
  TextField,
  MenuItem,
  Typography,
  Button,
  Stack
} from "@mui/material";

export default function ExecutionForm({ onClose }) {
  const [pr, setPr] = useState("");
  const [material, setMaterial] = useState("");
  const [services, setServices] = useState("");
  const [execution, setExecution] = useState("");

  const handleSubmit = () => {
    alert("Execution form submitted successfully!");
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
        Execution Form
      </Typography>

      {/* PR Dropdown */}
      <TextField
        fullWidth
        select
        label="PR"
        value={pr}
        onChange={(e) => setPr(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="PR001">Available</MenuItem>
        <MenuItem value="PR002">Not Available</MenuItem>
        
      </TextField>

      {/* Material Dropdown */}
      <TextField
        fullWidth
        select
        label="Material"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="Available">Available</MenuItem>
        <MenuItem value="Not Available">Not Available</MenuItem>
      </TextField>

      {/* Services Field */}
      <TextField
        fullWidth
        select
        label="Services"
        value={services}
        onChange={(e) => setServices(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="InHouse">Inhouse</MenuItem>
        <MenuItem value="Outsourced">Outsourced</MenuItem>  
        <MenuItem value="InHouse Fabricator">Inhouse Fabricator</MenuItem>
        <MenuItem value="InHouse Labor">Inhouse Labor</MenuItem>
        <MenuItem value="JCB">JCB</MenuItem>
        <MenuItem value="Sourcing">Sourcing</MenuItem>
        <MenuItem value="Shuttering Rental">Shuttering Rental</MenuItem>
        <MenuItem value="Outsourced civil work">Outsourced civil work</MenuItem>  
      </TextField>

      {/* Execution Field */}
      <TextField
        fullWidth
        label="Execution"
        value={execution}
        onChange={(e) => setExecution(e.target.value)}
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