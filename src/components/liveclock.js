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
    <div id="clock" class="slide">
      <div class="clockcontent">
      <h31>Digital Clock & Date</h31>
      <br></br><h32>{time}<br></br>{day}</h32>
      <br></br><h33>This digital clock and date will change according to Malaysian Timezone</h33>
      </div>
    </div>
  );
}

module.exports = Clock