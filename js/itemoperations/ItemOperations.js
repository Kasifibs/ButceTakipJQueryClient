var ItemOperations = function(retrieveItems, formInfoObj){

	var that = this;
	this.retrieveItemsOperation = retrieveItems;
	this.formInfo = formInfoObj;

	var mainTemplateObj = new MainTemplate();
	var itemCommonsObj = new ItemCommons();
	var itemFormObj = new ItemForm(itemCommonsObj, that.formInfo);
	var that = this;

	this.itemContentAreaLoaded = function(){
		$('#formDiv').load('/ButceTakip/views/itemoperations/ItemForm.html', itemFormObj.itemFormLoaded);
	 	that.retrieveItemsOperation();
	};

	this.loadItemOpSpecificTemplates = function(){
		$('#page-content-wrapper').load('/ButceTakip/views/itemoperations/ItemContentArea.html',function(){that.itemContentAreaLoaded();});
	}

	this.loadTemplates = function(){
		$('body').load('/ButceTakip/views/common/MainTemplate.html', function(){mainTemplateObj.mainTemplateLoaded(that.loadItemOpSpecificTemplates)});
	}

}
