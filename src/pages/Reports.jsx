import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Chip,
  MenuItem,
  Autocomplete,
  Grid,
  Divider,
} from "@mui/material";
import { CloudUpload, FileDownload, Download } from "@mui/icons-material";

export default function Reports() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [images, setImages] = useState([]);
  const [remarks, setRemarks] = useState("");
  const [downloadProject, setDownloadProject] = useState(null);
  const [downloadDateFrom, setDownloadDateFrom] = useState("");
  const [downloadDateTo, setDownloadDateTo] = useState("");

  const projects = [
    { id: 1, title: "Ajwa Industrial Project" },
    { id: 2, title: "Manjusar 42-2" },
    { id: 3, title: "LYNDRYVE" },
    { id: 4, title: "AMI" },
    { id: 5, title: "Halol 39" },
    { id: 6, title: "Halol 201" },
    { id: 7, title: "Halol 206" },
    { id: 8, title: "Halol 270" },
    { id: 9, title: "Sachin" },
    { id: 10, title: "Sarojininagar Delhi" },
  ];

  const getTasksForProject = (id) => {
    const map = {
      1: ["RCC Column Casting", "RCC Slab/Beam", "Staircase Fixing"],
      5: ["Foundation Work", "Column Casting", "Beam Installation"],
      6: ["Excavation", "Steel Fixing", "Concrete Pouring"],
      7: ["Formwork", "Reinforcement", "Finishing Work"],
      8: ["Site Preparation", "Foundation", "Superstructure"],
      9: ["Earthwork", "Structural Work", "MEP Installation"],
      10: ["Demolition", "New Construction", "Utilities"]
    };
    return map[id] || [];
  };

  const availableTasks = selectedProject ? getTasksForProject(selectedProject.id) : [];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleSubmit = () => {
    if (!selectedProject || !selectedTask) {
      alert("Please select both project and task");
      return;
    }
    alert(`Report submitted for ${selectedProject.title} - ${selectedTask}`);
    setImages([]);
    setRemarks("");
    setSelectedProject(null);
    setSelectedTask(null);
  };

  const handleDownloadReport = () => {
    if (!downloadProject) {
      alert("Please select a project to download reports");
      return;
    }
    const dateRange = downloadDateFrom && downloadDateTo 
      ? ` from ${downloadDateFrom} to ${downloadDateTo}`
      : " (all dates)";
    alert(`Downloading reports for ${downloadProject.title}${dateRange}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        backgroundColor: "#f4f6f8",
        p: 0,
        boxSizing: "border-box",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 1,
          width: "100%",
          height: "100%",
          borderRadius: 0,
          boxShadow: "none",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Reports Management
        </Typography>

        <Grid container spacing={0.5}>
          {/* Submit Report Section */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={1} 
              sx={{ 
                p: 3, 
                borderRadius: 1,
                height: "100%",
                width: "700px"
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#1976d2", 
                  fontWeight: "bold", 
                  mb: 3,
                  borderBottom: "2px solid #1976d2",
                  pb: 1
                }}
              >
                Submit New Report
              </Typography>

              <Stack spacing={3}>
                <TextField
                  type="date"
                  label="Report Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  variant="outlined"
                />

                <Autocomplete
                  options={projects}
                  value={selectedProject}
                  getOptionLabel={(option) => option.title}
                  onChange={(e, val) => {
                    setSelectedProject(val);
                    setSelectedTask("");
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Project" required />
                  )}
                  fullWidth
                />

                <TextField
                  select
                  label="Select Task"
                  value={selectedTask || ""}
                  onChange={(e) => setSelectedTask(e.target.value)}
                  disabled={!selectedProject}
                  fullWidth
                  required
                >
                  {availableTasks.map((task) => (
                    <MenuItem key={task} value={task}>
                      {task}
                    </MenuItem>
                  ))}
                </TextField>

                <Box>
                  <Typography sx={{ fontWeight: 500, mb: 2, color: "#555" }}>
                    Upload Photos
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<CloudUpload />}
                    sx={{
                      borderColor: "#1976d2",
                      color: "#1976d2",
                      textTransform: "none",
                      py: 1.5,
                      px: 3,
                      "&:hover": { backgroundColor: "#1976d2", color: "#fff" },
                    }}
                  >
                    Select Photos
                    <input type="file" accept="image/*" multiple hidden onChange={handleImageUpload} />
                  </Button>

                  {images.length > 0 && (
                    <Chip
                      sx={{ mt: 2, ml: 2 }}
                      label={`${images.length} photo(s) selected`}
                      color="primary"
                      variant="outlined"
                    />
                  )}
                </Box>

                <TextField
                  label="Remarks (Optional)"
                  multiline
                  rows={4}
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  fullWidth
                  placeholder="Add any additional notes or observations..."
                />

                <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ pt: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: "6px",
                      textTransform: "none",
                      px: 2,
                      borderColor: "#1976d2",
                      color: "#1976d2",
                      '&:hover': {
                        backgroundColor: "#1976d2",
                        color: "white"
                      }
                    }}
                    onClick={() => {
                      setImages([]);
                      setRemarks("");
                      setSelectedProject(null);
                      setSelectedTask(null);
                      setDate(new Date().toISOString().split("T")[0]);
                    }}
                  >
                    Clear
                  </Button>

                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: "6px",
                      textTransform: "none",
                      px: 2,
                      backgroundColor: "#4caf50",
                      '&:hover': {
                        backgroundColor: "#45a049"
                      }
                    }}
                    disabled={!selectedProject || !selectedTask}
                    onClick={handleSubmit}
                  >
                    Submit Report
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          {/* Download Reports Section */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                borderRadius: 2,
                height: "100%",
                width: "700px",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#4caf50", 
                  fontWeight: "bold", 
                  mb: 3,
                  borderBottom: "2px solid #4caf50",
                  pb: 1
                }}
              >
                Download Reports
              </Typography>

              <Stack spacing={3}>
                <Autocomplete
                  options={projects}
                  value={downloadProject}
                  getOptionLabel={(option) => option.title}
                  onChange={(e, v) => setDownloadProject(v)}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Project" required />
                  )}
                  fullWidth
                />

                <Box>
                  <Typography sx={{ fontWeight: 500, mb: 2, color: "#555" }}>
                    Date Range (Optional)
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      type="date"
                      label="From Date"
                      value={downloadDateFrom}
                      onChange={(e) => setDownloadDateFrom(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                    <TextField
                      type="date"
                      label="To Date"
                      value={downloadDateTo}
                      onChange={(e) => setDownloadDateTo(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Stack>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 500, mb: 2, color: "#555" }}>
                    Download Options
                  </Typography>
                  <Stack spacing={2}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<FileDownload />}
                      disabled={!downloadProject}
                      onClick={handleDownloadReport}
                      sx={{
                        borderRadius: "6px",
                        textTransform: "none",
                        px: 2,
                        borderColor: "#4caf50",
                        color: "#4caf50",
                        "&:hover": { backgroundColor: "#4caf50", color: "#fff" },
                      }}
                    >
                      Download PDF Report
                    </Button>

                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Download />}
                      disabled={!downloadProject}
                      onClick={() => {
                        if (!downloadProject) {
                          alert("Please select a project");
                          return;
                        }
                        alert(`Downloading Excel report for ${downloadProject.title}`);
                      }}
                      sx={{
                        borderRadius: "6px",
                        textTransform: "none",
                        px: 2,
                        borderColor: "#ff9800",
                        color: "#ff9800",
                        "&:hover": { backgroundColor: "#ff9800", color: "#fff" },
                      }}
                    >
                      Download Excel Report
                    </Button>
                  </Stack>
                </Box>

                <Stack direction="row" justifyContent="flex-end" sx={{ pt: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      textTransform: "none",
                      px: 3,
                      py: 1,
                      borderColor: "#666",
                      color: "#666",
                      '&:hover': {
                        backgroundColor: "#666",
                        color: "white"
                      }
                    }}
                    onClick={() => {
                      setDownloadProject(null);
                      setDownloadDateFrom("");
                      setDownloadDateTo("");
                    }}
                  >
                    Clear
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}