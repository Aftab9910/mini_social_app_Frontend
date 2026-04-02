import { AppBar, Toolbar, Typography, Switch, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(10px)",

        background: darkMode ? "rgba(18,18,18,0.7)" : "rgba(255,255,255,0.7)",

        color: darkMode ? "#fff" : "#333",

        boxShadow: "none",

        borderBottom: darkMode ? "1px solid #333" : "1px solid #eee",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">MiniSocial 📸</Typography>

        <div>
          <Button
            component={Link}
            to="/feed"
            sx={{ color: darkMode ? "#fff" : "#333" }}
          >
            Feed
          </Button>

          <Button
            component={Link}
            to="/profile"
            sx={{ color: darkMode ? "#fff" : "#333" }}
          >
            Profile 👤
          </Button>

          <Switch
            checked={darkMode}
            onChange={() => {
              setDarkMode(!darkMode);

              localStorage.setItem("darkMode", !darkMode);
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
