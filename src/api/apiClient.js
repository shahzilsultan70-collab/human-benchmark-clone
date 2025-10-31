import axios from "axios";

const api = axios.create({
  baseURL: "/api", // this will use Vercel serverless API
});

export default api;
