import axios from "axios";

const axiosUrl = axios.create({
    baseURL: "https://gamebackendnaskootbg.azurewebsites.net/"
})

export default axiosUrl;