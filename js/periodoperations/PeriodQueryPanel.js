var PeriodQueryPanel = function(){

  var that = this;
  var periodRetrieverObj = new PeriodRetriever();

  this.periodQueryPanelLoaded = function(){
    that.initDatePickers();
    $('#hidePeriodQueryPanelButton').click(that.hidePeriodQueryPanel);
    $('#showPeriodQueryPanelButton').click(that.showPeriodQueryPanel);
    $('#periodQueryButton').click(that.queryButtonClicked);
    $('#periodQueryCleanButton').click(that.cleanButtonClicked);
  }

  this.queryButtonClicked = function(){
    var minBeginDate = $('#periodBeginDateTimePicker1').data("DateTimePicker").date();
    var maxBeginDate = $('#periodBeginDateTimePicker2').data("DateTimePicker").date();

    var minEndDate = $('#periodEndDateTimePicker1').data("DateTimePicker").date();
    var maxEndDate = $('#periodEndDateTimePicker2').data("DateTimePicker").date();

    var queryParams = {"minBeginDate":that.getFormattedDate(minBeginDate),
                       "maxBeginDate":that.getFormattedDate(maxBeginDate),
                       "minEndDate":that.getFormattedDate(minEndDate),
                       "maxEndDate":that.getFormattedDate(maxEndDate)};

    periodRetrieverObj.retrieveUsingCriterias(queryParams);
  }

  this.getFormattedDate = function(date){
    if(date != null){
        return date.format("DD.MM.YYYY");
    }
    return null;
  }

  this.cleanButtonClicked = function(){
    $('#periodQueryDiv').empty();

    $.get("/ButceTakip/views/periodoperations/PeriodQueryPanel.html", function(data){
        $("#periodQueryDiv").append(data);
        that.periodQueryPanelLoaded();
    });
  }

  this.hidePeriodQueryPanel = function(){
    $('.queryFormElement').addClass("hiddenElement");
    $('#showPeriodQueryPanelButton').removeClass("hiddenElement");
  }

  this.showPeriodQueryPanel = function(){
    $('.queryFormElement').removeClass("hiddenElement");
    $('#showPeriodQueryPanelButton').addClass("hiddenElement");
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
