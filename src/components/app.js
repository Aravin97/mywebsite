const Headtab   = require("./bheadtab");
const Intro     = require("./cintro");
const Clock     = require("./dclock");
const Weather = require("./eweather");
const Movies    = require("./fmovies");
const Countdown = require("./gcountdown");
const Quiz = require("./hquiz");
const Quote = require("./iquote");
const Timespend = require("./ztimespend");


function App(){
    return(
        <main>
            <Headtab/>
            <Intro/>
            <Clock/>
            <Weather/>
            {/* <Movies/> */}
            <Countdown/>
            <Quiz/>
            <Quote/>
            <Timespend/>
        </main>
    );
}

module.exports = App;