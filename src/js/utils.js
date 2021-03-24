import $ from 'jquery'
import swal from 'sweetalert';




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





    // $.getJSON(url, function (result) {

    //     console.log(result.data.time.s);

    //     //TODO wrong input
    //     if (!result || result.status != 'ok') {
    //         console.log('Sorry, somenthin wrong happend: ');
    //     }

    //     //TODO no data
    //     if (result.data.lenght == 0) {
    //         console.log("Sorry, there is no result for you query!");
    //     }

    //     //city name & time 
    //     let elem = document.getElementById('stationName');
    //     if (result.data.city != null)
    //         elem.textContent = "Stazione: " + result.data.city.name + " alle: " + result.data.time.s;



    //     //aqi value 
    //     elem = document.getElementById('staionValue');
    //     elem.textContent = result.data.aqi;

    //     for (let id in result.data.iaqi) {
    //         let l = result.data.iaqi;
    //         let value = l[id].v;
    //         elem = document.getElementById(id);

    //         if (elem != null)
    //             elem.textContent = value;



    //     }

    // });
}
function assign(data) {
    $('#city-name').html(data.data.city.name);
    $('#time-info').html(data.data.time.s);
    $('#aqi-text').html( "AQI <span id='aqi'>"+ data.data.aqi+"</span> ");

    colorize('aqi', data.data.aqi);

    for (let id in data.data.iaqi) {
        $('#' + id).html(data.data.iaqi[id].v);
        colorize(id, data.data.iaqi[id].v);
    }


}



function colorize(id, value) {
    // console.log(id, value);

    switch (true) {
        case (value < 50): $('#' + id).addClass('good'); break;
        case (value < 100): $('#' + id).addClass('normal'); break;
        case (value < 150): $('#' + id).addClass('sensitive'); break;
        case (value < 200): $('#' + id).addClass('bad'); break;
        case (value < 300): $('#' + id).addClass('verybad'); break;
          case (value > 300): $('#' + id).addClass('danger'); break;
      
    }

}