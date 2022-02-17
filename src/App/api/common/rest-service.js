import axios from "axios";

const RestService = axios.create({
  baseURL: "http://localhost:1111/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default RestService;
