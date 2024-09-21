import axios from "axios";  // Correct import

const client = axios.create({
  baseURL: "/api",  // Make sure this is correctly set in your .env
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",  // Enable CORS for all origins
  },
});

export default client;