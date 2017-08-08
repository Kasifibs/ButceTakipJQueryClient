var ResourceIdAmountResItemTableGenerator = function(whereToAppend){

  var that = this;
  this.whereToAppendTable = whereToAppend;

  this.generateTableFromResultData = function(resultData){
    var table = "<table id='resourceIdAmountResItemTable' class='table table-inverse'>";
    table += "<thead>";
    table += "<tr>";
    table += "<th> ID </th>";
    table += "<th> Miktar </th>";
    table += "<th> Varlik Kalemi</th>";
    table += "</tr>";
    table += "</thead>";
    table += "<tbody>";

    $.each(resultData, function(i, resource) {

      var row = "<tr>";
      row += "<td>" + resource.id + "</td>";
      row += "<td>" +resource.amount + "</td>";
      row += "<td>" +resource.resourceItem.name + "</td>";
      row += "</tr>";

      table += row;
    });

    table += "</tbody>";
    table += "</table>";

    $("#" + that.whereToAppendTable).append(table);
  }
}
