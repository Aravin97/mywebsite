const Headtab   = require("./headtab");
const Intro     = require("./intro");
const Clock     = require("./liveclock");
const Movies    = require("./movies");
const Countdown = require("./countdown");
const Quiz = require("./quiz");
const Timespend = require("./timespend");


function App(){
    return(
        <main>
            <Headtab/>
            <Intro/>
            <Clock/>
            <Movies/>
            {/* <Countdown/>
            {/* <div id="football" class="slide">
                <Quiz/>
                </div> */}
                <Quiz/>
            <div id="slidefour" class="slide">
            </div>
            <Timespend/>
        </main>
    );
}

module.exports = App;