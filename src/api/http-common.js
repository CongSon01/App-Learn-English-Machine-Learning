import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.1.187:5000/",
  headers: {
    "Content-type": "application/json"
  }
});