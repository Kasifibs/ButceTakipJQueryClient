var ExpenseItemBottomPanel = function(){

  var that = this;
  var newExpenseItemModalObj = new NewExpenseItemModal();

  ExpenseItemBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/expenseitem/ExpenseItemBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  ExpenseItemBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newExpenseItemModalObj.newCrudItemModalLoaded();
  }

  ExpenseItemBottomPanel.prototype.registerForItemAdditionEvent = function(){
    newExpenseItemModalObj.addNewItemAddedListeners(that);
  }
}
