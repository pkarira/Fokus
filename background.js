
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
         Date d=new Date();
         var s="";
        var c=2;
        var nDate=dateAndTime(d.getFullYear(), d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),(data.myArray[i])[1],(data.myArray[i])[2]),
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
