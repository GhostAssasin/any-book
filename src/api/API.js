import axios from "axios";

const API_KEY = 'c455d00cb0f64e238a5282d75921f27e'
const API_URL = 'https://api.wegmans.io'


export default axios.create({
    baseURL: API_URL,
    responseType: "json",
    headers: {
        "TAI-Sub-Key": API_KEY
    }
})
