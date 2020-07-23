const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI( direccion )
    
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDb-ZczlJVroJTW-qdJoUQf-4xZUYcZNJc`)
    
    if( resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay Resultados para la ciudad ${ direccion }`);
    }
      
    let location = resp.data.results[0];
    let coord = location.geometry.location;

    //console.log('Direccion:', location.formatted_address);
    //console.log('lat:', coord.lat);
    //console.log('lng:', coord.lng);
    //console.log( JSON.stringify( resp.data, undefined, 2) );
    //console.log( resp.data );
    
    return {
        direccion: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }
}

module.exports = {
    getLugarLatLng
}

