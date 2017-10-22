var UpdateIncomeModal = function(moneyValuePreparatorObj){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;

  UpdateIncomeModal.prototype.performInitializationsIfNeededAfterModalLoaded = function(){
    that.retrieveIncomeItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  UpdateIncomeModal.prototype.retrieveSelectedCrudItem = function(selectedItemId){
    that.crudItemRetrieverObj.retrieveCrudItemById(that.utils.getServerBaseURL() + "/gelir/gelir/", selectedItemId, that.fillModalWithCurrentCrudItem);
  }

  UpdateIncomeModal.prototype.fillModalWithCurrentCrudItem = function(retrievedItem){
    that.currentCrudItemId = retrievedItem.id;
    that.modal.find('#updateIncomeIncomeItemSelectField').val(retrievedItem.incomeItem.id);
    that.modal.find('#updateIncomePeriodSelectField').val(retrievedItem.period.id);
    var amount = retrievedItem.amount + "";
    var amountParts = amount.split('.');
    that.modal.find('#updateIncomeMoneyIntegerPartTextField').val(amountParts[0]);
    that.modal.find('#updateIncomeMoneyDecimalPartTextField').val(amountParts[1]);
  }

  UpdateIncomeModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/iteminstanceoperations/income/modals/UpdateIncomeModal.html";
  }

  UpdateIncomeModal.prototype.updateCrudItem = function(){
    var incomeItemId = $('#updateIncomeIncomeItemSelectField').find(":selected").val();
    var periodId = $('#updateIncomePeriodSelectField').find(":selected").val();

    var amountInteger =$('#updateIncomeMoneyIntegerPartTextField').val();
    var amountDecimal =$('#updateIncomeMoneyDecimalPartTextField').val();

    var updatedIncome = {"id":that.currentCrudItemId,
                         "incomeItem":{"id":incomeItemId},
                          "period":{"id":periodId},
                          "amount":that.moneyValuePreparator.prepareMoneyValue(amountInteger, amountDecimal)};;

    that.updateCrudItemActionObj.updateCrudItem(that.utils.getServerBaseURL() + "/gelir/guncelle", updatedIncome, that.saveSuccess, that.saveFail);
  }

  UpdateIncomeModal.prototype.getUpdateModalTitleText = function(){
    return "Gelir Güncelle";
  }

  UpdateIncomeModal.prototype.getUpdateSuccessMessage = function(){
    return "Gelir başarıyla güncellendi!";
  }

  this.retrieveIncomeItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/gelirKalemi/liste", that.incomeItemsRetrieved);
  }

  this.incomeItemsRetrieved = function(resultData){
      $('#updateIncomeIncomeItemSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, incomeItem) {
          $('#updateIncomeIncomeItemSelectField').append('<option value='+incomeItem.id+'>'+incomeItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#updateIncomePeriodSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#updateIncomePeriodSelectField').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }

}
