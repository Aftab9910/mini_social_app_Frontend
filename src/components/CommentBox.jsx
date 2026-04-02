import { useState } from "react";
import axios from "../api/axios";
import { TextField, Button } from "@mui/material";

export default function CommentBox({ postId, refresh }) {
  const [comment, setComment] = useState("");

  const token = localStorage.getItem("token");

  const sendComment = async () => {
    await axios.post(
      `/posts/${postId}/comment`,
      { comment },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setComment("");

    refresh();
  };

  return (
    <div>
      <TextField
        size="small"
        placeholder="Write comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button onClick={sendComment}>send</Button>
    </div>
  );
}
