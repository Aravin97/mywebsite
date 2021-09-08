const Headtab = require("./headtab");
const Intro = require("./intro");
const Clock = require("./liveclock");
const Timespend = require("./timespend");

function App(){
    return(
        <main>
            <Headtab />
            <Intro/>
            <Clock />
            <div class="container">
            <h0><span>New Year Countdown</span></h0>
            </div>
            <div class="countdown">
            <div id="climate" class="weathers">
            </div>
            </div>
            <div id="slidethree" class="slide">
            </div>
            <div id="slidefour" class="slide">
            </div>
            <Timespend />
        </main>
    );
}

module.exports = App;