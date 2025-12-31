// import axios from 'axios'

// export const axiosInstance = axios.create({
//     headers: {
//        // credentials: 'include',
//        // method: 'POST',
//         'Content-Type': 'application/json',
//         Authorization: `bearer ${localStorage.getItem('tokenForScalerMovies')}`
//     },
//     //withCredentials: true
// })

import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000", // optional if using absolute paths
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("tokenForScalerMovies");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
