const forecastKey = '9c8f4e872df61b2d8100217aad9a9d58';
const request = require('request');

var getWeather = (lat, long, callback) => {
    request({
    url: `https://api.darksky.net/forecast/${forecastKey}/${lat},${long}`,
    json: true
    },(error, response,body) => {
        if(error){
            callback('Unable to connect to forecast.io servers.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather, check your parameters');
        } else if ( response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })        
        }
    }
);
};

module.exports.getWeather = getWeather;