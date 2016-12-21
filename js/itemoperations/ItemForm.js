var ItemForm = function(itemCommonsObj, formInfoObj){

	var that = this;
	this.itemCommons = itemCommonsObj;
	this.formInfo = formInfoObj;

	this.itemFormLoaded = function(){

		document.getElementById('itemNameTxt').innerHTML = that.formInfo.itemNameTxt;
		//save
		var saveResourceItemOperation = function(){ that.itemCommons.saveItemOperation('#itemNameInput', "https://localhost:8443/ButceTakipServer/varlikKalemi/kaydet"); };
		$("#saveButton").click(saveResourceItemOperation);
	};
}
