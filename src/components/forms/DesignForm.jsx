// import React from "react";
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

// export default function DesignForm({ onClose }) {
//   return (
//     <Dialog open onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Design Form</DialogTitle>
//       <DialogContent>
//         Design form content goes here
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Close</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  MenuItem,
  Stack,
} from "@mui/material";

export default function DesignUploadForm({ onClose }) {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    remark: "",
    category: "",
    version: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePreview = () => {
    if (file && file.type === "application/pdf") {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_blank");
    }
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  const handleSubmit = () => {
    alert("Design saved successfully!");
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
        Upload Design Document
      </Typography>

      {/* Upload Section */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ mb: 1, fontWeight: 500 }}>
          Upload PDF / Drawing File
        </Typography>

        <Button variant="contained" component="label" sx={{ mr: 2 }}>
          Select File
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            hidden
            onChange={handleFileChange}
          />
        </Button>

        {file && (
          <Box>
            <Typography sx={{ mt: 1, fontSize: "14px" }}>
              Selected File: {file.name}
            </Typography>

            {file.type === "application/pdf" && (
              <Button
                size="small"
                sx={{ mt: 1 }}
                variant="outlined"
                onClick={handlePreview}
              >
                Preview PDF
              </Button>
            )}
          </Box>
        )}
      </Box>

      {/* Input Fields */}
      <TextField
        fullWidth
        label="Design Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        multiline
        rows={3}
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Remark"
        name="remark"
        value={formData.remark}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        select
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        <MenuItem value="Architecture">Architecture</MenuItem>
        <MenuItem value="Structural">Structural</MenuItem>
        <MenuItem value="MEP">MEP</MenuItem>
        <MenuItem value="Electrical">Electrical</MenuItem>
        <MenuItem value="Plumbing">Plumbing</MenuItem>
      </TextField>

      <TextField
        fullWidth
        label="Version (Optional)"
        name="version"
        value={formData.version}
        onChange={handleChange}
        sx={{ mb: 3 }}
      />

      {/* Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button variant="outlined" color="primary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Design
        </Button>
      </Stack>
    </Paper>
  );
}
