import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import AjwaProject from "./AjwaProject";
import Halol201 from "./Halol201";
import AMI from "./AMI";
import Halol39 from "./Halol39";
import Halol206 from "./Halol206";
import Halol270 from "./Halol270";
import Sachin from "./Sachin";
import SarojininagarDelhi from "./SarojininagarDelhi";
import LYNDRYVE from "./LYNDRYVE";
import Manjusar422 from "./Manjusar42-2";

const projects = [
  { id: 1, title: "Ajwa Industrial Project", date: "12/10/2024", status: "Ongoing" },
  { id: 2, title: "Manjusar 42-2", date: "01/09/2024", status: "Completed" },
  { id: 3, title: "LYNDRYVE", date: "15/08/2024", status: "In Progress" },
  { id: 4, title: "AMI", date: "10/07/2024", status: "Hold" },
  { id: 5, title: "Halol 39", date: "10/07/2024", status: "Ongoing" },
  { id: 6, title: "Halol 201", date: "10/07/2024", status: "Ongoing" },
  { id: 7, title: "Halol 206", date: "10/07/2024", status: "Ongoing" },
  { id: 8, title: "Halol 270", date: "10/07/2024", status: "Ongoing" },
  { id: 9, title: "Sachin", date: "10/07/2024", status: "Ongoing" },  
  { id: 10, title: "Sarojininagar Delhi", date: "10/07/2024", status: "Ongoing" },
];

const projectComponents = {
  "Ajwa Industrial Project": AjwaProject,
  "Manjusar 42-2": Manjusar422,
  "LYNDRYVE": LYNDRYVE,
  "AMI": AMI,
  "Halol 39": Halol39,
  "Halol 201": Halol201,
  "Halol 206": Halol206,
  "Halol 270": Halol270,
  "Sachin": Sachin,
  "Sarojininagar Delhi": SarojininagarDelhi,
};

export default function ProjectList() {
  const [activeProject, setActiveProject] = React.useState(null);

  const handleViewProject = (projectTitle) => {
    if (projectComponents[projectTitle]) {
      setActiveProject(projectTitle);
    } else {
      alert(`Viewing project: ${projectTitle}`);
    }
  };

  if (activeProject) {
    const ProjectComponent = projectComponents[activeProject];
    return <ProjectComponent onBack={() => setActiveProject(null)} />;
  }


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100 px",
        backgroundColor: "#f4f6f8",
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Paper
       elevation={0}
  sx={{
    p: 3,
    width: "100%",
    height: "100%",
    borderRadius: 0,
    boxShadow: "none",
    backgroundColor: "#ffffffff",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Project List
        </Typography>

        <TableContainer sx={{ flexGrow: 1 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#555" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#555" }}>Project Title</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#555" }}>Start Date</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "#555" }}>Status</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold", color: "#555" }}>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} hover sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell sx={{ fontWeight: "500" }}>{project.id}</TableCell>
                  <TableCell sx={{ fontWeight: "500", color: "#333" }}>{project.title}</TableCell>
                  <TableCell>{project.date}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        px: 2,
                        py: 0.5,
                        borderRadius: "16px",
                        backgroundColor: project.status === "Completed" ? "#e8f5e8" : project.status === "Ongoing" ? "#fff3cd" : "#e3f2fd",
                        color: project.status === "Completed" ? "#2e7d32" : project.status === "Ongoing" ? "#f57c00" : "#1976d2",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        textAlign: "center",
                        display: "inline-block",
                        minWidth: "80px"
                      }}
                    >
                      {project.status}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
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
                        onClick={() => handleViewProject(project.title)}
                      >
                        View
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
                        onClick={() => alert(`Editing project: ${project.title}`)}
                      >
                        Edit
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
