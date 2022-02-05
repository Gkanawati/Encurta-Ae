import axios from "axios";

/* Minha chave: */
export const key = "1e9d6ceab6a4be0273cac027a97cf284f088b759";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;