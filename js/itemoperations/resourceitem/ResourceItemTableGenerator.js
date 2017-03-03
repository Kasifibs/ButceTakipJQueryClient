var ResourceItemTableGenerator = function(){

  ResourceItemTableGenerator.prototype.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, obj) {

			var row = "<tr>";
			row += "<td>" + obj.id + "</td>";
      row += "<td>" +obj.name + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+obj.id+"' class='btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteCrudItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+obj.id+"' class='btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateCrudItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }
}
