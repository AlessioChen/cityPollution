import _, { result } from 'lodash';
import '../css/style.css';
import { APIRequest } from './utils'
import { geoLocation } from './geoLocation'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';


//requestAQI(city);
const token = process.env.AQI_TOKEN;
const apiUrl = 'https://api.waqi.info/feed/';


//API REQUEST WITH CITY  NAME 
// $('#request').keyup(function () {
//     let city = $("#input").val();
//     //TODO if city ='' handle it

//     if (city != '') {
//         

//         if (timer) clearTimeout(timer);
//         timer = setTimeout(function () {
//             APIRequest(url);
//         }, 250);
//     }

// });

$(function () {
    $('#request').submit(function () {
        let city = $("#city").val();

        if (city == '') {
            swal("Campo città vuoto", "...inserisci una città !");
            return false;
        }

        let url = apiUrl + city + '/?token=' + token;

        APIRequest(url);

        return false;


    })

});


// //API REQUEST with user coordinates when the page is load 
$(document).ready(geoLocation());



