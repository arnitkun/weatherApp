const request = require('request');
const yargs = require('yargs');

const KEY = '1XBOra9jpZAJWg2ayYbc1O8aoak6OOuB'; //dude remove this, import it from a gitignored file

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

request({url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    console.log('Address: ', body.results[0].providedLocation.location);
    console.log('Latitude: ', body.results[0].locations[0].latLng.lat);
    console.log('Longitude: ', body.results[0].locations[0].latLng.lng);
});