const axios = require(`axios`)

const getLugar = async(direccion) => {

    let encodeURi = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURi}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

    if (resp.data.status === `ZERO_RESULTS`) {
        throw new Error(`No hay resultado para la ciudad ${direccion}`)
    }


    let address = JSON.stringify(resp.data.results[0].formatted_address, undefined, 2)
    let lat = JSON.stringify(resp.data.results[0].geometry.location.lat, undefined, 2)
    let lng = JSON.stringify(resp.data.results[0].geometry.location.lng, undefined, 2)

    return {
        address,
        lat,
        lng
    }


}
module.exports = {
    getLugar
}