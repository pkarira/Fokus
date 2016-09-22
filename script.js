var a=window.location.toString();
chrome.storage.sync.get('myArray', function(data) {
      for (var i=0;i<data.myArray.length;i++)
      {
      if(a==(data.myArray[i]))
      {
      chrome.runtime.sendMessage({redirect: "https://www.youtube.com/"});
      break;
      }
     }
     });


