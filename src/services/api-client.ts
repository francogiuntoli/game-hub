import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'c46d45553d8d42c28b22b4a56639cbd2'
    }
})