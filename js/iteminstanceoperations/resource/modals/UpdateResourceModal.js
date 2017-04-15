var UpdateResourceModal = function(moneyValuePreparatorObj){

  var that = this;
  this.moneyValuePreparator = moneyValuePreparatorObj;
  var resourceTableGeneratorObj = new ResourceTableGenerator();

  UpdateResourceModal.prototype.performInitializationsIfNeededAfterModalLoaded = function(){
    that.retrieveResourceItemsToFillSelectInput();
    that.retrievePeriodsToFillSelectInput();
  }

  UpdateResourceModal.prototype.retrieveSelectedCrudItem = function(selectedItemId){
    that.crudItemRetrieverObj.retrieveCrudItemById("https://localhost:8443/ButceTakipServer/varlik/varlik/", selectedItemId, that.fillModalWithCurrentCrudItem);
  }

  UpdateResourceModal.prototype.fillModalWithCurrentCrudItem = function(retrievedItem){
    that.currentCrudItemId = retrievedItem.id;
    that.modal.find('#updateResourceResourceItemSelectField').val(retrievedItem.resourceItem.id);
    that.modal.find('#updateResourcePeriodSelectField').val(retrievedItem.period.id);
    var amount = retrievedItem.amount + "";
    var amountParts = amount.split('.');
    that.modal.find('#updateResourceMoneyIntegerPartTextField').val(amountParts[0]);
    that.modal.find('#updateResourceMoneyDecimalPartTextField').val(amountParts[1]);
  }

  UpdateResourceModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/iteminstanceoperations/resource/modals/UpdateResourceModal.html";
  }

  UpdateResourceModal.prototype.updateCrudItem = function(){
    var resourceItemId = $('#updateResourceResourceItemSelectField').find(":selected").val();
    var periodId = $('#updateResourcePeriodSelectField').find(":selected").val();

    var amountInteger =$('#updateResourceMoneyIntegerPartTextField').val();
    var amountDecimal =$('#updateResourceMoneyDecimalPartTextField').val();

    var updatedResource = {"id":that.currentCrudItemId,
                           "resourceItem":{"id":resourceItemId},
                           "period":{"id":periodId},
                           "amount":that.moneyValuePreparator.prepareMoneyValue(amountInteger, amountDecimal)};;

    that.updateCrudItemActionObj.updateCrudItem("https://localhost:8443/ButceTakipServer/varlik/guncelle", updatedResource, that.saveSuccess, that.saveFail);
  }

  UpdateResourceModal.prototype.getUpdateModalTitleText = function(){
    return "Varlık Güncelle";
  }

  UpdateResourceModal.prototype.getUpdateSuccessMessage = function(){
    return "Varlık başarıyla güncellendi!";
  }

  UpdateResourceModal.prototype.retrieveItemsToUpdateScreen = function(){
    var resourceRetrieveHandlerOperation = resourceTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlik/liste", resourceRetrieveHandlerOperation);
  }

  this.retrieveResourceItemsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlikKalemi/liste", that.resourceItemsRetrieved);
  }

  this.resourceItemsRetrieved = function(resultData){
      $('#updateResourceResourceItemSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, resourceItem) {
          $('#updateResourceResourceItemSelectField').append('<option value='+resourceItem.id+'>'+resourceItem.name+'</option>');
      });
  }

  this.retrievePeriodsToFillSelectInput = function(){
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", that.periodsRetrieved);
  }

  this.periodsRetrieved = function(resultData){
      $('#updateResourcePeriodSelectField').append('<option value="">Seçiniz</option>');
      $.each(resultData, function(i, period) {
          $('#updateResourcePeriodSelectField').append('<option value='+period.id+'>'+period.name+'</option>');
      });
  }

}
