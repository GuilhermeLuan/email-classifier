const api = axios.create({
  baseURL: "https://email.guilhermeluan.dev",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
