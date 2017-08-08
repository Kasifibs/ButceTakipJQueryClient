var ResourceTableGenerator = function(){

  var that = this;

  ResourceTableGenerator.prototype.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, resource) {

			var row = "<tr>";
			row += "<td>" + resource.id + "</td>";
      row += "<td>" +resource.amount + "</td>";
      row += "<td>" +resource.resourceItem.name + "</td>";
      row += "<td>" +resource.period.name + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+resource.id+"' class='btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteCrudItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+resource.id+"' class='btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateCrudItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }
}
