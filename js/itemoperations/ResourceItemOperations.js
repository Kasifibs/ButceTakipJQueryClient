$(document).ready(function() {
		
		$('#sideMenuDiv').load('./SideMenuDiv.html');
		$('#titleDiv').load('./Title.html');
		
		//save
		var saveResourceItemOperation = function(){ saveItemOperation('#resItemName', "http://demo8082322.mockable.io/saveResourceItem"); };
		var saveResourceItemButton = document.getElementById("saveButton");
		saveResourceItemButton.addEventListener("click", saveResourceItemOperation);
		
		//delete
		var deleteResourceItemOperation = function(){ 
			var itemId = $(this).attr('itemId');
			deleteItemOperation(itemId, "http://demo8082322.mockable.io/deleteResourceItem");
		};
		
		//update
		var updateResourceItemOperation = function(){
			var id =  $(this).attr('itemId');
			var itemToUpdate = {"id":id,
								"name":$('#resItemName').val()};
			updateItemOperation(itemToUpdate, "http://demo8082322.mockable.io/updateResourceItem");
		};	
		
		//retrieve
		var retrieveResourceItemOperation = function(){
			retrieveItemsOperation("http://demo8082322.mockable.io/getResourceItems", retriveResourceItemHandlerOperation);
		}
		var retriveResourceItemHandlerOperation = function(resultData){
			retrieveHandlerOperation(resultData, "Varlık Kalemi", deleteResourceItemOperation, updateResourceItemOperation, '#resItemName');
		}
		
		retrieveResourceItemOperation();
	}
);
