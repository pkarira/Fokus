var a=window.location.toString();
if(a==("https://www.facebook.com/"))
{
     chrome.runtime.sendMessage({redirect: "https://www.youtube.com/"});
}


