import axios from "axios";

const axiosUrl = axios.create({
    baseURL: "https://gamebackendnaskootbg.azurewebsites.net/api/"
})

export default axiosUrl;