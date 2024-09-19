import {axios} from 'axios';

const client = axios.create({
    baseURL: process.env.CLIENT_DOMAIN,
})

export default client;