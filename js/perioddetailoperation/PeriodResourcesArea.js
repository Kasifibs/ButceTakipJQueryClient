var PeriodResourcesArea = function(selectedPeriodId, crudItemRetriever){

  var that = this;
  this.periodId = selectedPeriodId;
  this.crudItemRetrieverObj = crudItemRetriever;
  this.resourceIdAmountResItemTableGeneratorObj = new ResourceIdAmountResItemTableGenerator("periodResorcesTableArea");

  this.retrievePeriodResourcesData = function(){
    var queryParams = {"periodId":that.periodId};

    this.crudItemRetrieverObj.retrieveUsingCriterias("https://localhost:8443/ButceTakipServer/period/donemVarlikBilgisiniGetir", queryParams, that.bindPeriodResourcesData);
  }

  this.bindPeriodResourcesData = function(retrievedData){
    that.resourceIdAmountResItemTableGeneratorObj.generateTableFromResultData(retrievedData.periodResourcesList);

    $("#periodEndAmountCalculationLabel").text(retrievedData.periodEndAmount);
    $("#periodBeginAmountCalculationLabel").text(retrievedData.periodBeginAmount);
    $("#periodDifferenceAmountCalculationLabel").text(retrievedData.periodResult);
  }

  this.resourcesAreaLoaded = function(){
     that.retrievePeriodResourcesData();
  }
}
