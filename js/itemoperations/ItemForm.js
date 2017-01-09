var ItemForm = function(itemCommonsObj, formInfoObj, saveOperation){

	var that = this;
	this.itemCommons = itemCommonsObj;
	this.formInfo = formInfoObj;
	this.saveItemOperation = saveOperation;

	this.itemFormLoaded = function(){

		document.getElementById('itemNameTxt').innerHTML = that.formInfo.itemNameTxt;

		$("#saveButton").click(that.saveItemOperation);
	};
}
