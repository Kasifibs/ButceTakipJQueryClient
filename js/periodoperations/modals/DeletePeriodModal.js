var DeletePeriodModal = function(){

  var that = this;

  var deletePeriodActionObj = new DeletePeriodAction();
  var periodRetrieverObj = new PeriodRetriever();
  var periodTableGeneratorObj = new PeriodTableGenerator();

  var selectedItemId = 0;

  this.deletePeriodModalLoaded = function(){
    $('#deletePeriodActionButton').click(that.deletePeriod);

    $('#deletePeriodModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget);
      selectedItemId = button.attr('itemId');
      var modal = $(this);
      modal.find('#deleteModalBodyText').text(selectedItemId + "nolu dönemi silmek istediğinizden emin misiniz?")
    })
  }

  this.deletePeriod = function(){
    deletePeriodActionObj.deletePeriod(selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  this.deleteSuccess = function(){
    $("#deletePeriodModal").modal("hide");

    $.get("/ButceTakip/views/periodoperations/alerts/DeletePeriodSuccessAlert.html", function(data){
        $("#resultMessageShowingDiv").append(data);
    });

    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generatePeriodTableFromResultData;
    periodRetrieverObj.retrieveAllPeriods(periodRetrieveHandlerOperation);
  };

  this.deleteFail = function(){};
}
