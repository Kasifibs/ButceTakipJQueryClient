var NewExpenseModal = function(moneyValuePreparatorObj){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;
  var expenseItemTableGeneratorObj = new ExpenseTableGenerator();

  NewExpenseModal.prototype.performInitializationsIfNeededAfterModalLoaded = function(){
    that.retrieveExpenseItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  NewExpenseModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/iteminstanceoperations/expense/modals/NewExpenseModal.html";
  }

  NewExpenseModal.prototype.saveCrudItem = function(){
    var expenseItemId = $('#addExpenseExpenseItemSelectField').find(":selected").val();
    var periodId = $('#addExpensePeriodSelectField').find(":selected").val();

    var amountInteger =$('#addExpenseMoneyIntegerPartTextField').val();
    var amountDecimal =$('#addExpenseMoneyDecimalPartTextField').val();

    var newExpense = {"expenseItem":{"id":expenseItemId},
                       "period":{"id":periodId},
                       "amount":that.moneyValuePreparator.prepareMoneyValue(amountInteger, amountDecimal)};

    that.saveCrudItemActionObj.saveCrudItem(that.utils.getServerBaseURL() + "/gider/kaydet", newExpense, that.saveSuccess, that.saveFail);
  }

  NewExpenseModal.prototype.getSaveModalTitleText = function(){
    return "Gider Ekle";
  }

  NewExpenseModal.prototype.getSaveSuccessMessage = function(){
    return "Gider başarıyla eklendi!";
  }

  NewExpenseModal.prototype.retrieveItemsToUpdateScreen = function(){
    var expenseRetrieveHandlerOperation = expenseItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/gider/liste", expenseRetrieveHandlerOperation);
  }

  this.retrieveExpenseItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/harcamaKalemi/liste", that.expenseItemsRetrieved);
  }

  this.expenseItemsRetrieved = function(resultData){
      $('#addExpenseExpenseItemSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, expenseItem) {
          $('#addExpenseExpenseItemSelectField').append('<option value='+expenseItem.id+'>'+expenseItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#addExpensePeriodSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#addExpensePeriodSelectField').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }
}
