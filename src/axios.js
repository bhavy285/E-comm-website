import axios from 'axios';

const instance = axios.create({
    baseURL : '...' // THE API (CLOUD FUNCTION) URL

})

export default instance;