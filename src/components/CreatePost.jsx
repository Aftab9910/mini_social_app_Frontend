import { useState } from "react";
import axios from "../api/axios";

import { TextField, Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

export default function CreatePost({ refresh }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const token = localStorage.getItem("token");

  const submitPost = async () => {
    console.log("IMAGE URL : ", image);

    await axios.post(
      "/posts",
      {
        text,
        image, // only these 2 needed
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setText("");
    setImage("");

    refresh();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card
        sx={{
          mb: 3,
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <CardContent>
          <TextField
            fullWidth
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            placeholder="Paste image URL..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button variant="contained" fullWidth onClick={submitPost}>
            Post 🚀
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
