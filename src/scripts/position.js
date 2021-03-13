export class Position {
    constructor(options){
        this.options = options;

    }

    success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    get position(){
        return navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    }
}