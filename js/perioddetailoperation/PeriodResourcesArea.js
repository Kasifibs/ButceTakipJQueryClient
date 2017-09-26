var PeriodResourcesArea = function(selectedPeriodId, crudItemRetriever){

  var that = this;
  this.periodId = selectedPeriodId;
  this.crudItemRetrieverObj = crudItemRetriever;
  this.resourceIdAmountResItemTableGeneratorObj = new ResourceIdAmountResItemTableGenerator("periodResorcesTableArea");
  this.utils = new Utils();

  this.retrievePeriodResourcesData = function(){
    var queryParams = {"periodId":that.periodId};

    this.crudItemRetrieverObj.retrieveUsingCriterias(that.utils.getServerBaseURL() + "/period/donemVarlikBilgisiniGetir", queryParams, that.bindPeriodResourcesData);
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
