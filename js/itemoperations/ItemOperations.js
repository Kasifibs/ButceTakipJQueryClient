var ItemOperations = function(retrieveItems, formInfoObj, saveItemOperation){

	var that = this;
	this.retrieveItemsOperation = retrieveItems;
	this.formInfo = formInfoObj;
	this.saveOperation=saveItemOperation;


	var mainTemplateObj = new MainTemplate();
	var itemCommonsObj = new ItemCommons();
	var itemFormObj = new ItemForm(itemCommonsObj, that.formInfo, that.saveOperation);
	var that = this;

	this.itemContentAreaLoaded = function(){
		$('#formDiv').load('/ButceTakip/views/itemoperations/ItemForm.html', itemFormObj.itemFormLoaded);
	 	that.retrieveItemsOperation();
	};

	this.loadItemOpSpecificTemplates = function(){
		$.get("/ButceTakip/views/itemoperations/ItemContentArea.html", function(data){
				$("#pageContent").append(data);
				that.itemContentAreaLoaded();
		});
	}

	this.loadTemplates = function(){
		$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(that.loadItemOpSpecificTemplates)});
	}

}
