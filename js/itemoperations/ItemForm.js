var ItemForm = function(itemCommonsObj, formInfoObj){	
	
	var that = this;
	this.itemCommons = itemCommonsObj;
	this.formInfo = formInfoObj;
	
	this.itemFormLoaded = function(){
		//save
		var saveResourceItemOperation = function(){ that.itemCommons.saveItemOperation('#itemNameInput', "http://demo8082322.mockable.io/saveResourceItem"); };
		var saveResourceItemButton = document.getElementById("saveButton");
		saveResourceItemButton.addEventListener("click", saveResourceItemOperation);
		
		document.getElementById('itemNameTxt').innerHTML = that.formInfo.itemNameTxt;
	};
}