//CLOCK
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	
	h = time12(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}

function time12(h) {
	
	if (h > 12) {h = h - 12};
	return h;
}

function checkTime(i) {
	
	if (i < 10) {i = "0" + i};
	return i;
}

//START MENU
function toggleStart() {
	
	var startDiv = document.getElementById("start");
	if (startDiv.style.visibility === "visible") {
		startDiv.style.visibility = "hidden";
	} else {
		startDiv.style.visibility = "visible";
	}
}

//INTRO DB
function showStartupIntro() {
	
	var introDB = document.getElementById("introduction");
	var introMinimize = document.getElementById("tb-introduction");

	introDB.style.visibility = "visible";
	introMinimize.style.display = "inline";
}

function showIntro() {
	var introDiv = document.getElementById("introduction");
	if (introDiv.style.visibility === "hidden") {
		introDiv.style.visibility = "visible";
	}
	hideStart();
}

//DB
function showDB(clicked_id) {

	var divAppName;
	var divAppTarget;
	
	if (clicked_id.includes("dsk-icon-")) {
		divAppName = clicked_id.replace("dsk-icon-","");
	} else if (clicked_id.includes("tb-")) {
		divAppName = clicked_id.replace("tb-","");
	} else if (clicked_id === "sm-introduction") {
		divAppName = "introduction";
	} else if (clicked_id === "sm-terminal") {
		divAppName = "terminal";
	}

	divAppTarget = document.getElementById(divAppName);
	divAppTarget.style.visibility = "visible";

	showMinimize(divAppName);
}

function closeDB(clicked_id) {

	var divAppName = clicked_id.replace("close-", "");
	var divAppTarget = document.getElementById(divAppName);

	divAppTarget.style.visibility = "hidden";

	closeMinimize(divAppName);
}

//MINIMIZE
//Gives the ability to minimize an app
function minimize(clicked_id) {

	var divAppName = clicked_id.replace("min-","");
	var divAppTarget = document.getElementById(divAppName);
	var divMinName = clicked_id.replace("min-","tb-")
	var divMinTarget = document.getElementById(divMinName);

	divAppTarget.style.visibility = "hidden";
	divMinTarget.style.backgroundColor = "var(--transparent-accent)";
}

//Gives the ability to open an app through the minimized tab
function openMinimize(clicked_id) {
	
	var divMinTarget = document.getElementById(clicked_id);
	var divAppName = clicked_id.replace("tb-","");
	var divAppTarget = document.getElementById(divAppName);

	// divAppTarget.style.visibility = "visible";
	// divMinTarget.style.backgroundColor = "var(--main)";

	if (divAppTarget.style.visibility === "visible") {
		
		divAppTarget.style.visibility = "hidden";
		divMinTarget.style.backgroundColor = "var(--transparent-accent)";
	} else if (divAppTarget.style.visibility === "hidden") {
		
		divAppTarget.style.visibility = "visible";
		divMinTarget.style.backgroundColor = "var(--main)";
	}
}

//Shows the respective minimized tab on the taskbar when an app is selected
function showMinimize(divPreName) {
	
	var divAppName = "tb-" + divPreName;
	var divAppTarget = document.getElementById(divAppName);

	divAppTarget.style.display = "inline";

}

//Closes the respective minimized tab on the taskbar when an app is closed
function closeMinimize(divPreName) {

	var divAppName = "tb-" + divPreName;
	var divAppTarget = document.getElementById(divAppName);

	divAppTarget.style.display = "none";
}

//TERMINAL

function terminalChange(clicked_id) {
	var divName = clicked_id.replace("terminal-","");

	if(clicked_id.includes("theme")) {
		divName = divName.replace("theme-","");	
		changeTheme(divName);
	} else if(clicked_id.includes("bg")) {
		divName = divName.replace("bg-","");
		changeBg(divName);
	} else if(clicked_id.includes("os")) {
		divName = divName.replace("os-","");
		changeOs(divName);
	}
}

function changeTheme(name) {
	
	if (name === "original") {
		document.documentElement.style.setProperty("--main", "#5E6572");
		document.documentElement.style.setProperty("--accent", "#EEF1EF");
	} else if(name === "hacker") {
		document.documentElement.style.setProperty("--main", "#000000");
		document.documentElement.style.setProperty("--accent", "#20C20E");
	} else if (name === "minimal") {
		document.documentElement.style.setProperty("--main", "#000000");
		document.documentElement.style.setProperty("--accent", "#FFFFFF");
	} else if (name === "light") {
		document.documentElement.style.setProperty("--main", "#F9D4BB");
		document.documentElement.style.setProperty("--accent", "#FFFFFF");
	}
}

function changeBg(name){

	if (name === "original") {
		document.getElementsByTagName("BODY")[0].style.setProperty("background-image", "url('Resources/Images/background-logo.svg')");
	} else if (name === "binary") {
		document.getElementsByTagName("BODY")[0].style.setProperty("background-image", "url('Resources/Images/background-logo-binary.svg')");
	} else if (name === "comic") {
		document.getElementsByTagName("BODY")[0].style.setProperty("background-image", "url('Resources/Images/background-logo-comic.svg')");
	}
}

function changeOs(name){
	if (name === "windows") {
		var minList = document.getElementsByClassName("db-icon-1");
		var closeList  = document.getElementsByClassName("db-icon-2");
		var dbFrameList = document.getElementsByClassName("db-frame");
		var dbContentList = document.getElementsByClassName("db-content");
		var borderList = document.getElementsByClassName("border");
		var i;
		var j;
		var k;
		

		for (i = 0; i < minList.length; i++) {
			minList[i].style.setProperty("width","25px");
			minList[i].style.setProperty("height","25px");
			minList[i].style.setProperty("margin-top","0%");
			minList[i].style.setProperty("background-image", "url('Resources/Images/dialogue-minimize.svg')");
			minList[i].style.setProperty("background-color","var(--transparent)");
			minList[i].style.setProperty("border-radius","0%");

			closeList[i].style.setProperty("width","25px");
			closeList[i].style.setProperty("height","25px");
			closeList[i].style.setProperty("margin-top","0%");
			closeList[i].style.setProperty("background-image", "url('Resources/Images/dialogue-close.svg')");
			closeList[i].style.setProperty("background-color","var(--transparent)");
			closeList[i].style.setProperty("border-radius","0%");
		}

		for (j = 0; j < dbFrameList.length; j++) {
			dbFrameList[j].style.setProperty("border-radius", "0%");
		}

		for (k = 0; k < borderList.length; k++) {
			borderList[k].style.setProperty("border-width", "medium");
		}

		document.getElementsByTagName("BODY")[0].style.setProperty("background-image", "url('Resources/Images/background-logo.svg')");
		document.getElementsByTagName("BODY")[0].style.setProperty("background-position", "100% 90%");
		document.getElementsByTagName("BODY")[0].style.setProperty("background-size", "auto");
		
		document.getElementsByClassName("tb")[0].style.setProperty("top", "95%");

		document.getElementsByClassName("dsk-icon-grid")[0].style.setProperty("margin-top", "1rem");
		
		document.documentElement.style.setProperty("--main", "#5E6572");
		document.documentElement.style.setProperty("--accent", "#EEF1EF");		
	}

	if (name === "mac") {
		var minList = document.getElementsByClassName("db-icon-1");
		var closeList  = document.getElementsByClassName("db-icon-2");
		var dbFrameList = document.getElementsByClassName("db-frame");
		var dbContentList = document.getElementsByClassName("db-content");
		var borderList = document.getElementsByClassName("border");
		var i;
		var j;
		var k;
		

		for (i = 0; i < minList.length; i++) {
			minList[i].style.setProperty("width","15px");
			minList[i].style.setProperty("height","15px");
			minList[i].style.setProperty("margin-top","15%");
			minList[i].style.setProperty("background-image", "url('')");
			minList[i].style.setProperty("background-color","#FDC430");
			minList[i].style.setProperty("border-radius","50%");

			closeList[i].style.setProperty("width","15px");
			closeList[i].style.setProperty("height","15px");
			closeList[i].style.setProperty("margin-top","15%");
			closeList[i].style.setProperty("background-image", "url('')");
			closeList[i].style.setProperty("background-color","#F85F57");
			closeList[i].style.setProperty("border-radius","50%");
		}

		for (j = 0; j < dbFrameList.length; j++) {
			dbFrameList[j].style.setProperty("border-radius", "15px");
		}

		for (k = 0; k < borderList.length; k++) {
			borderList[k].style.setProperty("border-width", "thin");
		}

		document.getElementsByTagName("BODY")[0].style.setProperty("background-image", "url('Resources/Images/background-mac.jpg')");
		document.getElementsByTagName("BODY")[0].style.setProperty("background-size", "cover");
		document.getElementsByTagName("BODY")[0].style.setProperty("background-position", "0% 0%"); 
		
		document.getElementsByClassName("tb")[0].style.setProperty("top", 0);

		document.getElementsByClassName("dsk-icon-grid")[0].style.setProperty("margin-top", "4rem");
		
		document.documentElement.style.setProperty("--main", "#D1D0D1");
		document.documentElement.style.setProperty("--accent", "#3A393A");		
	}
}
