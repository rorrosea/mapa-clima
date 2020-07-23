const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async ( direccion ) =>{


    try {
        let coors = await lugar.getLugarLatLng( direccion );
        let teml = await clima.getClima( coors.lat, coors.lng );

        return `El clima en ${ coors.direccion } es ${ teml }`;    
    
    } catch (error) {
        
        return `No se pudo determinar el clima en ${ direccion }`;
    }

    
} 


getInfo( argv.direccion )
.then( mensaje => console.log( mensaje ) )
.catch( e => console.log( e ));
