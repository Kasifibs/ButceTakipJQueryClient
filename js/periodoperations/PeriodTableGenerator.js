var PeriodTableGenerator = function(){

  PeriodTableGenerator.prototype.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, period) {
      var beginDate = moment(period.beginDate).format('DD.MM.YYYY');
      var endDate = moment(period.endDate).format('DD.MM.YYYY');

			var row = "<tr>";
			row += "<td>" + period.id + "</td>";
      row += "<td>" +period.name + "</td>";
			row += "<td>" + beginDate + "</td>";
      row += "<td>" + endDate + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+period.id+"' class='btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteCrudItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+period.id+"' class='btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateCrudItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }
}
