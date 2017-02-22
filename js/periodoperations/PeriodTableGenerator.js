var PeriodTableGenerator = function(){

  var that = this;

  this.generatePeriodTableFromResultData = function(resultData){
    that.cleanOldTableBody();
    var generatedRows = that.generateRowsFromResultData(resultData);
    that.appendRowsToBody(generatedRows);
  }

  this.cleanOldTableBody = function(){
    $('#periodResultTable tbody').empty();
  }

  this.generateRowsFromResultData = function(resultData){
    var generatedRows = "";

    $.each(resultData, function(i, obj) {
      var beginDate = moment(obj.beginDate).format('DD.MM.YYYY');
      var endDate = moment(obj.endDate).format('DD.MM.YYYY');

			var row = "<tr>";
			row += "<td>" + obj.id + "</td>";
      row += "<td>" +obj.name + "</td>";
			row += "<td>" + beginDate + "</td>";
      row += "<td>" + endDate + "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+obj.id+"' class='periodDeleteButton btn btn-danger' value='Sil' data-toggle='modal' data-target='#deletePeriodModal'>";
			row += "</td>";
			row += "<td>";
			row += "<input type='submit' itemId='"+obj.id+"' class='periodUpdateButton btn btn-warning' value='Güncelle' data-toggle='modal' data-target='#updatePeriodModal'>";
			row += "</td>";
			row += "</tr>";

      generatedRows += row;
    });

    return generatedRows;
  }

  this.appendRowsToBody = function(generatedRows){
    $('#periodResultTable tbody').append(generatedRows);
  }
}
