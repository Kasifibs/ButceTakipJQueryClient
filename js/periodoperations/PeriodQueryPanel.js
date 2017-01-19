var PeriodQueryPanel = function(){

  var that = this;

  this.periodQueryPanelLoaded = function(){
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

    $('#hidePeriodQueryPanelButton').click(that.hidePeriodQueryPanel);
    $('#showPeriodQueryPanelButton').click(that.showPeriodQueryPanel);

  }

  this.hidePeriodQueryPanel = function(){
    $('.queryFormElement').addClass("hiddenElement");
    $('#showPeriodQueryPanelButton').removeClass("hiddenElement");
  }

  this.showPeriodQueryPanel = function(){
    $('.queryFormElement').removeClass("hiddenElement");
    $('#showPeriodQueryPanelButton').addClass("hiddenElement");
  }
}
