const Headtab   = require("./headtab");
const Intro     = require("./intro");
const Clock     = require("./liveclock");
const Movies    = require("./movies");
const Countdown = require("./countdown");
const Quiz = require("./quiz");
const Weather = require("./weather");
const Timespend = require("./timespend");
const Quote = require("./quote");

function App(){
    return(
        <main>
            <Headtab/>
            {/* <Intro/> */}
            {/* <Clock/> */}
            {/* <Movies/> */}
            {/* <Countdown/> */}
            {/* <Quiz/> */}
            <Weather/>
            <Quote/>
            <Timespend/>
        </main>
    );
}

module.exports = App;