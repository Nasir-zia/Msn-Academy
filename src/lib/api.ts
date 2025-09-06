import axios from "axios";

const api = axios.create({
  baseURL: "https://msn-certificate-application.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  
});


export default api;
