const argv = require(`./config/yargs`).argv
const getLugar = require(`./lugar/lugar`).getLugar
const getClima = require(`./clima/clima`).getClima

const getInfo = async(direccion) => {

    try {
        let coors = await getLugar(direccion)
        let temp = await getClima(coors.lat, coors.lng)

        return `el Clima en ${coors.address} es de ${temp}`
    } catch (e) { return `No sepudo determinar la temperatura para ${direccion}` }
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))