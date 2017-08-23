var PeriodIncomesArea = function(selectedPeriodId, crudItemRetriever){

  var that = this;
  this.periodId = selectedPeriodId;
  this.crudItemRetrieverObj = crudItemRetriever;
  this.incomeIdAmountIncomeItemTableGeneratorObj = new IncomeIdAmountIncomeItemTableGenerator("periodIncomesTableArea");

  this.retrievePeriodIncomesData = function(){
    var queryParams = {"periodId":that.periodId};

    this.crudItemRetrieverObj.retrieveUsingCriterias("https://localhost:8443/ButceTakipServer/period/donemGelirBilgisiniGetir", queryParams, that.bindPeriodIncomesData);
  }

  this.bindPeriodIncomesData = function(retrievedData){
    that.incomeIdAmountIncomeItemTableGeneratorObj.generateTableFromResultData(retrievedData.periodIncomesList);

    $("#periodIncomesTotalResultLabel").text(retrievedData.periodTotalIncomes);
  }

  this.incomesAreaLoaded = function(){
     that.retrievePeriodIncomesData();
  }

}
