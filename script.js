
var a;chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
 a=response.farewell.toString();
});
var diff;
chrome.storage.sync.get('myArray', function(data) {
      for (var i=0;i<data.myArray.length;i++)
      {
      if(a==(data.myArray[i])[0])
      {
         var d=new Date();
        var dateOne = new Date(d.getFullYear(), d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),0);
        var dateTwo= new Date((data.myArray[i])[3],(data.myArray[i])[4],(data.myArray[i])[5],(data.myArray[i])[6],(data.myArray[i])[7],0);
        var dateThree= new Date(2020,1,1,1,1,0);
        if(dateOne<dateTwo)
        {
        	if(dateTwo!=dateThree)
        	{
            chrome.runtime.sendMessage({redirect: "web.html"});
            diff = Math.round((((dateTwo-dateOne)% 86400000) % 3600000) / 60000);
             chrome.storage.sync.set({'diff':diff}, function(){
              });
            }
        break;
        }
      }
     }
     });