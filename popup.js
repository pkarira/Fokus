
document.addEventListener('DOMContentLoaded', function() {
  var saveButton = document.getElementById('save');
  saveButton.addEventListener('click', function()
   {
    var array = [];
    chrome.storage.sync.get('myArray', function(data) { 
      alert(data.myArray.length);
      array=data.myArray;
    });
  	var siteUrl = document.getElementById("siteurl").value;
    array.push(siteUrl);
  	chrome.storage.sync.set({'myArray':array}, function() {
    alert(array);
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