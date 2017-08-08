var PeriodResourcesArea = function(selectedPeriodId, crudItemRetriever){

  var that = this;
  this.periodId = selectedPeriodId;
  this.crudItemRetrieverObj = crudItemRetriever;
  this.resourceIdAmountResItemTableObj = new ResourceIdAmountResItemTableGenerator("periodResourcesTableDiv");

  this.retrieveAndBindPeriodResourcesData = function(){
    var resourceRetrieveHandlerOperation = that.resourceIdAmountResItemTableObj.generateTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlik/liste", resourceRetrieveHandlerOperation);
  }

  this.resourcesAreaLoaded = function(){
     that.retrieveAndBindPeriodResourcesData();
  }
}
