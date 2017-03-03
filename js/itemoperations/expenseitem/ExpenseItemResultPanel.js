var ExpenseItemResultPanel = function(){

    var that = this;
    var expenseItemTableGeneratorObj = new ExpenseItemTableGenerator();
    var deleteExpenseItemModalObj = new DeleteExpenseItemModal();
    var updateExpenseItemModalObj = new UpdateExpenseItemModal();

  ExpenseItemResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/expenseitem/ExpenseItemResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });

    var expenseItemRetrieveHandlerOperation = expenseItemTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/harcamaKalemi/liste", expenseItemRetrieveHandlerOperation);
  }

  ExpenseItemResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteExpenseItemModalObj.deleteCrudItemModalLoaded();
  }

  ExpenseItemResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateExpenseItemModalObj.updateCrudItemModalLoaded();
  }
}
