import { useEffect, useState } from "react";

import axios from "../api/axios";

import Navbar from "../components/Navbar";

import CreatePost from "../components/CreatePost";

import PostCard from "../components/PostCard";

import { Container } from "@mui/material";

// props receive karo
export default function Feed({ darkMode, setDarkMode }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {/* props pass karo */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Container maxWidth="sm">
        <CreatePost refresh={getPosts} />

        {posts.map((p) => (
          <PostCard key={p._id} post={p} refresh={getPosts} />
        ))}
      </Container>
    </>
  );
}
