var UpdatePeriodModal = function(){

  var that = this;
  var periodTableGeneratorObj = new PeriodTableGenerator();

  UpdatePeriodModal.prototype.performInitializationsIfNeededAfterModalLoaded = function(){
    that.initDatePickers();
  }

  UpdatePeriodModal.prototype.retrieveSelectedCrudItem = function(selectedItemId){
    that.crudItemRetrieverObj.retrieveCrudItemById("https://localhost:8443/ButceTakipServer/period/", selectedItemId, that.fillModalWithCurrentCrudItem);
  }

  UpdatePeriodModal.prototype.fillModalWithCurrentCrudItem = function(retrievedPeriod){
    that.currentPeriodId = retrievedPeriod.id;
    var retrievedBeginDate = moment(retrievedPeriod.beginDate).format('DD.MM.YYYY');
    var retrievedEndDate = moment(retrievedPeriod.endDate).format('DD.MM.YYYY');

    that.modal.find('#updatePeriodNameTextField').val(retrievedPeriod.name);
    that.modal.find('#updatePeriodBeginDatePicker').data("DateTimePicker").date(retrievedBeginDate);
    that.modal.find('#updatePeriodEndDatePicker').data("DateTimePicker").date(retrievedEndDate);
  }

  UpdatePeriodModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/periodoperations/modals/UpdatePeriodModal.html";
  }

  UpdatePeriodModal.prototype.updateCrudItem = function(){
    var name = $('#updatePeriodNameTextField').val();
    var beginDate = $('#updatePeriodBeginDatePicker').data("DateTimePicker").date();
    var endDate = $('#updatePeriodEndDatePicker').data("DateTimePicker").date();

    var updatedPeriod ={
      "id":that.currentPeriodId,
      "name":name,
      "beginDate":beginDate.format("YYYY-MM-DD"),
      "endDate":endDate.format("YYYY-MM-DD")
    }

    that.updateCrudItemActionObj.updateCrudItem("https://localhost:8443/ButceTakipServer/period/guncelle", updatedPeriod, that.saveSuccess, that.saveFail);
  }

  UpdatePeriodModal.prototype.getUpdateModalTitleText = function(){
    return "Dönem Güncelle";
  }

  UpdatePeriodModal.prototype.getUpdateSuccessMessage = function(){
    return "Dönem başarıyla güncellendi!";
  }

  UpdatePeriodModal.prototype.retrieveItemsToUpdateScreen = function(){
    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", periodRetrieveHandlerOperation);
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
