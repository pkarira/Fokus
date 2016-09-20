
document.addEventListener('DOMContentLoaded', function() {
  var saveButton = document.getElementById('save');
  //var array=new Array();
  var siteUrl;
  saveButton.addEventListener('click', function()
   {
    chrome.storage.sync.get('myArray', function(data) { 
      alert(data.myArray.length);
      alert(data.myArray);
     // array=data.myArray;
     siteUrl = document.getElementById("siteurl").value;
    (data.myArray).push(siteUrl);
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