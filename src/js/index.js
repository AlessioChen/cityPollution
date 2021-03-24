import _, { result } from 'lodash';
import '../css/style.css';
import { APIRequest } from './utils'
import { geoLocation } from './geoLocation'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 

dom.i2svg() 

//requestAQI(city);
const token = process.env.AQI_TOKEN;
const apiUrl = 'https://api.waqi.info/feed/';


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



