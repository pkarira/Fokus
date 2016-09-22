
chrome.runtime.onMessage.addListener(function(request, sender) {
   chrome.tabs.update(sender.tab.id, {url: request.redirect});
});
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    alert(tabToUrl[tabId].toString()+" ");
    chrome.storage.sync.get('myArray', function(data) {
      for (var i=0;i<data.myArray.length;i++)
      {
      if(tabToUrl[tabId].toString()==data.myArray[i])
      {
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