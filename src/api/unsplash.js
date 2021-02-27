import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID XTWb9H1_w4ItRKCI_w_9aOnUhAIt74yAVoJu_vNvxgA",
    }
})