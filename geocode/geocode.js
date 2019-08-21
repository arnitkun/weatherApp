
const KEY = '1XBOra9jpZAJWg2ayYbc1O8aoak6OOuB'; //dude remove this, import it from a gitignored file
const request = require('request');
var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURI(address);

    request({url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to geolocation services.');
        }   //TODO: add additional error cases
        else{
            callback(undefined, {
                address: body.results[0].providedLocation.location,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
    //  console.log(JSON.stringify(body, undefined, 2));  //full output
    // console.log('Address: ', body.results[0].providedLocation.location);
    // console.log('Latitude: ', body.results[0].locations[0].latLng.lat);
    // console.log('Longitude: ', body.results[0].locations[0].latLng.lng);
    }
    });
};


module.exports.geocodeAddress = geocodeAddress;