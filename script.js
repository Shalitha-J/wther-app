let weather = {
    apiKey: 'fb1fda5c811924d8364b44c9033e1bcb',
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=denver&units=metric&appid=fb1fda5c811924d8364b44c9033e1bcb"
        )
            .then((response) => response.json())
            .then((data) => console.log(response));

        
    },
    
};