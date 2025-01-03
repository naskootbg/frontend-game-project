import axios from "axios";

const axiosUrl = axios.create({
    baseURL: "http://localhost:8080/"
})

export default axiosUrl;