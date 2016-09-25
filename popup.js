
document.addEventListener('DOMContentLoaded', function() {
var saveButton = document.getElementById('save');
  var siteUrl;
  var min;
  var hour;
  Date d=new Date();
  saveButton.addEventListener('click', function()
   {
    chrome.storage.sync.get('myArray', function(data) { 
      alert(data.myArray.length);
      alert(data.myArray);
     siteUrl = (document.getElementById("siteurl").value).toString();
     hour = (document.getElementById("hour").value);
     min = (document.getElementById("min").value);
     var list=[];
     list.push(siteUrl);
     list.push(hour);
     list.push(min);
     list.push(2020);
     list.push(1);
     list.push(1);
     list.push(1);
     list.push(1);
    /* list.push(d.getFullYear().toString);
     list.push(d.getMonth().toString);
     list.push(d.getDate().toString);
     list.push(d.getHours().toString);
     list.push(d.getMinutes().toString);*/
    (data.myArray).push(list);
    chrome.storage.sync.set({'myArray':data.myArray}, function(){
    });
    });
  	
  },false);
  var viewButton = document.getElementById('view');
  viewButton.addEventListener('click', function() {
chrome.storage.sync.get('myArray', function(data) { 
      var s="";
      for(var i=0;i<data.myArray.length;i++)
      {
            s+=data.myArray[i]+"          ";
      }
      alert(s);
  	});
  },false);
},false);
