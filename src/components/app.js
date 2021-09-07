const Headtab = require("./headtab");
const Intro = require("./intro");
const MovieSearch = require("./moviesearch");
const Timespend = require("./timespend");
// const Countdown = require("./countdown");

function App(){
    return(
        <main>
            <Headtab />
            <Intro/>
            <div id="climate" class="weathers">
            </div>
            <div class="container">
            <h0><span>New Year Countdown</span></h0>
            <div class="countdown">
                <div id="day">Day</div>
                <div id="hour">Hour</div>
                <div id="minute">Minute</div>
                <div id="second">Second</div>
            </div>
            </div>
            <script type="text/javascript">
            </script>
            <div class="newyear" class="celebrate">
                </div>
            <div id="movie" class="msearch">
            <MovieSearch/>
                </div>
            <div id="slidethree" class="slide">
            </div>
            <div id="slidefour" class="slide">
            </div>
            <a href="#" class="to-top">
                <i class="fas fa-chevron-up"></i>
            </a>
            <div id="last" class="time">
            <Timespend />
                </div>
        </main>
    );
}

module.exports = App;