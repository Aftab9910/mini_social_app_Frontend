import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";

import { AuthProvider } from "./context/AuthContext";

function App() {
  // dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );

  // theme
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route
              path="/feed"
              element={<Feed darkMode={darkMode} setDarkMode={setDarkMode} />}
            />

            <Route
              path="/profile"
              element={
                <Profile darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
