const request = require('request');

request({url: 'http://open.mapquestapi.com/geocoding/v1/address?key=1XBOra9jpZAJWg2ayYbc1O8aoak6OOuB&location=bangalore,%20karnataka',
        json: true
    }, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(body.results[0].locations[0].latLng);
});