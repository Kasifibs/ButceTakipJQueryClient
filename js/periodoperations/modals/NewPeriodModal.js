var NewPeriodModal = function(){

  var that=this;

  var savePeriodActionObj = new SavePeriodAction();
  var periodRetrieverObj = new PeriodRetriever();
  var periodTableGeneratorObj = new PeriodTableGenerator();

  this.newPeriodModalLoaded = function(){
    that.initDatePickers();
    $('#saveNewPeriodButton').click(that.saveNewPeriod);
  }

  this.saveNewPeriod = function(){
    var name = $('#addPeriodNameTextField').val();
    var beginDate = $('#addPeriodBeginDatePicker').data("DateTimePicker").date();
    var endDate = $('#addPeriodEndDatePicker').data("DateTimePicker").date();

    var newPeriod ={
      "name":name,
      "beginDate":beginDate.format("YYYY-MM-DD"),
      "endDate":endDate.format("YYYY-MM-DD")
    }

    savePeriodActionObj.savePeriod(newPeriod, that.saveSuccess, that.saveFail);
  }

  this.saveSuccess = function(){
    $("#newPeriodModal").modal("hide");

    $.get("/ButceTakip/views/periodoperations/alerts/NewPeriodSuccessAlert.html", function(data){
        $("#resultMessageShowingDiv").append(data);
    });

    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generatePeriodTableFromResultData;
    periodRetrieverObj.retrieveAllPeriods(periodRetrieveHandlerOperation);
  };

  this.saveFail = function(){};

  this.initDatePickers = function(){
    $('#addPeriodBeginDatePicker').datetimepicker({
      format :'DD.MM.YYYY'
    });

    $('#addPeriodEndDatePicker').datetimepicker({
      useCurrent: false,
      format :'DD.MM.YYYY'
    });

    $("#addPeriodBeginDatePicker").on("dp.change", function (e) {
            $('#addPeriodEndDatePicker').data("DateTimePicker").minDate(e.date);
    });

    $("#addPeriodEndDatePicker").on("dp.change", function (e) {
            $('#addPeriodBeginDatePicker').data("DateTimePicker").maxDate(e.date);
    });
  }
}
