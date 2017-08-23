var IncomeIdAmountIncomeItemTableGenerator = function(whereToAppend){

  var that = this;
  this.whereToAppendTable = whereToAppend;

  this.generateTableFromResultData = function(resultData){
    var table = "<table id='incomeIdAmountIncomeItemTable' class='table table-inverse'>";
    table += "<thead>";
    table += "<tr>";
    table += "<th> ID </th>";
    table += "<th> Miktar </th>";
    table += "<th> Gelir Kalemi</th>";
    table += "</tr>";
    table += "</thead>";
    table += "<tbody>";

    $.each(resultData, function(i, income) {

      var row = "<tr>";
      row += "<td>" + income.id + "</td>";
      row += "<td>" +income.amount + "</td>";
      row += "<td>" +income.incomeItem.name + "</td>";
      row += "</tr>";

      table += row;
    });

    table += "</tbody>";
    table += "</table>";

    $("#" + that.whereToAppendTable).append(table);
  }
}
