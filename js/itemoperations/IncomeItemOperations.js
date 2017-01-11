$(document).ready(function() {

		var itemCommonsObj = new ItemCommons();

		//delete
		var deleteIncomeItemOperation = function(){
			var itemId = $(this).attr('itemId');
			itemCommonsObj.deleteItemOperation(itemId, "https://localhost:8443/ButceTakipServer/gelirKalemi/sil/"+itemId);
		};

		//update
		var updateIncomeItemOperation = function(){
			var id =  $(this).attr('itemId');
			var itemToUpdate = {"id":id,
								"name":$('#itemNameInput').val()};
			itemCommonsObj.updateItemOperation(itemToUpdate, "https://localhost:8443/ButceTakipServer/gelirKalemi/guncelle");
		};

		//retrieve
		var retrieveIncomeItemOperation = function(){
			itemCommonsObj.retrieveItemsOperation("https://localhost:8443/ButceTakipServer/gelirKalemi/liste", retriveIncomeItemHandlerOperation);
		}
		var retriveIncomeItemHandlerOperation = function(resultData){
			var tableItemSpecificInfo = {header:"Gelir Kalemi Listesi",columnName:"Gelir Kalemi"};
			itemCommonsObj.retrieveHandlerOperation(resultData, tableItemSpecificInfo, deleteIncomeItemOperation, updateIncomeItemOperation, '#itemNameInput');
		}

		//save
		var saveIncomeItemOperation = function(){
			itemCommonsObj.saveItemOperation('#itemNameInput', "https://localhost:8443/ButceTakipServer/gelirKalemi/kaydet");
		};
		
		var formInfo = {itemNameTxt:"Gelir Kalemi"};

		var itemOperationsObj = new ItemOperations(retrieveIncomeItemOperation, formInfo, saveIncomeItemOperation);
		itemOperationsObj.loadTemplates();
	}
);
