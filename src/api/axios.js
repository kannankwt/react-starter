import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://dev.tellaapp.com/web-api'
    }
);