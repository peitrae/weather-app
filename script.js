
var apiKey = "d5e306ac02634e69ba4545024869e0a4";
var url = "http://api.openweathermap.org/data/2.5/weather?";
var units = "&units=metric";
var tempUnits = "&degC";
var humUnits = "%";
var windUnits = "m/s";


var iconSrc = {
  "01" : "https://image.flaticon.com/icons/svg/382/382573.svg",
  "02" : "https://image.flaticon.com/icons/svg/382/382565.svg",
  "03" : "https://image.flaticon.com/icons/svg/213/213988.svg",
  "04" : "https://image.flaticon.com/icons/svg/213/213990.svg",
  "09" : "https://image.flaticon.com/icons/svg/382/382561.svg",
  "10" : "https://image.flaticon.com/icons/svg/382/382562.svg",
  "11" : "https://image.flaticon.com/icons/svg/382/382571.svg",
  "13" : "https://image.flaticon.com/icons/svg/382/382568.svg",
  "50" : "https://image.flaticon.com/icons/svg/213/213992.svg"
}

if (navigator.geolocation) {
 	navigator.geolocation.getCurrentPosition(function(position) {
    
		$.ajax({
			url: url + "lat=" + position.coords.latitude +"&lon=" + position.coords.longitude + units + "&appid=" + apiKey,
			dataType: 'jsonp',
			type: "GET",
			success: function(data){

				var iconP = data.weather[0].icon;
        
				$("#cityCountry").html(data.name + "," +data.sys.country);
				$("#temp").html(data.main.temp + tempUnits);
				$("#humidity").html("Humidity: " + data.main.humidity + humUnits);
				$("#windSpeed").html("Wind: " + data.wind.speed + windUnits);				
				$("#img").html('<img src="'+ iconSrc[iconP.slice(0,-1)] + '" id = "icon">');

      }
		});
  	});
}