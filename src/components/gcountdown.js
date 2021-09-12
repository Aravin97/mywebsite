const {useEffect, useRef, useState} = require("react");

function Countdown(){
    const [timerDays, setTimerDays]         = useState('00');
    const [timerHours, setTimerHours]       = useState('00');
    const [timerMinutes, setTimerMinutes]   = useState('00');
    const [timerSeconds, setTimerSeconds]   = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Jan 01, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = countdownDate - now;

            const days      = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours     = Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes   = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds   = Math.floor((diff % (1000 * 60)) / 1000);

            if (diff < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });
    return(
        <div id="newyear" class="slide">
            <div class="celebrate">
            <h41>New Year Countdown</h41>
            <br></br>
            <h42>2022</h42>
            <br></br>
            <div class="celebrate2">
                <div class="cdays">
                    <h43>{timerDays}<br></br>Days</h43>
                    <h43>{timerHours}<br></br>Hours</h43>
                    <h43>{timerMinutes}<br></br>Minutes</h43>
                    <h43>{timerSeconds}<br></br>Seconds</h43>
                <br></br>
                <h44>“Here’s a toast to the future, a toast to the past, and a toast to our friends, far and near. The past a bright dream; may our friends remain faithful and clear”</h44>
                </div>
            </div>
            </div>
        </div>
    );
}

module.exports = Countdown;