import axios from "../api/axios";

import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { motion } from "framer-motion";

import CommentBox from "./CommentBox";

export default function PostCard({ post, refresh }) {
  const token = localStorage.getItem("token");

  const likePost = async () => {
    await axios.put(
      `/posts/${post._id}/like`,

      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    refresh();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card
        sx={{
          mb: 3,

          borderRadius: "16px",

          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <CardContent>
          {/* Username */}

          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {post.username}
          </Typography>

          {/* Text */}

          <Typography sx={{ mt: 1 }}>{post.text}</Typography>

          {/* Image */}

          {post.image && (
            <Box
              component="img"
              src={post.image}
              alt="post"
              sx={{
                width: "100%",

                borderRadius: "12px",

                mt: 2,

                maxHeight: "420px",

                objectFit: "cover",
              }}
            />
          )}

          {/* Like */}

          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              mt: 1,
            }}
          >
            <motion.div whileTap={{ scale: 1.3 }}>
              <IconButton onClick={likePost}>
                <FavoriteIcon color="error" />
              </IconButton>
            </motion.div>

            <Typography>{post.likes.length}</Typography>
          </Box>

          {/* Comments */}

          <Typography variant="body2" sx={{ mt: 1 }}>
            Comments ({post.comments.length})
          </Typography>

          {post.comments.map((c) => (
            <Typography key={c._id} sx={{ fontSize: "14px" }}>
              <b>{c.username}</b> {c.comment}
            </Typography>
          ))}

          {/* Comment box */}

          <CommentBox postId={post._id} refresh={refresh} />
        </CardContent>
      </Card>
    </motion.div>
  );
}
