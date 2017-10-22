var NewResourceModal = function(moneyValuePreparatorObj){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;

  NewResourceModal.prototype.performInitializationsIfNeededAfterModalLoaded = function(){
    that.retrieveResourceItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  NewResourceModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/iteminstanceoperations/resource/modals/NewResourceModal.html";
  }

  NewResourceModal.prototype.saveCrudItem = function(){
    var resourceItemId = $('#addResourceResourceItemSelectField').find(":selected").val();
    var periodId = $('#addResourcePeriodSelectField').find(":selected").val();

    var amountInteger =$('#addResourceMoneyIntegerPartTextField').val();
    var amountDecimal =$('#addResourceMoneyDecimalPartTextField').val();

    var newResource = {"resourceItem":{"id":resourceItemId},
                       "period":{"id":periodId},
                       "amount":that.moneyValuePreparator.prepareMoneyValue(amountInteger, amountDecimal)};

    that.saveCrudItemActionObj.saveCrudItem(that.utils.getServerBaseURL() + "/varlik/kaydet", newResource, that.saveSuccess, that.saveFail);
  }

  NewResourceModal.prototype.getSaveModalTitleText = function(){
    return "Varlık Ekle";
  }

  NewResourceModal.prototype.getSaveSuccessMessage = function(){
    return "Varlık başarıyla eklendi!";
  }

  this.retrieveResourceItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/varlikKalemi/liste", that.resourceItemsRetrieved);
  }

  this.resourceItemsRetrieved = function(resultData){
      $('#addResourceResourceItemSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, resourceItem) {
          $('#addResourceResourceItemSelectField').append('<option value='+resourceItem.id+'>'+resourceItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#addResourcePeriodSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#addResourcePeriodSelectField').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }
}
