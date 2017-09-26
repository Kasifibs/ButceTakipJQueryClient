var ExpenseResultPanel = function(moneyValuePreparatorObj){

  var that = this;
  var expenseTableGeneratorObj = new ExpenseTableGenerator();
  var deleteExpenseModalObj = new DeleteExpenseModal();
  var updateExpenseModalObj = new UpdateExpenseModal(moneyValuePreparatorObj);

  ExpenseResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/expense/ExpenseResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
    var expenseRetrieveHandlerOperation = expenseTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/gider/liste", expenseRetrieveHandlerOperation);
  }

  ExpenseResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteExpenseModalObj.deleteCrudItemModalLoaded();
  }

  ExpenseResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateExpenseModalObj.updateCrudItemModalLoaded();
  }
}
