import _, { result } from 'lodash';
import '../css/style.css';
import { APIRequest } from './utils'
import $ from 'jquery'



//requestAQI(city);
const token = process.env.AQI_TOKEN;
const apiUrl = process.env.AQI_URL;


var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    let url = apiUrl + 'geo' + ':' + crd.latitude + ';' + crd.longitude + '/?token=' + token;
    APIRequest(url);

}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);



//API REQUEST WITH CITY  NAME 
$('#button').click(function() {
    let city = $("#city").val();
    //TODO if city ='' handle it
    let url = apiUrl + city + '/?token=' + token;
    let result = APIRequest(url);
    console.log(result)
});