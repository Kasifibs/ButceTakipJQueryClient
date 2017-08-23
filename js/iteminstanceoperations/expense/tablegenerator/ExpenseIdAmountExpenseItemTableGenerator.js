var ExpenseIdAmountExpenseItemTableGenerator = function(whereToAppend){
  var that = this;
  this.whereToAppendTable = whereToAppend;

  this.generateTableFromResultData = function(resultData){
    var table = "<table id='expenseIdAmountExpenseItemTable' class='table table-inverse'>";
    table += "<thead>";
    table += "<tr>";
    table += "<th> ID </th>";
    table += "<th> Miktar </th>";
    table += "<th> Gider Kalemi</th>";
    table += "</tr>";
    table += "</thead>";
    table += "<tbody>";

    $.each(resultData, function(i, expense) {

      var row = "<tr>";
      row += "<td>" + expense.id + "</td>";
      row += "<td>" +expense.amount + "</td>";
      row += "<td>" +expense.expenseItemName + "</td>";
      row += "</tr>";

      table += row;
    });

    table += "</tbody>";
    table += "</table>";

    $("#" + that.whereToAppendTable).append(table);
  }
}
