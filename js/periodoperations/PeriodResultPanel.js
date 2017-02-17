var PeriodResultPanel = function(){

  var that = this;

  var periodRetrieverObj = new PeriodRetriever();
  var periodTableGeneratorObj = new PeriodTableGenerator();
  var deletePeriodModalObj = new DeletePeriodModal();

  this.periodResultPanelLoaded = function(){
    $.get("/ButceTakip/views/periodoperations/modals/DeletePeriodModal.html", function(data){
        $("#deletePeriodModalDiv").append(data);
        deletePeriodModalObj.deletePeriodModalLoaded();
    });

    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generatePeriodTableFromResultData;
    periodRetrieverObj.retrieveAllPeriods(periodRetrieveHandlerOperation);
  }
}
