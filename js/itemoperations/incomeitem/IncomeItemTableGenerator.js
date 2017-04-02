var IncomeItemTableGenerator = function(){

  IncomeItemTableGenerator.prototype.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, incomeItem) {

			var row = "<tr>";
			row += "<td>" + incomeItem.id + "</td>";
      row += "<td>" +incomeItem.name + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+incomeItem.id+"' class='btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteCrudItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+incomeItem.id+"' class='btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateCrudItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }
}
