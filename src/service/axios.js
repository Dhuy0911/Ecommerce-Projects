import axios from "axios";
import { CONFIG } from "./utils";

const appAxios = axios.create({
    baseURL: CONFIG.API_URL,
    headers:{
        'Content-type' : 'application/json'
    }
});

export default appAxios;