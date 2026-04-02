import { useEffect, useState } from "react";

import axios from "../api/axios";

import Navbar from "../components/Navbar";

import { Container, Typography, Avatar, Grid, CardMedia } from "@mui/material";

export default function Profile({ darkMode, setDarkMode }) {
  const [posts, setPosts] = useState([]);

  const username = localStorage.getItem("username");

  const fetchPosts = async () => {
    const res = await axios.get("/posts");

    const myPosts = res.data.filter((p) => p.username === username);

    setPosts(myPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {/* Navbar add */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Container maxWidth="md">
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              margin: "auto",
            }}
            src="https://i.pravatar.cc/150"
          />

          <Typography variant="h5">{username}</Typography>

          <Typography>{posts.length} posts</Typography>
        </div>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {posts.map((post) => (
            <Grid item xs={4} key={post._id}>
              <CardMedia
                component="img"
                height="140"
                image={post.image || "https://via.placeholder.com/150"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
