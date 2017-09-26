var PeriodIncomesArea = function(selectedPeriodId, crudItemRetriever){

  var that = this;
  this.periodId = selectedPeriodId;
  this.crudItemRetrieverObj = crudItemRetriever;
  this.incomeIdAmountIncomeItemTableGeneratorObj = new IncomeIdAmountIncomeItemTableGenerator("periodIncomesTableArea");
  this.utils = new Utils();

  this.retrievePeriodIncomesData = function(){
    var queryParams = {"periodId":that.periodId};

    this.crudItemRetrieverObj.retrieveUsingCriterias(that.utils.getServerBaseURL() + "/period/donemGelirBilgisiniGetir", queryParams, that.bindPeriodIncomesData);
  }

  this.bindPeriodIncomesData = function(retrievedData){
    that.incomeIdAmountIncomeItemTableGeneratorObj.generateTableFromResultData(retrievedData.periodIncomesList);

    $("#periodIncomesTotalResultLabel").text(retrievedData.periodTotalIncomes);
  }

  this.incomesAreaLoaded = function(){
     that.retrievePeriodIncomesData();
  }

}
