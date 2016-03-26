var clicked = false;
var sec = 0;

function startClock() {
	if (clicked === false) {
		clock = setInterval("stopWatch()", 1000);
		clicked = true;
	}
	else if (clicked === true) {
	}
}
function stopWatch() {
	sec++;
    document.getElementById("timerWatch").innerHTML = parseInt(sec/(60*60),10)+":"+ parseInt(sec/60,10)+":"+sec%60;
    
	
}
function stopClock() {
	window.clearInterval(clock);
	sec = 0;
	//document.getElementById("timerWatch").innerHTML=0;
	clicked = false;
}