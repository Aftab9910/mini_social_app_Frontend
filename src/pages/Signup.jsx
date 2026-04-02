import { useState } from "react";

import axios from "../api/axios";

import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function Signup() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const submit = async () => {
    await axios.post("/auth/signup", { username, email, password });

    window.location = "/";
  };

  return (
    <Card sx={{ maxWidth: 400, m: "100px auto" }}>
      <CardContent>
        <Typography variant="h5">Signup</Typography>

        <TextField
          fullWidth
          label="Username"
          margin="normal"
          onChange={(e) => setUsername(e.target.value)}
        />

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
          Signup
        </Button>
      </CardContent>
    </Card>
  );
}
