import $ from 'jquery'


export function APIRequest(url) {

    $.getJSON(url, function (result) {

        console.log(result.data.time.s);

        //TODO wrong input
        if (!result || result.status != 'ok') {
            console.log('Sorry, somenthin wrong happend: ');
        }

        //TODO no data
        if (result.data.lenght == 0) {
            console.log("Sorry, there is no result for you query!");
        }

        //city name & time 
        let elem = document.getElementById('stationName');
        if (result.data.city != null)
            elem.textContent = "Stazione: " + result.data.city.name + " alle: " + result.data.time.s;



        //aqi value 
        elem = document.getElementById('staionValue');
        elem.textContent = result.data.aqi;

        for (let id in result.data.iaqi) {
            let l = result.data.iaqi;
            let value = l[id].v;
            elem = document.getElementById(id);

            if (elem != null)
                elem.textContent = value;



        }

    });
}

function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

