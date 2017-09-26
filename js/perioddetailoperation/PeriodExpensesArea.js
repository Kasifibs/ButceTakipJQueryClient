var PeriodExpensesArea = function(selectedPeriodId, crudItemRetriever){

  var that = this;
  this.periodId = selectedPeriodId;
  this.crudItemRetrieverObj = crudItemRetriever;
  this.expenseIdAmountExpenseItemTableGeneratorObj = new ExpenseIdAmountExpenseItemTableGenerator("periodKnownExpensesTableArea");
  this.utils = new Utils();

  this.retrievePeriodExpensesData = function(){
    var queryParams = {"periodId":that.periodId};

    this.crudItemRetrieverObj.retrieveUsingCriterias(that.utils.getServerBaseURL() + "/period/donemGiderBilgisiniGetir", queryParams, that.bindPeriodExpensesData);
  }

  this.bindPeriodExpensesData = function(retrievedData){
    that.expenseIdAmountExpenseItemTableGeneratorObj.generateTableFromResultData(retrievedData.periodExpensesList);
    $("#periodKnownExpensesTotalLabel").text(retrievedData.periodKnownExpensesTotal);

    $("#periodExpensesTotalIncomeCalculationLabel").text(retrievedData.periodTotalIncome);
    $("#periodExpensesResourceBeginEndDifCalculationLabel").text(retrievedData.periodBeginEndResourceDifference);
    $("#periodExpensesTotalExpensesCalculationLabel").text(retrievedData.periodTotalExpense);
  }

  this.expensesAreaLoaded = function(){
     that.retrievePeriodExpensesData();
  }

}
