import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "../api/axios";
import { AuthContext } from "../context/AuthContext";

import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      login(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("username", res.data.user.username);

      window.location = "/feed";
    } catch (err) {
      console.log(err);

      setError("User not found or password incorrect ❌");
    }
  };

  return (
    <Card sx={{ maxWidth: 400, m: "100px auto" }}>
      <CardContent>
        <Typography variant="h5">Login</Typography>

        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button fullWidth variant="contained" onClick={submit}>
          Login
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>
            Signup
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
