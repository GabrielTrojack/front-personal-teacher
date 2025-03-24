import axios from "axios";

const api = axios.create({
    baseURL: "https://ps-back-hhat.onrender.com"

})

export default api