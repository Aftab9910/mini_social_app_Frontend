import axios from "axios";

const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:4000/api"
    : "https://mini-social-app-backend-j2jq.onrender.com/api";

export default axios.create({
  baseURL: BASE_URL,
});
