const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./forecast/forecast');


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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(results.address);
                console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });
        
    }
});

//lat long cb
