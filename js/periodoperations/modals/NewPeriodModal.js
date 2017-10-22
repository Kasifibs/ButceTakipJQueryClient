var NewPeriodModal = function(moneyValuePreparatorObj){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;

  NewPeriodModal.prototype.performInitializationsIfNeededAfterModalLoaded = function(){
    that.initDatePickers();
  }

  NewPeriodModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/periodoperations/modals/NewPeriodModal.html";
  }

  NewPeriodModal.prototype.saveCrudItem = function(){
    var name = $('#addPeriodNameTextField').val();
    var beginDate = $('#addPeriodBeginDatePicker').data("DateTimePicker").date();
    var endDate = $('#addPeriodEndDatePicker').data("DateTimePicker").date();

    var beginAmountInteger =$('#addBeginAmountIntegerPartTextField').val();
    var beginAmountDecimal =$('#addBeginAmountDecimalPartTextField').val();

    var newPeriod ={
      "name":name,
      "beginDate":beginDate.format("YYYY-MM-DD"),
      "endDate":endDate.format("YYYY-MM-DD"),
      "beginAmount":that.moneyValuePreparator.prepareMoneyValue(beginAmountInteger, beginAmountDecimal)
    }

    that.saveCrudItemActionObj.saveCrudItem(that.utils.getServerBaseURL() + "/period/kaydet", newPeriod, that.saveSuccess, that.saveFail);
  }

  NewPeriodModal.prototype.getSaveModalTitleText = function(){
    return "Dönem Ekle";
  }

  NewPeriodModal.prototype.getSaveSuccessMessage = function(){
    return "Dönem başarıyla eklendi!";
  }

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
