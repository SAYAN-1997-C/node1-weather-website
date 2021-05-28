const request = require('request')

const forecast = (latitude,longitude,callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=720ee4f85dd121fcb60edee9bd78d459&query='+latitude+','+longitude

    request({url,json : true},(error, {body}={} ) => {

        if(error){
            callback('Unable to connect to Weather App',undefined)
        }else  if(body.error){
            callback('Unable to find location. try another location!',undefined)
        }
        else{
            const weatherDesc = body.current.weather_descriptions[0]
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            callback(undefined,weatherDesc+'. It is currently '+temperature+' degrees out. It is feels like '+feelslike+' degree out.')
        }
    })
}

module.exports = forecast