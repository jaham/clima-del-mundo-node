const axios = require(`axios`)

const getClima = async(lat, lng) => {

    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f88d3a646af16ee76d828945ea2346de`)

    return clima.data.main.temp

}

module.exports = {
    getClima
}