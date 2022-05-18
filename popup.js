document.addEventListener('DOMContentLoaded', function() {
  var saveButton = document.getElementById('save');
  var siteUrl;
  var min;
  var hour;
  var d=new Date();
  var optionB=document.getElementById('option');
  chrome.storage.sync.get('myArray', function(data) {
    if (typeof data.myArray === "undefined") {
      var a=[];
      var list=[];
      list.push("asdsadsa");
      list.push("");
      list.push("");
      list.push("");
      list.push("");
      list.push("");
      list.push("");
      list.push("");
      a.push(list);
      chrome.storage.sync.set({'myArray':a}, function(){

      });
    }});
  var element2 = document.getElementById('minutes');
  element2.value = 30;
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url =tabs[0].url;
    (document.getElementById("siteurl")).setAttribute("value",url+"");
  });

  optionB.addEventListener('click',function()
  {
    chrome.tabs.create({ url: "options.html" });

  });
  saveButton.addEventListener('click', function()
  {

    var e1 = document.getElementById("hours");
    var hour = e1.options[e1.selectedIndex].text;
    var e2 = document.getElementById("minutes");
    var min = e2.options[e2.selectedIndex].text;

    chrome.storage.sync.get('myArray', function(data) {
      if (typeof data.myArray === "undefined") {
        var a=[];
        var list=[];
        list.push("");
        list.push("");
        list.push("");
        list.push("");
        list.push("");
        list.push("");
        list.push("");
        list.push("");
        a.push(list);
       chrome.storage.sync.set({'myArray':a}, function(){
        alert("chrome.storage is now initialized , please click save again");
      });
     }
     if((ValidURL(document.getElementById("siteurl").value.toString()))==true)
     {
      var url = new URL(document.getElementById("siteurl").value);
      var domain = url.hostname;
      siteUrl = domain.toString();
      var b=true;
      for (var i=0;i<data.myArray.length;i++)
      {
        if((data.myArray[i])[0]==="")
        {
          data.myArray.splice(i,1);
          chrome.storage.sync.set({'myArray':data.myArray}, function(){
          });
        }
      }
      for (var i=0;i<data.myArray.length;i++)
      {
        if(siteUrl==(data.myArray[i])[0])
        {
         b=false;
         break;
       }
     }
     if(b==true){
      document.getElementById("list").innerHTML=("saved   "+domain);
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
    }
    else
      alert("already saved , please enter another url");
  }
  else
  {
    alert("Please enter a valid url");
  }

});

  },false);
},false);
function ValidURL(str) {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  // var regex=/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
  if(!regex .test(str)) {
    return false;
  } else {
    return true;
  }
}
