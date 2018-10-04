const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: `Direcion de ola suida que va a consultar el clima`,
        demand: true
    }
}).argv

module.exports = {
    argv
}