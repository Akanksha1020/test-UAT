import { Box } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "240px", // Sidebar width
          marginTop: "80px",   // Topbar height
          height: "calc(100vh - 80px)",
          overflow: "hidden",
          p: 2,
          boxSizing: "border-box",

        }}
      >
        {children}
      </Box>

      {/* Topbar */}
      <Topbar />
    </Box >
  );
};

export default Layout;