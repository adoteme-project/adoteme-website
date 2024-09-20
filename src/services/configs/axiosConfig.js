import {axios} from 'axios';

const client = axios.create({
    baseURL: import.meta.env.CLIENT_DOMAIN,
})

export default client;