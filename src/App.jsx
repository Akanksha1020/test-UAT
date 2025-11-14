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

  const ProtectedLayout = ({ children }) => (
    <>
      <Topbar />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginTop: '80px',
            padding: 2,
            overflow: 'auto',
            height: 'calc(100vh - 80px)',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signin" element={<Signinpage />} />
        
        {/* Protected Routes */}
        <Route path="/" element={
          isAuthenticated ? (
            <ProtectedLayout><Dashboard /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/projects" element={
          isAuthenticated ? (
            <ProtectedLayout><Projectslist /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/Tasktracker" element={
          isAuthenticated ? (
            <ProtectedLayout><Tasktracker /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/Reports" element={
          isAuthenticated ? (
            <ProtectedLayout><Reports /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/Settings" element={
          isAuthenticated ? (
            <ProtectedLayout><Settings /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />
      </Routes>
    </Router>
  );
}
export default App;