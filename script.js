var a=window.location.toString();
chrome.storage.sync.get('myArray', function(data) {
      for (var i=0;i<data.myArray.length;i++)
      {
      if(a==(data.myArray[i])[0])
      {
         Date d=new Date();
        var dateOne = new Date(d.getFullYear(), d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),0);
        var dateTwo= new Date((data.myArray[i])[3],(data.myArray[i])[4],(data.myArray[i])[5],(data.myArray[i])[6],(data.myArray[i])[7],0);
        if(dateOne<dateTwo)
        {
        chrome.runtime.sendMessage({redirect: "https://www.youtube.com/"});
        break;
        }
      }
     }
     });