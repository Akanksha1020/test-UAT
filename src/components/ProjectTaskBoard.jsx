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

  const tasks = [
    {
      id: 1,
      title: "Admin FF",
      subTasks: [
        { id: 1.1, name: "RCC Column Casting", status: "Available", uom: "SQM", qty: 166 },
        { id: 1.2, name: "RCC Slab/Beam", status: "Available", uom: "CUM", qty: 24 },
        { id: 1.3, name: "Staircase fixing", status: "Available", uom: "SQM", qty: 36 },
      ],
    },
    {
      id: 2,
      title: "Admin Terrace & External",
      subTasks: [
        { id: 2.1, name: "Water tank relocation", status: "N/A", uom: "NOS", qty: 3 },
        { id: 2.2, name: "External paint work", status: "Done", uom: "SQM", qty: 120 },
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
          {title} — Task Tracker
        </Typography>

        <Box>
          <Button variant="outlined" sx={{ mr: 1 }} onClick={() => setFormType("design")}>
            DESIGN [A]
          </Button>
          <Button variant="outlined" sx={{ mr: 1 }} onClick={() => setFormType("estimator")}>
            ESTIMATOR [B]
          </Button>
          <Button variant="outlined" sx={{ mr: 1 }} onClick={() => setFormType("execution")}>
            EXECUTION [C]
          </Button>
          <Button variant="outlined" sx={{ mr: 1 }} onClick={() => setFormType("timeline")}>
            TIMELINE
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onBack}
            sx={{ ml: 2, textTransform: "none" }}
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
                <TableCell>Status</TableCell>   
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
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={4} sx={{ p: 0, border: 0 }}>
                      <Collapse in={openTask === task.id}>
                        <Box sx={{ pl: 6, pr: 2, pb: 1 }}>
                          {task.subTasks.map((sub) => (
                            <TableRow key={sub.id}>
                              <TableCell>{sub.name}</TableCell>
                              <TableCell>{sub.uom}</TableCell>
                              <TableCell>{sub.qty}</TableCell>
                              <TableCell>{sub.status}</TableCell>
                            </TableRow>
                          ))}
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Forms */}
      {formType === "design" && <DesignForm onClose={() => setFormType(null)} />}
      {formType === "estimator" && <EstimatorForm onClose={() => setFormType(null)} />}
      {formType === "execution" && <ExecutionForm onClose={() => setFormType(null)} />}
      {formType === "timeline" && <TimelineForm onClose={() => setFormType(null)} />}
    </Box>
  );
};

export default ProjectTaskBoard;
