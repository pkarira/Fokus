
/* chrome.storage.sync.get('myArray', function(data) {
    
    data.myArray.length=0;
      chrome.storage.sync.set({'myArray':data.myArray}, function(){
        alert(data.myArray.length=0);
    });  
     });*/
chrome.runtime.onMessage.addListener(function(request, sender) {
   chrome.tabs.update(sender.tab.id, {url: request.redirect});
});
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    alert(tabToUrl[tabId].toString()+" ");
    chrome.storage.sync.get('myArray', function(data) {
      for (var i=0;i<data.myArray.length;i++)
      {
      if(tabToUrl[tabId].toString()==data.myArray[i][0])
      {
         var d=new Date();
         var s="";
        var c=3;
        alert(d.getFullYear()+" "+ d.getMonth()+" "+ d.getDate()+" "+d.getHours()+" "+d.getMinutes()+" "+(data.myArray[i])[1]+" "+(data.myArray[i])[2]);
        var nDate=dateAndTime(d.getFullYear(), d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),parseInt((data.myArray[i])[1],10),parseInt((data.myArray[i])[2],10));
        alert(nDate);
        for(var j=0;j<nDate.length;j++)
        {
          if(nDate.charAt(j)!=" ")
          {
            s=s+nDate.charAt(j);
          }else
          {
            (data.myArray[i])[c]=parseInt(s);
              c++;
            s="";
          }
        }
        alert((data.myArray[i])[3]+" "+(data.myArray[i])[4]+" "+(data.myArray[i])[5]+" "+(data.myArray[i])[6]+" "+(data.myArray[i])[7]);
          chrome.storage.sync.set({'myArray':data.myArray}, function(){
    });
     alert(tabToUrl[tabId]+" ");
      break;
      }
     }
     });
});
var tabToUrl = {};
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    tabToUrl[tabId] = tab.url;
});
