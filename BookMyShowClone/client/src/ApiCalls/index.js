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
    baseURL: process.env.REACT_APP_API_URL, // optional if using absolute paths
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
