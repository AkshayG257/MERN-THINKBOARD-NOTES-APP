import axios from "axios";
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";
console.log(BASE_URL);
console.log(import.meta.env.MODE);

const api = axios.create({
    baseURL : BASE_URL

})
export default api;