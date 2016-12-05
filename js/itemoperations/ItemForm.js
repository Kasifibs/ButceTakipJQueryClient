var ItemForm = function(itemCommonsObj){	
	
	var that = this;
	this.itemCommons = itemCommonsObj;
	
	this.itemFormLoaded = function(){
		//save
		var saveResourceItemOperation = function(){ that.itemCommons.saveItemOperation('#resItemName', "http://demo8082322.mockable.io/saveResourceItem"); };
		var saveResourceItemButton = document.getElementById("saveButton");
		saveResourceItemButton.addEventListener("click", saveResourceItemOperation);
	};
}