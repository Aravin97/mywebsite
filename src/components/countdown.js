// function Newyear(){
//     var countDate = new Date('Jan 1, 2021 00:00:00').getTime();
//     var now = newDate().getTime();
//     let gap = countDate - now;

//     var second = 1000;
//     var minute = second * 60;
//     var hour = minute * 60;
//     var day = hour * 24;

//     var d = Math.floor(gap/(day));
//     var h = Math.floor((gap % (day)) / (hour));
//     var m = Math.floor((gap & (hour)) / (minute));
//     var s = Math.floor((gap % (minute)) / second);

//     document.getElementById('day').innerText = d;
//     document.getElementById('hour').innerText = h;
//     document.getElementById('minute').innerText = m;
//     document.getElementById('second').innerText = s;
//     }
//     setInterval(function(){
//         newYear();
//     },1000)
//     return(
//         <div id="newyear" class="celebrate">
//             <h41><span41>Countdown New Year</span41>2020</h41>
//             <div class="count">
//                 <div id="day">NA</div>
//                 <div id="hour">NA</div>
//                 <div id="minute">NA</div>
//                 <div id="second">NA</div>
//             </div>
//         </div>
//     )
// }

// module.exports = Newyear;