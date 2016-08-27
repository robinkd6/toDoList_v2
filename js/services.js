weatherApp.service('cityService', function() {
    this.city = "Seattle, WA";
})

weatherApp.service('weatherService', ['$resource', function($resource) {
									 
									 
	this.getWeather = function(city, days) {
	   var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5baa9306b1bb56c0e45a185b05fc2425", {
        callback: "JSON_CALLBACK"
    },
    {
       get: {
           method: "JSONP"
       } 
    });
    
    return weatherAPI.get({ q: city, cnt: days });
	};
}]);