import axios from "axios"

const instance = axios.create({
    baseURL: 'https://my-tinder-endpoints.herokuapp.com/'
})

export default instance