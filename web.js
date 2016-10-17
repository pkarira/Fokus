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
		list1.push("The bad news is time flies. The good news is you're the pilot.");
		list1.push("Time is the most valuable coin in your life. You and you alone will determine how that coin will be spent. Be careful that you do not let other people spend it for you.");
		list1.push("Time is priceless; you are responsible for your time. Earn it or kill it, your choice");
		list1.push("If you don't steal time, time will loot you.");
		list1.push("Hard work is often the easy work you did not do at the proper time.");
		list1.push("Time is not money because it never returns.");
		var d;
		d=list1[getRandomInt(0,list1.length-1)];
		return d;
	}
},false);