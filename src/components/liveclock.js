const {useState, useState} = require("react");

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return(
      <h6>{clockState}</h6>
  );
}

module.exports = Clock;