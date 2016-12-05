$(document).ready(function() {
	
		var itemCommonsObj = new ItemCommons();
		
		//delete
		var deleteResourceItemOperation = function(){ 
			var itemId = $(this).attr('itemId');
			itemCommonsObj.deleteItemOperation(itemId, "http://demo8082322.mockable.io/deleteResourceItem");
		};
		
		//update
		var updateResourceItemOperation = function(){
			var id =  $(this).attr('itemId');
			var itemToUpdate = {"id":id,
								"name":$('#resItemName').val()};
			itemCommonsObj.updateItemOperation(itemToUpdate, "http://demo8082322.mockable.io/updateResourceItem");
		};	
		
		//retrieve
		var retrieveResourceItemOperation = function(){
			itemCommonsObj.retrieveItemsOperation("http://demo8082322.mockable.io/getResourceItems", retriveResourceItemHandlerOperation);
		}
		var retriveResourceItemHandlerOperation = function(resultData){
			itemCommonsObj.retrieveHandlerOperation(resultData, "Varlık Kalemi", deleteResourceItemOperation, updateResourceItemOperation, '#resItemName');
		}
		
		var itemOperationsObj = new ItemOperations(retrieveResourceItemOperation);
		itemOperationsObj.loadTemplates();
	}
);