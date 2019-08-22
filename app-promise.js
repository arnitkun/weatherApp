/**
 * Weather app using promises, via the third party library axios
 * 
 */

const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const weather = require('./forecast/forecast');
const axios = require('axios');
const KEY = '1XBOra9jpZAJWg2ayYbc1O8aoak6OOuB'; //dude remove this, import it from a gitignored file
const forecastKey = '9c8f4e872df61b2d8100217aad9a9d58';

 const argv = yargs
    .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for.',
        string: true,
    }
})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURI(argv.address);
var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${forecastKey}/${lat},${lng}`;
 
   // console.log(lat);//TODO add cover cases for errors
   // console.log(lng);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}, but feels like ${apparentTemperature}`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND') {
        console.log("unable to connect to api servers.");
    } else {
        console.log(e.message);
    }
})

