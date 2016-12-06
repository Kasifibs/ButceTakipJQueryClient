$(document).ready(function() {
	
		var itemCommonsObj = new ItemCommons();
		
		//delete
		var deleteExpenseItemOperation = function(){ 
			var itemId = $(this).attr('itemId');
			itemCommonsObj.deleteItemOperation(itemId, "http://demo8082322.mockable.io/deleteResourceItem");
		};
		
		//update
		var updateExpenseItemOperation = function(){
			var id =  $(this).attr('itemId');
			var itemToUpdate = {"id":id,
								"name":$('#itemNameInput').val()};
			itemCommonsObj.updateItemOperation(itemToUpdate, "http://demo8082322.mockable.io/updateResourceItem");
		};	
		
		//retrieve
		var retrieveExpenseItemOperation = function(){
			itemCommonsObj.retrieveItemsOperation("http://demo8082322.mockable.io/getResourceItems", retriveExpenseItemHandlerOperation);
		}
		var retriveExpenseItemHandlerOperation = function(resultData){
			var tableItemSpecificInfo = {header:"Gider Kalemi Listesi",columnName:"Gider Kalemi"};
			itemCommonsObj.retrieveHandlerOperation(resultData, tableItemSpecificInfo, deleteExpenseItemOperation, updateExpenseItemOperation, '#itemNameInput');
		}
		
		var formInfo = {itemNameTxt:"Gider Kalemi"};
		
		var itemOperationsObj = new ItemOperations(retrieveExpenseItemOperation, formInfo);
		itemOperationsObj.loadTemplates();
	}
);