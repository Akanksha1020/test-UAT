import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      {/* Space for Topbar */}
      <Box sx={{ height: '80px' }} />

      {/* Sidebar Items */}
      <Box sx={{ overflow: "auto" }}>
        <List>
          {/* Dashboard */}
          <ListItemButton
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: isActive("/") ? "#e3f2fd" : "transparent",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ListItemIcon>
              <DashboardIcon color={isActive("/") ? "primary" : "inherit"} />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{
                fontWeight: isActive("/") ? "bold" : "normal",
              }}
            />
          </ListItemButton>

          {/* Projects List */}
          <ListItemButton
            onClick={() => navigate("/projects")}
            sx={{
              backgroundColor: isActive("/projects") ? "#e3f2fd" : "transparent",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ListItemIcon>
              <FolderIcon color={isActive("/projects") ? "primary" : "inherit"} />
            </ListItemIcon>
            <ListItemText
              primary="Projects List"
              primaryTypographyProps={{
                fontWeight: isActive("/projects") ? "bold" : "normal",
              }}
            />
          </ListItemButton>

          {/* Task Tracker */}
          <ListItemButton
            onClick={() => navigate("/Tasktracker")}
            sx={{
              backgroundColor: isActive("/Tasktracker") ? "#e3f2fd" : "transparent",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ListItemIcon>
              <AssignmentIcon color={isActive("/Tasktracker") ? "primary" : "inherit"} />
            </ListItemIcon>
            <ListItemText
              primary="Task Tracker"
              primaryTypographyProps={{
                fontWeight: isActive("/Tasktracker") ? "bold" : "normal",
              }}
            />
          </ListItemButton>

          {/* Reports */}
          <ListItemButton
            onClick={() => navigate("/Reports")}
            sx={{
              backgroundColor: isActive("/Reports") ? "#e3f2fd" : "transparent",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ListItemIcon>
              <BarChartIcon color={isActive("/Reports") ? "primary" : "inherit"} />
            </ListItemIcon>
            <ListItemText
              primary="Reports"
              primaryTypographyProps={{
                fontWeight: isActive("/Reports") ? "bold" : "normal",
              }}
            />
          </ListItemButton>

          {/* Settings */}
          <ListItemButton
            onClick={() => navigate("/Settings")}
            sx={{
              backgroundColor: isActive("/Settings") ? "#e3f2fd" : "transparent",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ListItemIcon>
              <SettingsIcon color={isActive("/Settings") ? "primary" : "inherit"} />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                fontWeight: isActive("/Settings") ? "bold" : "normal",
              }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

