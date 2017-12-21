
/* chrome.storage.sync.get('myArray', function(data) {
    
    data.myArray.length=0;
      chrome.storage.sync.set({'myArray':data.myArray}, function(){
        alert(data.myArray.length=0);
    });  
     });*/
     
chrome.runtime.onMessage.addListener(function(request, sender,sendResponse) {
  if (request.greeting == "hello")
      {
        var url = new URL(sender.tab.url);
        var domain = url.hostname;
        sendResponse({farewell: (domain+"")});
      }
    else
   chrome.tabs.update(sender.tab.id, {url: request.redirect});
});
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    chrome.storage.sync.get('myArray', function(data) {
      for (var i=0;i<data.myArray.length;i++){
        var url = new URL(tabToUrl[tabId]);
        var domain = url.hostname;
        if(domain.toString()==data.myArray[i][0]){
          console.log(domain.toString());
          var d=new Date();
          var s="";
          var c=3;
          var nDate=dateAndTime(d.getFullYear(), d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),parseInt((data.myArray[i])[1],10),parseInt((data.myArray[i])[2],10));
          for(var j=0;j<nDate.length;j++){
            if(nDate.charAt(j)!=" "){
              s=s+nDate.charAt(j);
            }else{
              (data.myArray[i])[c]=parseInt(s);
              c++;
              s="";
            }
          }
          chrome.storage.sync.set({'myArray':data.myArray}, function(){
          });

          // Block the notifications from the website
          var primaryPattern = "https://" + domain.toString() + ":*/*";
          var hours = parseInt((data.myArray[i])[1], 10);
          var mins = parseInt((data.myArray[i])[2],10);
          var notificationsBlockTime = hours * 60 + mins; 
          chrome.contentSettings["notifications"].set({
            'primaryPattern': primaryPattern, 'setting': "block"}, 
            function(details){
              chrome.alarms.create(primaryPattern, {'delayInMinutes': notificationsBlockTime});
            });

          alert("Oops! Now You Will Not Be Able To Open " +tabToUrl[tabId].toString()+" for next "+((parseInt((data.myArray[i])[1],10)*60)+(parseInt((data.myArray[i])[2],10))).toString()+" minutes");
          break;
        }
     }
    });
});

var tabToUrl = {};
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    tabToUrl[tabId] = tab.url;
});

function unblockWebsite(primaryPattern) {
  chrome.contentSettings["notifications"].set({
            'primaryPattern': primaryPattern, 'setting': "allow"});
}

chrome.alarms.onAlarm.addListener(function(alarm) {
  var primaryPattern = alarm.name;
  unblockWebsite(primaryPattern);
});
