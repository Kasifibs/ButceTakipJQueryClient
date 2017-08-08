var ExpenseTableGenerator = function(){

  var that = this;

  ExpenseTableGenerator.prototype.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, expense) {

			var row = "<tr>";
			row += "<td>" + expense.id + "</td>";
      row += "<td>" +expense.amount + "</td>";
      row += "<td>" +expense.expenseItem.name + "</td>";
      row += "<td>" +expense.period.name + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+expense.id+"' class='btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteCrudItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+expense.id+"' class='btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateCrudItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }
}
