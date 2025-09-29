import axios from "axios";

const api = axios.create({
  baseURL: "email.guilhermeluan.dev",
  headers: {
    "Content-Type": "application/json",
  },
});