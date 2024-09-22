let cityinput=document.getElementById("city")
let button=document.getElementById("button")
let Display=document.getElementById("display")

console.log(city)


button.addEventListener("click",()=>{
    let city = cityinput.value;
    let apikey = "your-api";
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`; // Use `units=metric` for Celsius
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        return response.json();
    })
    .then(data => {
        // Extract the desired weather data
        let temperature = data.main.temp; // Temperature in Celsius
        let weatherCondition = data.weather[0].description; // Description of the weather
        let humidity = data.main.humidity; // Humidity percentage
        Display.innerText = `Weather report is : Temperature is: ${temperature}°C, Weather Condition: ${weatherCondition}, Humidity: ${humidity}%`;
        
        // Display the extracted data (you can update the DOM elements)
        // console.log(`Temperature: ${temperature}°C`);
        // console.log(`Weather Condition: ${weatherCondition}`);
        // console.log(`Humidity: ${humidity}%`);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching the weather data:', error);
    });

    


})

