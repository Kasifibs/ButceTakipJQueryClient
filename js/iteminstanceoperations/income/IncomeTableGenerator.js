var IncomeTableGenerator = function(){

  var that = this;

  IncomeTableGenerator.prototype.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, income) {

			var row = "<tr>";
			row += "<td>" + income.id + "</td>";
      row += "<td>" +income.amount + "</td>";
      row += "<td>" +income.incomeItem.name + "</td>";
      row += "<td>" +income.period.name + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+income.id+"' class='btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteCrudItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+income.id+"' class='btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateCrudItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }
}
