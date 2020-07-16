import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID f5bTvvo9cN2R6gdYC_i18xV4IL6TIHgnCY1cEeaIlcQ'
    }
});