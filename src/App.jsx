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
            {/* login page */}
            <Route path="/" element={<Login />} />

            {/* signup page */}
            <Route path="/signup" element={<Signup />} />

            {/* extra route so /register also works */}
            <Route path="/register" element={<Signup />} />

            {/* feed */}
            <Route
              path="/feed"
              element={<Feed darkMode={darkMode} setDarkMode={setDarkMode} />}
            />

            {/* profile */}
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
