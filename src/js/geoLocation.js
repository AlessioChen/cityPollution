
import { APIRequest } from './utils'


const apiUrl = 'https://api.waqi.info/feed/';
const token =  process.env.AQI_TOKEN; 

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
    let url = apiUrl + 'geo' + ':' + crd.latitude + ';' + crd.longitude + '/?token=' + token;
    
    //sends and api request with user's coordinates
    APIRequest(url);


}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


export function geoLocation() {
    navigator.geolocation.getCurrentPosition(success, error, options);
}

