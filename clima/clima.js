const axios = require('axios');

const getClima = async (lat, lng) =>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2ee11fa648dc9821538bdb65c72b55c9`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}