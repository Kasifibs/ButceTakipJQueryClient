var PeriodResultPanel = function(){

    var that = this;
    var periodTableGeneratorObj = new PeriodTableGenerator();
    var deletePeriodModalObj = new DeletePeriodModal();
    var updatePeriodModalObj = new UpdatePeriodModal();

  PeriodResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/periodoperations/PeriodResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });

    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", periodRetrieveHandlerOperation);
  }

  PeriodResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deletePeriodModalObj.deleteCrudItemModalLoaded();
  }

  PeriodResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updatePeriodModalObj.updateCrudItemModalLoaded();
  }
}
