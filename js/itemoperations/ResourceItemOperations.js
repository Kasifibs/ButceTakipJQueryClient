$(document).ready(function() {

		var itemCommonsObj = new ItemCommons();

		//delete
		var deleteResourceItemOperation = function(){
			var itemId = $(this).attr('itemId');
			itemCommonsObj.deleteItemOperation(itemId, "https://localhost:8443/ButceTakipServer/varlikKalemi/sil/"+itemId);
		};

		//update
		var updateResourceItemOperation = function(){
			var id =  $(this).attr('itemId');
			var itemToUpdate = {"id":id,
								"name":$('#itemNameInput').val()};
			itemCommonsObj.updateItemOperation(itemToUpdate, "https://localhost:8443/ButceTakipServer/varlikKalemi/guncelle");
		};

		//retrieve
		var retrieveResourceItemOperation = function(){
			itemCommonsObj.retrieveItemsOperation("https://localhost:8443/ButceTakipServer/varlikKalemi/liste", retriveResourceItemHandlerOperation);
		}
		var retriveResourceItemHandlerOperation = function(resultData){
			var tableItemSpecificInfo = {header:"Varlık Kalemi Listesi",columnName:"Varlık Kalemi"};
			itemCommonsObj.retrieveHandlerOperation(resultData, tableItemSpecificInfo, deleteResourceItemOperation, updateResourceItemOperation, '#itemNameInput');
		}

		var formInfo = {itemNameTxt:"Varlık Kalemi"};

		var itemOperationsObj = new ItemOperations(retrieveResourceItemOperation, formInfo);
		itemOperationsObj.loadTemplates();
	}
);
