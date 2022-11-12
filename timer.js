const hours = document.querySelector('.hour')
const minutes = document.querySelector('.minute')
const seconds = document.querySelector('.second')

setInterval(function(){
   let date = new Date();
   hours.innerHTML = date.getHours()
   minutes.innerHTML = date.getMinutes()
   seconds.innerHTML = date.getSeconds()
},1000)