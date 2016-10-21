 document.addEventListener('DOMContentLoaded', function() {
  var table = document.getElementById("table");
  var tableHead = document.createElement("thead");
  tableHead.innerHTML = "<tr><th>URL</th><th>TIME</th><th>OPTIONS</th></tr>";
  table.appendChild(tableHead);
  chrome.storage.sync.get('myArray', function(data) {
    var tableBody = document.createElement("tbody");
    for(var i=0;i<data.myArray.length;i++)
    {
      for (var i=0;i<data.myArray.length;i++)
      {
        if((data.myArray[i])[0]==="")
        {
          data.myArray.splice(i,1);
          chrome.storage.sync.set({'myArray':data.myArray}, function(){
          });
        }
      }
      var row = document.createElement("tr");
      row.id=i;
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3=document.createElement("td");
      var del = document.createElement("BUTTON");
      // del.style.background="url  http://jackrugile.com/images/misc/noise-diagonal.png), linear-gradient(#777, #444)";
      del.style.background="#37474F";
      var t = document.createTextNode("Delete");       // Create a text node
      del.appendChild(t);
      var css = 'button del:hover{ background-color: #ffffff }';
      style = document.createElement('style');
      del.appendChild(style);
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      del.id=i;
      var i2=i;
     // alert(i2);
     del.addEventListener("click",function(e){
      chrome.storage.sync.get('myArray', function(data) { 
        data.myArray.splice(e.target.id, 1);
        var row1 = document.getElementById(e.target.id);
        row1.parentNode.removeChild(row1);
          // table.deleteRow(e.target.id+1);
          chrome.storage.sync.set({'myArray':data.myArray}, function(){
          });
        });  
    });
     var edit = document.createElement("BUTTON");
     edit.style.padding="8px 20px 8px 20px";
     edit.style.marginLeft="20px";
      // edit.style.background="url(http://jackrugile.com/images/misc/noise-diagonal.png), linear-gradient(#777, #444)";
      edit.style.background="#37474F";
      var t1= document.createTextNode("Edit");       // Create a text node
      edit.appendChild(t1);
      edit.id=i;
      edit.addEventListener("click",function(e)
      {
        var edit1=document.getElementById("edit1");
        edit1.className="overlay";
        var edit2=document.getElementById("edit2");
        edit2.className="show";
        var input=document.getElementById("siteurl");
        input.setAttribute("value",data.myArray[e.target.id][0]+"");
        var element1 = document.getElementById('hours');
        element1.value = data.myArray[e.target.id][1];
        var element2 = document.getElementById('minutes');
        element2.value = data.myArray[e.target.id][2];
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
    }
    table.appendChild(tableBody);
  });
  
},false);