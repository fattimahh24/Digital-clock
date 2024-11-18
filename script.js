function digitalClock(){
    const time = new Date();
    let hours = time.getHours();
    let  minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('clock').innerHTML =  hours + ":" + minutes + ":" + seconds +" " ;
    setTimeout(digitalClock, 1000);
   } 
   function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }
  function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }