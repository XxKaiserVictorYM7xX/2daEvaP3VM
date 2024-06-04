let apk = document.getElementById('typewriter');
 
let typewriter = new Typewriter(apk, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Victor Montenegro')
  .pauseFor(200)
  .deleteChars(10)
  .start();




const express = require('express')
const app = express()

app.get('/dashboard', function (req, res) {
  res
})




