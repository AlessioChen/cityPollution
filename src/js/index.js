import _, { result } from 'lodash';
import '../css/style.css';
import { APIRequest } from './utils'
import { geoLocation } from './geoLocation'
import $ from 'jquery'



//requestAQI(city);
const token = process.env.AQI_TOKEN;
const apiUrl = 'https://api.waqi.info/feed/';
let timer = null;



//API REQUEST WITH CITY  NAME 
$('#input').keyup(function () {
    let city = $("#input").val();
    //TODO if city ='' handle it

    if (city != '') {
        let url = apiUrl + city + '/?token=' + token;

        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            APIRequest(url);
        }, 250);
    }



});



//API REQUEST when the page is load 
$(document).ready(geoLocation());



