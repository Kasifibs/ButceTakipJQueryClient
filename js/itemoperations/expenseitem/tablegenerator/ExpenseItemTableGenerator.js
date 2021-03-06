var ExpenseItemTableGenerator = function(){

  ExpenseItemTableGenerator.prototype.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, expenseItem) {

			var row = "<tr>";
			row += "<td>" + expenseItem.id + "</td>";
      row += "<td>" +expenseItem.name + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+expenseItem.id+"' class='btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteCrudItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+expenseItem.id+"' class='btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateCrudItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }
}
