var PeriodExpensesArea = function(selectedPeriodId, crudItemRetriever){

  var that = this;
  this.periodId = selectedPeriodId;
  this.crudItemRetrieverObj = crudItemRetriever;
  this.expenseIdAmountExpenseItemTableGeneratorObj = new ExpenseIdAmountExpenseItemTableGenerator("periodKnownExpensesTableArea");

  this.retrievePeriodExpensesData = function(){
    var queryParams = {"periodId":that.periodId};

    this.crudItemRetrieverObj.retrieveUsingCriterias("https://localhost:8443/ButceTakipServer/period/donemGiderBilgisiniGetir", queryParams, that.bindPeriodExpensesData);
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
