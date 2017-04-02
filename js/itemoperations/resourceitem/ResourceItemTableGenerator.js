var ResourceItemTableGenerator = function(){

  ResourceItemTableGenerator.prototype.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, resourceItem) {

			var row = "<tr>";
			row += "<td>" + resourceItem.id + "</td>";
      row += "<td>" +resourceItem.name + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+resourceItem.id+"' class='btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteCrudItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+resourceItem.id+"' class='btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateCrudItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }
}
