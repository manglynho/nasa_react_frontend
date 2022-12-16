import axios from 'axios';
import { apiBaseUrl , apiKey } from '../constant';  

export const getImages = async () => {
    const req = axios.get(`${apiBaseUrl}`, {
        params: {
            sol: 30,
            api_key: apiKey,
            count: 6,
        }
    })
    const res = await req;
    return res;
}