import axios from "axios";

const customInstance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 10000,
});

export default customInstance;