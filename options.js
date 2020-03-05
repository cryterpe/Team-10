

let newName = document.getElementById('className');
let day1 = document.getElementById('C1');
let day2 = document.getElementById('C2');
let day3 = document.getElementById('C3');
let day4 = document.getElementById('C4');
let day5 = document.getElementById('C5'); 
let start = document.getElementById('classStartTime');
let end = document.getElementById('classEndTime');

function addClass()
{
  var today = new Date(); 
  var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
  document.write(date);
  alert("hello");
}

document.getElementById("submit").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + 
      newName.value + ": " + start.value + "-" + end.value + "<br>";
});



