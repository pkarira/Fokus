
document.addEventListener('DOMContentLoaded', function() {
  var saveButton = document.getElementById('save');
  saveButton.addEventListener('click', function() {
  	var siteUrl = document.getElementById("siteurl").value;
  	chrome.storage.sync.set({'value':siteUrl}, function() {
     alert("success");
  	});
  },false);
  var viewButton = document.getElementById('view');
  viewButton.addEventListener('click', function() {
  	chrome.storage.sync.get('value', function(data) {
     alert(data.value);
  	});
  },false);
},false);