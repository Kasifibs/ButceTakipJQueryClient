var PeriodQueryPanel = function(){

  var that = this;
  var periodTableGeneratorObj = new PeriodTableGenerator();

  PeriodQueryPanel.prototype.loadCrudItemSpecificCriteriasDivSynchronously = function(){
    $.ajax({
        url: "/ButceTakip/views/periodoperations/PeriodQueryPanel.html",
        success: function (data) {
          $("#crudItemSpecificCriteriasDiv").append(data);
          that.initDatePickers();
        },
        async: false
    });
  }

  PeriodQueryPanel.prototype.queryButtonClicked = function(){
    var name = $('#periodNameQueryTextField').val();
    var minBeginDate = $('#periodBeginDateTimePicker1').data("DateTimePicker").date();
    var maxBeginDate = $('#periodBeginDateTimePicker2').data("DateTimePicker").date();

    var minEndDate = $('#periodEndDateTimePicker1').data("DateTimePicker").date();
    var maxEndDate = $('#periodEndDateTimePicker2').data("DateTimePicker").date();

    var queryParams = {"name":name,
                       "minBeginDate":that.getFormattedDate(minBeginDate),
                       "maxBeginDate":that.getFormattedDate(maxBeginDate),
                       "minEndDate":that.getFormattedDate(minEndDate),
                       "maxEndDate":that.getFormattedDate(maxEndDate)};


    var periodItemRetrieveHandlerOperation = periodTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveUsingCriterias(that.utils.getServerBaseURL() + "/period/sorgula", queryParams, periodItemRetrieveHandlerOperation);
  }

  this.getFormattedDate = function(date){
    if(date != null){
        return date.format("DD.MM.YYYY");
    }
    return null;
  }

  this.initDatePickers = function(){
    $('#periodBeginDateTimePicker1').datetimepicker({
      format :'DD.MM.YYYY'
    });

    $('#periodBeginDateTimePicker2').datetimepicker({
      useCurrent: false,
      format :'DD.MM.YYYY'
    });

    $("#periodBeginDateTimePicker1").on("dp.change", function (e) {
            $('#periodBeginDateTimePicker2').data("DateTimePicker").minDate(e.date);
    });

    $("#periodBeginDateTimePicker2").on("dp.change", function (e) {
            $('#periodBeginDateTimePicker1').data("DateTimePicker").maxDate(e.date);
    });

    $('#periodEndDateTimePicker1').datetimepicker({
      format :'DD.MM.YYYY'
    });

    $('#periodEndDateTimePicker2').datetimepicker({
      useCurrent: false,
      format :'DD.MM.YYYY'
    });

    $("#periodEndDateTimePicker1").on("dp.change", function (e) {
            $('#periodEndDateTimePicker2').data("DateTimePicker").minDate(e.date);
    });

    $("#periodEndDateTimePicker2").on("dp.change", function (e) {
            $('#periodEndDateTimePicker1').data("DateTimePicker").maxDate(e.date);
    });
  }
}
