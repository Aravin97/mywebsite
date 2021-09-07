const {useState, useEffect} = require("react");

function Timespend(){
    const [time, setTime] = useState(0);

    useEffect(function (){
        setTimeout(function(){
            setTime(time + 1);
        }, 60000);
    }, [time]);

    return (
        <div>
            <p3>You have been on this page for {time} minutes</p3>
        </div>
    );
}

module.exports = Timespend;