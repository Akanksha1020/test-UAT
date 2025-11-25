import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import DesignForm from "./forms/DesignForm";
import EstimatorForm from "./forms/EstimatorForm";
import ExecutionForm from "./forms/ExecutionForm";
import TimelineForm from "./forms/TimelineForm";

const ProjectTaskBoard = ({ title, onBack }) => {
  const [openTask, setOpenTask] = useState(null);
  const [formType, setFormType] = useState(null);
  const [selectedSubTask, setSelectedSubTask] = useState(null);

  const tasks = [
    {
      id: 1,
      title: "Admin FF",
      subTasks: [
        { id: 1.1, name: "RCC Column Casting", designStatus: "Available", uom: "SQM", qty: 166 },
        { id: 1.2, name: "RCC Slab/Beam", designStatus: "Available", uom: "CUM", qty: 24 },
        { id: 1.3, name: "Staircase fixing", designStatus: "Available", uom: "SQM", qty: 36 },
      ],
    },
    {
      id: 2,
      title: "Admin Terrace & External",
      subTasks: [
        { id: 2.1, name: "Water tank relocation", designStatus: "N/A", uom: "NOS", qty: 3 },
        { id: 2.2, name: "External paint work", designStatus: "Done", uom: "SQM", qty: 120 },
      ],
    },
  ];

  return (
    <Box sx={{ p: 2, height: "100%", backgroundColor: "#f9f9f9" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title} 
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Add Task functionality")}
            sx={{ textTransform: "none" }}
          >
            Add Task
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onBack}
            sx={{ textTransform: "none" }}
          >
            ← Back
          </Button>
        </Box>
      </Box>

      {/* Task Table */}
      <Paper elevation={1}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell>UOM</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Design Status</TableCell>
                <TableCell>Actions</TableCell>   
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <React.Fragment key={task.id}>
                  <TableRow
                    sx={{ backgroundColor: "#e3f2fd", cursor: "pointer" }}
                    onClick={() => setOpenTask(openTask === task.id ? null : task.id)}
                  >
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton size="small">
                          {openTask === task.id ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                        <Typography fontWeight="bold">{task.title}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={5} sx={{ p: 0, border: 0 }}>
                      <Collapse in={openTask === task.id}>
                        <Table>
                          <TableBody>
                            {task.subTasks.map((sub) => (
                              <TableRow key={sub.id}>
                                <TableCell sx={{ pl: 6 }}>{sub.name}</TableCell>
                                <TableCell>{sub.uom}</TableCell>
                                <TableCell>{sub.qty}</TableCell>
                                <TableCell>{sub.designStatus}</TableCell>
                                <TableCell>
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => setSelectedSubTask(sub)}
                                  >
                                    View
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Subtask Detail View */}
      {selectedSubTask && (
        <Paper sx={{ mt: 2, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {selectedSubTask.name}
            </Typography>
            <Button onClick={() => setSelectedSubTask(null)}>← Back to Tasks</Button>
          </Box>
          
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <Button variant="outlined" onClick={() => setFormType("design")}>
               Add DESIGN [A]
            </Button>
            <Button variant="outlined" onClick={() => setFormType("estimator")}>
              Add ESTIMATOR [B]
            </Button>
            <Button variant="outlined" onClick={() => setFormType("execution")}>
              Add EXECUTION [C]
            </Button>
            <Button variant="outlined" onClick={() => setFormType("timeline")}>
              Add TIMELINE [D]
            </Button>
          </Box>
          
          <Box>
            <Typography><strong>UOM:</strong> {selectedSubTask.uom}</Typography>
            <Typography><strong>Quantity:</strong> {selectedSubTask.qty}</Typography>
            <Typography><strong>Design Status:</strong> {selectedSubTask.designStatus}</Typography>
          </Box>
        </Paper>
      )}

      {/* Forms */}
      {formType === "design" && <DesignForm onClose={() => setFormType(null)} />}
      {formType === "estimator" && <EstimatorForm onClose={() => setFormType(null)} />}
      {formType === "execution" && <ExecutionForm onClose={() => setFormType(null)} />}
      {formType === "timeline" && <TimelineForm onClose={() => setFormType(null)} />}
    </Box>
  );
};

export default ProjectTaskBoard;
