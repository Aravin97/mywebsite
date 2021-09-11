const {useState} = require("react");

const api = {
    key: "bd244a344bbb89379ad4eda0cd104fc8",
    base: "https://api.openweathermap.org/data/2.5/",
}


function Weather(){
    const[query, setQuery] = useState('');
    const[weather, setWeather] = useState('');

    const search = evt => {
        if(evt.key === "Enter") {
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
    return(
        <div id="weathers" class="slide">
            <div class="search-box">
                <input 
                type="text"
                class="search-bar"
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
                />
            </div>
            <div class="location-box">
                <div class="location">{weather.name}, {weather.sys.country}</div>
                <div class="date">{dateBuilder(new Date())}</div>
            </div>
        <h81>Testt...</h81>
        </div>
    );
}

module.exports = Weather;


//   return (
//     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
//       <main>
//         <div className="search-box">
//           <input 
//             onKeyPress={search}
//           />
//         </div>
//         {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//         ) : ('')}
//       </main>
//     </div>
//   );
// }

// export default App;