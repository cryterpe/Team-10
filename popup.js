
function formdata() 
{
  var today = new Date();
 
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[today.getDay()];
  
  var date = n+' '+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
  document.write(date);
}
formdata();

