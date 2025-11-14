import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Topbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };


  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#3d7dbdff",
        width: "100%",
        height: "80px",
        left: 0,
        top: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1, // Above sidebar
        boxShadow: 5,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "80px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src="/Labhlogo.png"
            alt="Labh Logo"
            style={{
              height: "60px",
              width: "auto",
              objectFit: "contain",
              maxWidth: "200px",
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "6px",
              marginTop: "8px"
            }}  
            />
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" , ml: 12}}>Labh IND.</Typography>
        </Box>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Topbar;
