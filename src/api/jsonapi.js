import axios from 'axios'

export default axios.create({
    baseUrl: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 9cjIr-rg85wSH2zMX0uGPo229oPT4nu9qOmIVxt608M",
    },
})                      