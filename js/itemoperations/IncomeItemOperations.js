$(document).ready(function() {
	
		var itemCommonsObj = new ItemCommons();
		
		//delete
		var deleteIncomeItemOperation = function(){ 
			var itemId = $(this).attr('itemId');
			itemCommonsObj.deleteItemOperation(itemId, "http://demo8082322.mockable.io/deleteResourceItem");
		};
		
		//update
		var updateIncomeItemOperation = function(){
			var id =  $(this).attr('itemId');
			var itemToUpdate = {"id":id,
								"name":$('#itemNameInput').val()};
			itemCommonsObj.updateItemOperation(itemToUpdate, "http://demo8082322.mockable.io/updateResourceItem");
		};	
		
		//retrieve
		var retrieveIncomeItemOperation = function(){
			itemCommonsObj.retrieveItemsOperation("http://demo8082322.mockable.io/getResourceItems", retriveIncomeItemHandlerOperation);
		}
		var retriveIncomeItemHandlerOperation = function(resultData){
			var tableItemSpecificInfo = {header:"Gelir Kalemi Listesi",columnName:"Gelir Kalemi"};
			itemCommonsObj.retrieveHandlerOperation(resultData, tableItemSpecificInfo, deleteIncomeItemOperation, updateIncomeItemOperation, '#itemNameInput');
		}
		
		var formInfo = {itemNameTxt:"Gelir Kalemi"};
		
		var itemOperationsObj = new ItemOperations(retrieveIncomeItemOperation, formInfo);
		itemOperationsObj.loadTemplates();
	}
);