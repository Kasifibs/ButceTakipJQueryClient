var ExpenseResultPanel = function(moneyValuePreparatorObj){

  var that = this;
  var deleteExpenseModalObj = new DeleteExpenseModal();
  var updateExpenseModalObj = new UpdateExpenseModal(moneyValuePreparatorObj);

  ExpenseResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/expense/ExpenseResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
  }

  ExpenseResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteExpenseModalObj.deleteCrudItemModalLoaded();
  }

  ExpenseResultPanel.prototype.registerForItemDeleteEvent = function(){
    deleteExpenseModalObj.addItemDeletedListener(that);
  }

  ExpenseResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateExpenseModalObj.updateCrudItemModalLoaded();
  }

  ExpenseResultPanel.prototype.registerForItemUpdateEvent = function(){
    updateExpenseModalObj.addItemUpdatedListener(that);
  }
}
