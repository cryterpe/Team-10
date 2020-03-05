let addToSchedule = document.querySelector('enter-info');
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
var counter = 1;
var object = {};
document.getElementById("submit").addEventListener("click", function(){
  if (newName.value.length < 1) return;
  if (start.value.length < 1) return;
  if (end.value.length < 1) return;
  if (day1.checked == false && day2.checked == false && day3.checked == false && 
        day4.checked == false && day5.checked == false) return;

  var sentence = document.getElementById("demo").innerHTML + "<li>" + newName.value + ":</li>" + "<ul><li>" + "Days:"
  var dates = [];
  if(day1.checked == true){
    sentence = sentence + " Monday";
    dates[dates.length] = "Monday";
    
  }
  if(day2.checked == true){
    sentence = sentence + " Tuesday";
    dates[dates.length] = "Tuesday";
  }
  if(day3.checked == true){
    sentence = sentence + " Wednesday";
    dates[dates.length] = "Wednesday";
  }
  if(day4.checked == true){
    sentence = sentence + " Thursday";
    dates[dates.length] = "Thursday";
  }
  if(day5.checked == true){
    sentence = sentence + " Friday";
    dates[dates.length] = "Friday";
  }

  document.getElementById("demo").innerHTML = sentence + "</li><li>" + "Time: " + start.value + "-" + end.value + "</li></ul>";


  newName.value = "";
  day1.checked = false;
  day2.checked = false;
  day3.checked = false;
  day4.checked = false;
  day5.checked = false;
  start.value = "";
  end.value = "";

  
  newObj = new Array(newName.value, dates, start.value, end.value );
  object[counter] = newObj;
  counter = counter + 1;

  /*document.getElementById("huh").innerHTML = "woah here" + object[2];*/


  
});



