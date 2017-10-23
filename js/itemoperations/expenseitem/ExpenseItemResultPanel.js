var ExpenseItemResultPanel = function(){

    var that = this;
    var deleteExpenseItemModalObj = new DeleteExpenseItemModal();
    var updateExpenseItemModalObj = new UpdateExpenseItemModal();

  ExpenseItemResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/expenseitem/ExpenseItemResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
  }

  ExpenseItemResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteExpenseItemModalObj.deleteCrudItemModalLoaded();
  }

  ExpenseItemResultPanel.prototype.registerForItemDeleteEvent = function(){
    deleteExpenseItemModalObj.addItemDeletedListener(that);
  }

  ExpenseItemResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateExpenseItemModalObj.updateCrudItemModalLoaded();
  }

  ExpenseItemResultPanel.prototype.registerForItemUpdateEvent = function(){
    updateExpenseItemModalObj.addItemUpdatedListener(that);
  }
}
