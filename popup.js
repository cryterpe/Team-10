let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };


function formdata() 
{
var titleData= document.getElementById("myTitle").value;
var locationData= document.getElementById("myLocation").value;
var startdateData= document.getElementById("myStartDate").value;
var starttimeData= document.getElementById("myStartTime").value; 
var enddateData= document.getElementById("myEndDate").value;
var endtimeData= document.getElementById("myEndTime").value;
var descriptionData= document.getElementById("description").value;

}

