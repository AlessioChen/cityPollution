


let token = process.env.TOKEN
let city = 'prato'

fetch('https://api.waqi.info/feed/'+city+'/?token='+token)
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('https://api.waqi.info/feed/here/'+'?token='+token)
  .then(response => response.json())
  .then(data => console.log(data));


