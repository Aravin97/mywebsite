const { useState } = require("react");

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "bd244a344bbb89379ad4eda0cd104fc8"
}

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(res => res.json()).then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div id="weather" class="slide">
    <div class={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div class="temps">
        <h91>Weather Checker</h91>
        <br/>
        <p91>Type location name in searchbar and press Enter</p91>
        </div>
        <div class="searchbox">
          <input
            type="text21"
            class="searchbar"
            placeholder="Location..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div class="locationbox">
            <div class="location">
              {weather.name}, {weather.sys.country}</div>
            <div class="date">
              {dateBuilder(new Date())}</div>
          </div>
          <div class="weatherbox">
            <div class="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div class="weather">
              {weather.weather[0].main}
              </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
    </div>
  );
}

module.exports = Weather;