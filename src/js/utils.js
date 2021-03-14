import $ from 'jquery'


export function APIRequest(url) {

    $.getJSON(url, function(result) {
        console.log(result);

        //TODO wrong input
        if (!result || result.status != 'ok') {
            console.log('Sorry, somenthin wrong happend: ');
        }

        //TODO no data
        if (result.data.lenght == 0) {
            console.log("Sorry, there is no result for you query!");
        }

        console.log(result.data.iaqi);
        let content = $('.content')

        for (let name in result.data.iaqi) {
        
            let l = result.data.iaqi;
            console.log(name);
            
            
            content.append($('<p>').html(name + ' : ' + l[name].v));
    
        }

    });
}