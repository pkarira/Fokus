
document.addEventListener('DOMContentLoaded', function() {
  var saveButton = document.getElementById('save');
  var myArray=new Array();
  saveButton.addEventListener('click', function()
   {
    chrome.storage.sync.get('myArray', function(data) { 
      alert(data.myArray.length);
      myArray=data.myArray;
    });
  	var siteUrl = document.getElementById("siteurl").value;
    myArray.push(siteUrl);
  	chrome.storage.sync.set({'myArray':myArray}, function() {
    alert(myArray);
  	});
  },false);
  var viewButton = document.getElementById('view');
  viewButton.addEventListener('click', function() {
  	chrome.storage.sync.get('myArray', function(data) { 
      var s="";
      for(var i=0;i<data.myArray.length;i++)
      {
            s+=data.myArray[i];
      }
      alert(s);
  	});
  },false);
},false);