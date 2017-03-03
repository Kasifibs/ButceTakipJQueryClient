var ExpenseItemBottomPanel = function(){

  var newExpenseItemModalObj = new NewExpenseItemModal();

  ExpenseItemBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/expenseitem/ExpenseItemBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  ExpenseItemBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newExpenseItemModalObj.newCrudItemModalLoaded();
  }
}
