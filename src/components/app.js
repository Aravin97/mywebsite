const Headtab   = require("./headtab");
const Intro     = require("./intro");
const Clock     = require("./liveclock");
const Countdown = require("./countdown");
const Movies    = require("./movies");
const Timespend = require("./timespend");

function App(){
    return(
        <main>
            <Headtab/>
            <Intro/>
            <Clock/>
            <Movies/>
            {/* <Countdown/> */}
            {/* <Moviesearch/> */}
            <div id="slidethree" class="slide">
            </div>
            <div id="slidefour" class="slide">
            </div>
            <Timespend/>
        </main>
    );
}

module.exports = App;