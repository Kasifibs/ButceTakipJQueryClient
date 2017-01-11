$(document).ready(function() {

		var itemCommonsObj = new ItemCommons();

		//delete
		var deleteExpenseItemOperation = function(){
			var itemId = $(this).attr('itemId');
			itemCommonsObj.deleteItemOperation(itemId, "https://localhost:8443/ButceTakipServer/harcamaKalemi/sil/"+itemId);
		};

		//update
		var updateExpenseItemOperation = function(){
			var id =  $(this).attr('itemId');
			var itemToUpdate = {"id":id,
								"name":$('#itemNameInput').val()};
			itemCommonsObj.updateItemOperation(itemToUpdate, "https://localhost:8443/ButceTakipServer/harcamaKalemi/guncelle");
		};

		//retrieve
		var retrieveExpenseItemOperation = function(){
			itemCommonsObj.retrieveItemsOperation("https://localhost:8443/ButceTakipServer/harcamaKalemi/liste", retriveExpenseItemHandlerOperation);
		}
		var retriveExpenseItemHandlerOperation = function(resultData){
			var tableItemSpecificInfo = {header:"Gider Kalemi Listesi",columnName:"Gider Kalemi"};
			itemCommonsObj.retrieveHandlerOperation(resultData, tableItemSpecificInfo, deleteExpenseItemOperation, updateExpenseItemOperation, '#itemNameInput');
		}

		//save
		var saveExpenseItemOperation = function(){
			itemCommonsObj.saveItemOperation('#itemNameInput', "https://localhost:8443/ButceTakipServer/harcamaKalemi/kaydet");
		};

		var formInfo = {itemNameTxt:"Gider Kalemi"};

		var itemOperationsObj = new ItemOperations(retrieveExpenseItemOperation, formInfo, saveExpenseItemOperation);
		itemOperationsObj.loadTemplates();
	}
);
