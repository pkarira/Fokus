
alert(window.location.toString());
chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
    alert(tabs[0].url);
});
