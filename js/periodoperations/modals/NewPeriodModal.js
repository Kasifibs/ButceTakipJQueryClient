var NewPeriodModal = function(moneyValuePreparator){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;
  var periodTableGeneratorObj = new PeriodTableGenerator();

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

    that.saveCrudItemActionObj.saveCrudItem("https://localhost:8443/ButceTakipServer/period/kaydet", newPeriod, that.saveSuccess, that.saveFail);
  }

  NewPeriodModal.prototype.getSaveModalTitleText = function(){
    return "Dönem Ekle";
  }

  NewPeriodModal.prototype.getSaveSuccessMessage = function(){
    return "Dönem başarıyla eklendi!";
  }

  NewPeriodModal.prototype.retrieveItemsToUpdateScreen = function(){
    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", periodRetrieveHandlerOperation);
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
