const { useState } = require("react");

function Clock(){
  let time = new Date().toLocaleTimeString();
  let day = new Date().toLocaleDateString();
  const [Time1, setTime1] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime1(time);
  }
  setInterval(updateTime, 1000)
  return(
    <div id="timing" class="time1">
      <h31>Digital Clock & Date</h31>
      <br></br>
      <h32>{time}</h32>
      <br></br>
      <h33>{day}</h33>
      <br></br>
      <h34>This digital time and date will change according to Malaysian local time and date</h34>
    </div>
  );
}

module.exports = Clock