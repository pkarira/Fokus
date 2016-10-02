 document.addEventListener('DOMContentLoaded', function() {
   var viewButton = document.getElementById('view');
   viewButton.addEventListener('click', function() {
    var d=new Date();
    chrome.storage.sync.get('myArray', function(data) { 
      var s="";
      for(var i=0;i<data.myArray.length;i++)
      {
        s+="<br>"+data.myArray[i][0]+"&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;"+((parseInt((data.myArray[i])[1],10)*60)+(parseInt((data.myArray[i])[2],10))).toString()+" min"+"<br>";
      }
      document.getElementById("list").innerHTML=s;
      
    });
  },false);
   var removeAllButton = document.getElementById('removeAll');
   removeAllButton.addEventListener('click', function() {
    var spinner=document.getElementById("list");
    var array = [];
    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    spinner.appendChild(selectList);
    chrome.storage.sync.get('myArray', function(data) {
      for(var i=0;i<data.myArray.length;i++)
      {
        var option = document.createElement("option");
        option.value = data.myArray[i][0];
        option.text = data.myArray[i][0];
        selectList.appendChild(option);
      }
      var option = document.createElement("option");
      option.value = "All";
      option.text = "All";
      selectList.appendChild(option);
    });
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("OK");       // Create a text node
    btn.appendChild(t);
    btn.id="ok";
    spinner.appendChild(btn);
    /*chrome.storage.sync.get('myArray', function(data) {
     data.myArray.length=0;
     chrome.storage.sync.set({'myArray':data.myArray}, function(){
     }); 
   });*/
 },false);
   var editButton = document.getElementById('change');
   editButton.addEventListener('click', function() {
    var spinner=document.getElementById("list");
   /* var selectList = document.createElement("select");
    selectList.id = "siteSelect";
    spinner.appendChild(selectList);
    chrome.storage.sync.get('myArray', function(data) {
      for(var i=0;i<data.myArray.length;i++)
      {
        var option = document.createElement("option");
        option.value = data.myArray[i][0];
        option.text = data.myArray[i][0];
        selectList.appendChild(option);
      }
       var option = document.createElement("option");
          option.value = "All";
          option.text = "All";
          selectList.appendChild(option);
    });*/
    var minselectList = document.createElement("minselect");
    minselectList.id = "minSelect";
    spinner.appendChild(minselectList);
    for(var i=1;i<59;i++)
    {
      var option = document.createElement("option");
      option.value =i;
      option.text = i;
      minselectList.appendChild(option);
    }
    /*var siteUrl1= (document.getElementById("siteurl").value).toString();
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
  });*/
},false);
 },false);