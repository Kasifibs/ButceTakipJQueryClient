var PeriodResultPanel = function(moneyValuePreparator){

    var that = this;
    var periodTableGeneratorObj = new PeriodTableGenerator();
    var deletePeriodModalObj = new DeletePeriodModal();
    var updatePeriodModalObj = new UpdatePeriodModal(moneyValuePreparator);

  PeriodResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/periodoperations/PeriodResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });

    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/period/liste", periodRetrieveHandlerOperation);
  }

  PeriodResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deletePeriodModalObj.deleteCrudItemModalLoaded();
  }

  PeriodResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updatePeriodModalObj.updateCrudItemModalLoaded();
  }
}
