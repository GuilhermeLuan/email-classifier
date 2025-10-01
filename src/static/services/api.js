const api = axios.create({
  baseURL: window.API_URL || "https://email.guilhermeluan.dev",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
