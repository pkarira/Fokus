 document.addEventListener('DOMContentLoaded', function() {
  var table = document.getElementById("table");
  /*var header = table.createTHead();
  var row = header.insertRow(0);     
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML ="Time" ;
  cell2.innerHTML ="Url" ;*/
  var tableHead = document.createElement("thead");
  tableHead.innerHTML = "<tr><th>URL</th><th>TIME</th><th>OPTIONS</th></tr>";
  table.appendChild(tableHead);
  // var row   = table.insertRow(0);
  // row.insertCell(0).outerHTML = "<th>First</th>";
  // row.insertCell(1).outerHTML = "<th>second</th>";
  chrome.storage.sync.get('myArray', function(data) {
    var tableBody = document.createElement("tbody");
    for(var i=0;i<data.myArray.length;i++)
    {
      var row = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3=document.createElement("td");
     var del = document.createElement("BUTTON");
      var t = document.createTextNode("Delete");       // Create a text node
      del.appendChild(t);
       var i2=i;
      del.addEventListener("click",function(){
        chrome.storage.sync.get('myArray', function(data) { 
             data.myArray.splice(i2, 1);
             table.deleteRow(i2+1);
         chrome.storage.sync.set({'myArray':data.myArray}, function(){
         });
       });  
      });
      var edit = document.createElement("BUTTON");
      var t1= document.createTextNode("Edit");       // Create a text node
      edit.appendChild(t1);
     
      edit.addEventListener("click",function()
      {
        console.log(i2);
        var edit1=document.getElementById("edit1");
        edit1.className="overlay";
        var edit2=document.getElementById("edit2");
        edit2.className="show";
        var input=document.getElementById("siteurl");
        input.setAttribute("value",data.myArray[i2][0]+"");
        var ok=document.getElementById("ok");
        ok.addEventListener("click",function()
        {
          var siteUrl1= (document.getElementById("siteurl").value).toString();
          var hour1= (document.getElementById("hours").value);
          var min1= (document.getElementById("minutes").value);
          chrome.storage.sync.get('myArray', function(data) { 
           for (var i=0;i<data.myArray.length;i++)
           {
            if(siteUrl1==(data.myArray[i])[0])
            {
             data.myArray[i][1]=(document.getElementById("hours").value);
             data.myArray[i][2]=(document.getElementById("minutes").value);
             break;
           }
         }
         chrome.storage.sync.set({'myArray':data.myArray}, function(){
         });
       });
          edit1.className="";
          edit2.className="";
        });
         var cancel=document.getElementById("cancel");
         cancel.addEventListener("click",function()
         {
           edit1.className="";
          edit2.className="";
         });

      });
      td1.innerHTML = data.myArray[i][0];
      td2.innerHTML = ((parseInt((data.myArray[i])[1],10)*60)+(parseInt((data.myArray[i])[2],10))).toString()+"min";
      row.appendChild(td1);
      row.appendChild(td2);
      td3.appendChild(del);
      td3.appendChild(edit);
      row.appendChild(td3);
      tableBody.appendChild(row);
      // var row = table.insertRow(i);
      // var cell1 = row.insertCell(0);
      // var cell2 = row.insertCell(1);
      // cell1.innerHTML = ((parseInt((data.myArray[i])[1],10)*60)+(parseInt((data.myArray[i])[2],10))).toString();
      // cell2.innerHTML = ;
    }
    table.appendChild(tableBody);
  });
  /* var viewButton = document.getElementById('view');
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
    spinner.appendChild(btn);*/
    /*chrome.storage.sync.get('myArray', function(data) {
     data.myArray.length=0;
     chrome.storage.sync.set({'myArray':data.myArray}, function(){
     }); 
   });*/
/* },false);
   var editButton = document.getElementById('change');
   editButton.addEventListener('click', function() {
    var spinner=document.getElementById("list");*/
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
   /* var minselectList = document.createElement("minselect");
    minselectList.id = "minSelect";
    spinner.appendChild(minselectList);
    for(var i=1;i<59;i++)
    {
      var option = document.createElement("option");
      option.value =i;
      option.text = i;
      minselectList.appendChild(option);
    }*/
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