//The onclick ids to the respective modals are given by CATEGORY-NAME
//All elements of a single modal have additional classes given by modal-CATEGORY-NAME
//The close buttons of the modals have ids given by close-CATEGORY-NAME

function showModal(clicked_id) {	
	let modalClass = "modal-" + clicked_id;
	let modalClassList = document.getElementsByClassName(modalClass);

	for (let i = 0; i < modalClassList.length; i++) {
		modalClassList[i].style.setProperty("visibility", "visible");
	}

	document.getElementById("modal-background").style.setProperty("visibility", "visible");	
}

function closeModal(clicked_id) {
	let modalClass = clicked_id.replace("close-", "modal-");
	let modalClassList = document.getElementsByClassName(modalClass);

	for (let i = 0; i < modalClassList.length; i++) {
		modalClassList[i].style.setProperty("visibility", "hidden");
	}

	document.getElementById("modal-background").style.setProperty("visibility", "hidden");
}