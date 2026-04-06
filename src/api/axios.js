import axios from "axios";

export default axios.create({
  //baseURL: "https://mini-social-app-backend-j2jq.onrender.com/api",
  baseURL: "http://localhost:4000/api",
});
