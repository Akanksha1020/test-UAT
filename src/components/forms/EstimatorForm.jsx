import React, { useState } from "react";
import { Box, TextField, MenuItem, Typography, Paper, Stack, Button } from "@mui/material";

export default function EstimationForm({ onClose }) {
  const [uom, setUom] = useState("");
  const [qty, setQty] = useState("");
  const [supplyRate, setSupplyRate] = useState("");
  const [installationRate, setInstallationRate] = useState("");

  const handleCancel = () => {
    if (onClose) onClose();
  };

  const handleSubmit = () => {
    alert("Estimation submitted successfully!");
    if (onClose) onClose();
  };

  const totalCost =
    (parseFloat(supplyRate) || 0) + (parseFloat(installationRate) || 0);

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
        Fill Estimation Form
      </Typography>

      {/* UOM */}
      <TextField
        fullWidth
        select
        label="UOM"
        value={uom}
        onChange={(e) => setUom(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="KG">KG</MenuItem>
        <MenuItem value="SQM">SQM</MenuItem>
        <MenuItem value="CUM">CUM</MenuItem>
      </TextField>

      {/* QTY */}
      <TextField
        fullWidth
        label="QTY"
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Supply Rate */}
      <TextField
        fullWidth
        label="Supply Rate"
        type="number"
        value={supplyRate}
        onChange={(e) => setSupplyRate(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Installation Rate */}
      <TextField
        fullWidth
        label="Installation Rate"
        type="number"
        value={installationRate}
        onChange={(e) => setInstallationRate(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Total Cost */}
      <TextField
        fullWidth
        label="Total Cost"
        type="number"
        value={totalCost}
        InputProps={{
          readOnly: true,
        }}
        sx={{ mb: 2 }}
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