var ItemCommons = function(){

	var that = this;
	
	this.reloadFunction = function(){
		location.reload();
	}

	this.saveItemOperation = function(nameElementId, restUrl){

		var itemName=$(nameElementId).val();						
		var itemToSave={"name":itemName};
		
		var restConfig ={type:"POST",
						 url:restUrl,
						 contentType:"application/json",
						 data:JSON.stringify(itemToSave)};
		
		var request = $.ajax(restConfig);
		request.done(that.reloadFunction);
	}

	this.deleteItemOperation = function(itemID, restUrl){
		
		var itemIdToDelete = {"id":itemID};
									
		var restConfig = {type:"DELETE",
						  url:restUrl,
						  contentType:"application/json",
						  data:JSON.stringify(itemIdToDelete)};
			
		var request = $.ajax(restConfig);
		request.done(that.reloadFunction);
	}

	this.updateItemOperation = function(itemToUpdate, restUrl){

		var restConfig = {type:"PUT",
						  url:restUrl,
						  contentType:"application/json",
						  data:JSON.stringify(itemToUpdate)};
		
		var request = $.ajax(restConfig);
		request.done(that.reloadFunction);
	}

	this.retrieveItemsOperation = function(restUrl, retrieveHandlerOperation){
		$.ajax(
			{type:"GET",
			 url:restUrl,
			 dataType:"json",
			 success:function(resultData){
					retrieveHandlerOperation(resultData);
				}
			 }
		);
	}
			
	this.retrieveHandlerOperation = function(resultData, tableItemSpecificInfo, deleteOperation, updateOperation, nameElementId){
		
		var generatedTable = that.generateItemTableFromRestResult(resultData, tableItemSpecificInfo);
		var insertOp = $("#itemTableDiv").append(generatedTable);
		insertOp.ready(function(){
				$(".itemDeleteButton").click(deleteOperation);								
				$(".itemUpdateButton").click(updateOperation);
				that.handleTableRowClick(nameElementId);
			}
		);
	}

	this.handleTableRowClick = function(nameElementId){
		var tr=$("#itemTable").find("tr");
		tr.bind('click', function(){
				var tds = $(this).find("td");
				tr.removeClass('vurgulu');
				$(this).addClass('vurgulu');
				
				$.each(tds, function(index, item){
						switch(index)
						{
							case 1:
								$(nameElementId).val(item.innerHTML);
								break;
						}
					}
				);
			}
		);
	}

	this.generateItemTableFromRestResult = function(resultData, tableItemSpecificInfo){

		var icerik = "<h2>" + tableItemSpecificInfo.header + "</h2>" +
		"<table id='itemTable' class='table table-bordered' border='1' cellspacing='0'>";
		icerik += "<thead><tr>" +
		"<th>ID</th>" +
		"<th>"+tableItemSpecificInfo.columnName+" Adı</th>" +
		"<th colspan='2'>İşlemler</th>" +
		"<tr></thead>" +
		"<tbody>";
		
		$.each(resultData, function(i, obj) {
			icerik += "<tr>";
			icerik += "<td>" + obj.id + "</td>";
			icerik += "<td>" + obj.name + "</td>";
			icerik += "<td>";
			icerik += "<input type='submit' itemId='"+obj.id+"' class='itemDeleteButton btn btn-danger' value='Sil'>";
			icerik += "</td>";
			icerik += "<td>";
			icerik += "<input type='submit' itemId='"+obj.id+"' class='itemUpdateButton btn btn-warning' value='Güncelle'>";
			icerik += "</td>";
			icerik += "</tr>";
		});				
		
		icerik += "</tbody>";
		icerik += "</table>";
		
		return icerik;
	}

}