var NewIncomeModal = function(moneyValuePreparatorObj){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;
  var incomeItemTableGeneratorObj = new IncomeTableGenerator();

  NewIncomeModal.prototype.performInitializationsIfNeededAfterModalLoaded = function(){
    that.retrieveIncomeItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  NewIncomeModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/iteminstanceoperations/income/modals/NewIncomeModal.html";
  }

  NewIncomeModal.prototype.saveCrudItem = function(){
    var incomeItemId = $('#addIncomeIncomeItemSelectField').find(":selected").val();
    var periodId = $('#addIncomePeriodSelectField').find(":selected").val();

    var amountInteger =$('#addIncomeMoneyIntegerPartTextField').val();
    var amountDecimal =$('#addIncomeMoneyDecimalPartTextField').val();

    var newIncome = {"incomeItem":{"id":incomeItemId},
                       "period":{"id":periodId},
                       "amount":that.moneyValuePreparator.prepareMoneyValue(amountInteger, amountDecimal)};

    that.saveCrudItemActionObj.saveCrudItem("https://localhost:8443/ButceTakipServer/gelir/kaydet", newIncome, that.saveSuccess, that.saveFail);
  }

  NewIncomeModal.prototype.getSaveModalTitleText = function(){
    return "Gelir Ekle";
  }

  NewIncomeModal.prototype.getSaveSuccessMessage = function(){
    return "Gelir başarıyla eklendi!";
  }

  NewIncomeModal.prototype.retrieveItemsToUpdateScreen = function(){
    var incomeRetrieveHandlerOperation = incomeItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gelir/liste", incomeRetrieveHandlerOperation);
  }

  this.retrieveIncomeItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gelirKalemi/liste", that.incomeItemsRetrieved);
  }

  this.incomeItemsRetrieved = function(resultData){
      $('#addIncomeIncomeItemSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, incomeItem) {
          $('#addIncomeIncomeItemSelectField').append('<option value='+incomeItem.id+'>'+incomeItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#addIncomePeriodSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#addIncomePeriodSelectField').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }
}
