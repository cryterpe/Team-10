
var newName = document.getElementById('className').value;
var day1 = document.getElementById('C1').value;
var day2 = document.getElementById('C2').value;
var day3 = document.getElementById('C3').value;
var day4 = document.getElementById('C4').value;
var day5 = document.getElementById('C5').value;
var start = document.getElementById('classStartTime').value;
var end = document.getElementById('classStartTime').value;

function addClass(){

  var today = new Date();
  
  var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
  document.write(date);
}

addClass();
