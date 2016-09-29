/*document.getElementsByTagName("html")[0].style.width = "300px";
document.getElementsByTagName("html")[0].style.height = "150px";*/
document.addEventListener('DOMContentLoaded', function() {
var saveButton = document.getElementById('save');
  var siteUrl;
  var min;
  var hour;
  var d=new Date();
  saveButton.addEventListener('click', function()
   {
    var e1 = document.getElementById("hours");
    var hour = e1.options[e1.selectedIndex].text;
    var e2 = document.getElementById("minutes");
    var min = e2.options[e2.selectedIndex].text;
    chrome.storage.sync.get('myArray', function(data) { 
     siteUrl = (document.getElementById("siteurl").value).toString();

    /* hour = (document.getElementById("hour").value);
     min = (document.getElementById("min").value);*/
     var list=[];
     list.push(siteUrl);
     list.push(hour);
     list.push(min);
     list.push(2020);
     list.push(1);
     list.push(1);
     list.push(1);
     list.push(1);
    (data.myArray).push(list);
    chrome.storage.sync.set({'myArray':data.myArray}, function(){
    });
    });
  	
  },false);
  var viewButton = document.getElementById('view');
  viewButton.addEventListener('click', function() {
    var d=new Date();
chrome.storage.sync.get('myArray', function(data) { 
      var s="";
      for(var i=0;i<data.myArray.length;i++)
      {
            s+=data.myArray[i]+"          ";
      }
      alert(s);
  	});
  },false);
   var removeAllButton = document.getElementById('removeAll');
  removeAllButton.addEventListener('click', function() {
chrome.storage.sync.get('myArray', function(data) {
     data.myArray.length=0;
      chrome.storage.sync.set({'myArray':data.myArray}, function(){
    });  
     });
  },false);
   var editButton = document.getElementById('change');
  editButton.addEventListener('click', function() {
   var siteUrl1= (document.getElementById("siteurl").value).toString();
     var hour1= (document.getElementById("hour").value);
     var min1= (document.getElementById("min").value);
chrome.storage.sync.get('myArray', function(data) { 
       for (var i=0;i<data.myArray.length;i++)
      {
      if(siteUrl1==(data.myArray[i])[0])
      {
         data.myArray[i][1]=(document.getElementById("hour").value);
         data.myArray[i][2]=(document.getElementById("min").value);
         break;
      }
     }
     chrome.storage.sync.set({'myArray':data.myArray}, function(){
    });
    });
  },false);
},false);
