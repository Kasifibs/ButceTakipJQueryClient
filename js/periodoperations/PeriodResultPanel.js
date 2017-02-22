var PeriodResultPanel = function(){

  var that = this;

  var periodRetrieverObj = new PeriodRetriever();
  var periodTableGeneratorObj = new PeriodTableGenerator();
  var deletePeriodModalObj = new DeletePeriodModal();
  var updatePeriodModalObj = new UpdatePeriodModal();

  this.periodResultPanelLoaded = function(){
    $.get("/ButceTakip/views/periodoperations/modals/DeletePeriodModal.html", function(data){
        $("#deletePeriodModalDiv").append(data);
        deletePeriodModalObj.deletePeriodModalLoaded();
    });

    $.get("/ButceTakip/views/periodoperations/modals/UpdatePeriodModal.html", function(data){
        $("#updatePeriodModalDiv").append(data);
        updatePeriodModalObj.updatePeriodModalLoaded();
    });

    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generatePeriodTableFromResultData;
    periodRetrieverObj.retrieveAllPeriods(periodRetrieveHandlerOperation);
  }
}
