import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Loginpage from "./pages/Loginpage";
import Signinpage from "./pages/Signinpage";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Projectslist from "./pages/Projectslist";
import Settings from "./pages/Settings";
import Tasktracker from "./pages/Tasktracker";
import Reports from "./pages/Reports";

function App() {
  const isAuthenticated = localStorage.getItem("email");

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signin" element={<Signinpage />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <>
                <Topbar />
                <Box sx={{ display: "flex", height: "100vh" }}>
                  <Sidebar />
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    marginTop: '80px', // Topbar height
                    padding: 2,
                    overflow: 'auto',
                    height: 'calc(100vh - 80px)',
                  }}
                >
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/projects" element={<Projectslist />} />
                    <Route path="/Tasktracker" element={<Tasktracker />} />
                    <Route path="/Reports" element={<Reports />} />
                    <Route path="/Settings" element={<Settings />} />
                  </Routes>
                  </Box>
                </Box>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
export default App;