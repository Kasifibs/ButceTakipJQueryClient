var ResourceItemTableGenerator = function(){

  var that = this;

  this.generateResourceItemTableFromResultData = function(resultData){
    that.cleanOldTableBody();
    var generatedRows = that.generateRowsFromResultData(resultData);
    that.appendRowsToBody(generatedRows);
  }

  this.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, obj) {

			var row = "<tr>";
			row += "<td>" + obj.id + "</td>";
      row += "<td>" +obj.name + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+obj.id+"' class='resourceItemDeleteButton btn btn-danger' value='Sil' data-toggle='modal' data-target='#deleteResourceItemModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+obj.id+"' class='resourceItemUpdateButton btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updateResourceItemModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }

  this.cleanOldTableBody = function(){
    $('#resourceItemResultTable tbody').empty();
  }

  this.appendRowsToBody = function(generatedRows){
    $('#resourceItemResultTable tbody').append(generatedRows);
  }
}
