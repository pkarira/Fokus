document.addEventListener('DOMContentLoaded', function() {
	var list1=[];
	document.getElementById("quote").innerHTML = store();
	chrome.storage.sync.get('diff', function(data) {
		var timeLeft = data.diff;
		document.getElementById("war").innerHTML = timeLeft--;
		window.setInterval(function() {
			if(timeLeft >= 0) {
				document.getElementById("war").innerHTML = timeLeft--;
			}

		}, 60000);

	});
	function getRandomInt(min, max) {
		return parseInt(Math.floor(Math.random() * (max - min + 1)) + min,10);
	}
	function store()
	{
		list1.push("Unfortunately, the clock is ticking, the hours are going by. The past increases, the future recedes. Possibilities decreasing, regrets mounting.");
		list1.push("Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.");
		list1.push("Time is a created thing. To say <i>'i don't have time,'</i> is like saying, <i>'i don't want to.'</i>");
		list1.push("Time is what we want most,but what we use worst.");
		list1.push("You must give everything to make your life as beautiful as the dreams that dance in your imagination.");
		list1.push("Until you value yourself, you won't value your time. Until you value your time, you will not do anything with it.");
		list1.push("Life is uncertain don't waste your time on such things that don't deserve your time and efforts instead do things you love and live your life to fullest.");
		list1.push("I don't believe in plastic surgery, But in your case, Go ahead.");
		list1.push("You're not that lucky and I'm not that desperate!");
		list1.push("Depression is merely anger without enthusiasm.");
		var d;
		d=list1[getRandomInt(0,list1.length-1)];
		return d;
	}
},false);