
function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "florida";

	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	fetch(request)
	
	.then(function(response) {
		return response.json();
	})
	
	.then(function(response) {
		onAPISucces(response);	
	})
	
	.catch(function (error) {
		onAPIError();
	});
}


function onAPISucces(response) {
	var type = response.weather[0].description;

	// Temperatuur in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


function onAPIError() {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}

getAPIdata();
