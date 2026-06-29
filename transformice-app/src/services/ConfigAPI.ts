import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7265/",
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");

    if (token)
        config.headers.Authorization = `Bearer ${token}`;

    return config;
});

const Axios = api;

export default Axios;