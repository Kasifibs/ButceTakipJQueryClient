var itemFormLoaded = function(){
	//save
	var saveResourceItemOperation = function(){ saveItemOperation('#resItemName', "http://demo8082322.mockable.io/saveResourceItem"); };
	var saveResourceItemButton = document.getElementById("saveButton");
	saveResourceItemButton.addEventListener("click", saveResourceItemOperation);
};