import $ from 'jquery'
import swal from 'sweetalert';


const good = "#009966"; 
const moderate = "#ffde33"; 
const sensitive = "#ff9933"; 
const unhealty = "#cc0033"; 
const very_unhealty="#660099"; 
const hazardous ="#7e0023"; 


export function APIRequest(url) {

    $.ajax({
        dataType: "json",
        url: url,
        data: "",
        success: function () { console.log("API request completed") },

    });

    $.getJSON(url, function (data) {

        if (data.status != 'ok') {
            swal("Citta' non valida!", "...inserisci una città valida!");
            return false;
        }

        assign(data);
    });

}
function assign(data) {
    $('#city-name').html(data.data.city.name);
    $('#time-info').html(data.data.time.s);
    $('#aqi-number').html(data.data.aqi);

    colorize('aqi-number', data.data.aqi);
    colorizeText('aqi-text', data.data.aqi);

    for (let id in data.data.iaqi) {
        $('#' + id).html(data.data.iaqi[id].v);
        colorize(id, data.data.iaqi[id].v);
    }


}



function colorize(id, value) {
    // console.log(id, value);

    switch (true) {
        case (value < 50): $('#' + id).css('background-color', good);  break;
        case (value < 100): $('#' + id).css('background-color', moderate); break;
        case (value < 150): $('#' + id).css('background-color', sensitive); break;
        case (value < 200): $('#' + id).css('background-color', unhealty); break;
        case (value < 300): $('#' + id).css('background-color',  very_unhealty); break;

    }

}

function colorizeText(id, value) {
    console.log(id, value);

    switch (true) {
        case (value < 50):
            $('#' + id).html("Good");
            $('#' + id).css('color',  good);
            break;
        case (value < 100):
            $('#' + id).html("Moderate");
            $('#' + id).css('color', moderate);
            break;
        case (value < 150):
            $('#' + id).html("Unhealthy for Sensitive Groups");
            $('#' + id).css('color', sensitive);
            break;
        case (value < 200):
            $('#' + id).html("Unhealthy");
            $('#' + id).css('color',  unhealty);
            break;
        case (value < 300):
            $('#' + id).html("Very Unhealthy");
            $('#' + id).css('color', very_unhealty);
            break;
        case (value > 300):
            $('#' + id).html("Hazardous");
            $('#' + id).css('color', hazardous);
            break;

    }

}