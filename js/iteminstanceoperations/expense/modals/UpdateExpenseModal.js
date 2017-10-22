var UpdateExpenseModal = function(moneyValuePreparatorObj){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;

  UpdateExpenseModal.prototype.performInitializationsIfNeededAfterModalLoaded = function(){
    that.retrieveExpenseItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  UpdateExpenseModal.prototype.retrieveSelectedCrudItem = function(selectedItemId){
    that.crudItemRetrieverObj.retrieveCrudItemById(that.utils.getServerBaseURL() + "/gider/gider/", selectedItemId, that.fillModalWithCurrentCrudItem);
  }

  UpdateExpenseModal.prototype.fillModalWithCurrentCrudItem = function(retrievedItem){
    that.currentCrudItemId = retrievedItem.id;
    that.modal.find('#updateExpenseExpenseItemSelectField').val(retrievedItem.expenseItem.id);
    that.modal.find('#updateExpensePeriodSelectField').val(retrievedItem.period.id);
    var amount = retrievedItem.amount + "";
    var amountParts = amount.split('.');
    that.modal.find('#updateExpenseMoneyIntegerPartTextField').val(amountParts[0]);
    that.modal.find('#updateExpenseMoneyDecimalPartTextField').val(amountParts[1]);
  }

  UpdateExpenseModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/iteminstanceoperations/expense/modals/UpdateExpenseModal.html";
  }

  UpdateExpenseModal.prototype.updateCrudItem = function(){
    var expenseItemId = $('#updateExpenseExpenseItemSelectField').find(":selected").val();
    var periodId = $('#updateExpensePeriodSelectField').find(":selected").val();

    var amountInteger =$('#updateExpenseMoneyIntegerPartTextField').val();
    var amountDecimal =$('#updateExpenseMoneyDecimalPartTextField').val();

    var updatedExpense = {"id":that.currentCrudItemId,
                         "expenseItem":{"id":expenseItemId},
                          "period":{"id":periodId},
                          "amount":that.moneyValuePreparator.prepareMoneyValue(amountInteger, amountDecimal)};;

    that.updateCrudItemActionObj.updateCrudItem(that.utils.getServerBaseURL() + "/gider/guncelle", updatedExpense, that.saveSuccess, that.saveFail);
  }

  UpdateExpenseModal.prototype.getUpdateModalTitleText = function(){
    return "Gider Güncelle";
  }

  UpdateExpenseModal.prototype.getUpdateSuccessMessage = function(){
    return "Gider başarıyla güncellendi!";
  }

  this.retrieveExpenseItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/harcamaKalemi/liste", that.expenseItemsRetrieved);
  }

  this.expenseItemsRetrieved = function(resultData){
      $('#updateExpenseExpenseItemSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, expenseItem) {
          $('#updateExpenseExpenseItemSelectField').append('<option value='+expenseItem.id+'>'+expenseItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#updateExpensePeriodSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#updateExpensePeriodSelectField').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }

}
