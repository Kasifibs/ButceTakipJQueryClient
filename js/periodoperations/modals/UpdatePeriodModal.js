var UpdatePeriodModal = function(){

  var that = this;
  var modal;
  var currentPeriodId;
  var periodRetrieverObj = new PeriodRetriever();
  var periodTableGeneratorObj = new PeriodTableGenerator();
  var updatePeriodActionObj = new UpdatePeriodAction();

  this.updatePeriodModalLoaded = function(){
    that.initDatePickers();
    $('#updatePeriodButton').click(that.updatePeriod);

    $('#updatePeriodModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget);
      selectedItemId = button.attr('itemId');
      periodRetrieverObj.retrievePeriodById(selectedItemId, that.fillModalWithCurrentPeriod);
      modal = $(this);
    })
  }

  this.updatePeriod = function(){
    var name = $('#updatePeriodNameTextField').val();
    var beginDate = $('#updatePeriodBeginDatePicker').data("DateTimePicker").date();
    var endDate = $('#updatePeriodEndDatePicker').data("DateTimePicker").date();

    var updatedPeriod ={
      "id":currentPeriodId,
      "name":name,
      "beginDate":beginDate.format("YYYY-MM-DD"),
      "endDate":endDate.format("YYYY-MM-DD")
    }

    updatePeriodActionObj.updatePeriod(updatedPeriod, that.updateSuccess, that.updateFail);
  }

  this.updateSuccess = function(){
    $("#updatePeriodModal").modal("hide");

    $.get("/ButceTakip/views/periodoperations/alerts/UpdatePeriodSuccessAlert.html", function(data){
        $("#resultMessageShowingDiv").append(data);
    });

    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generatePeriodTableFromResultData;
    periodRetrieverObj.retrieveAllPeriods(periodRetrieveHandlerOperation);
  };

  this.updateFail = function(){};

  this.fillModalWithCurrentPeriod = function(resultData){
    var retrievedPeriod = resultData;
    currentPeriodId = retrievedPeriod.id;
    var retrievedBeginDate = moment(retrievedPeriod.beginDate).format('DD.MM.YYYY');
    var retrievedEndDate = moment(retrievedPeriod.endDate).format('DD.MM.YYYY');

    modal.find('#updatePeriodNameTextField').val(retrievedPeriod.name);
    modal.find('#updatePeriodBeginDatePicker').data("DateTimePicker").date(retrievedBeginDate);
    modal.find('#updatePeriodEndDatePicker').data("DateTimePicker").date(retrievedEndDate);
  }

  this.initDatePickers = function(){
    $('#updatePeriodBeginDatePicker').datetimepicker({
      format :'DD.MM.YYYY'
    });

    $('#updatePeriodEndDatePicker').datetimepicker({
      useCurrent: false,
      format :'DD.MM.YYYY'
    });

    $("#updatePeriodBeginDatePicker").on("dp.change", function (e) {
            $('#updatePeriodEndDatePicker').data("DateTimePicker").minDate(e.date);
    });

    $("#updatePeriodEndDatePicker").on("dp.change", function (e) {
            $('#updatePeriodBeginDatePicker').data("DateTimePicker").maxDate(e.date);
    });
  }
}
