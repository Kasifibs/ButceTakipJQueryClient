var UpdateIncomeItemModal = function(){

  var that = this;
  var incomeItemTableGeneratorObj = new IncomeItemTableGenerator();

  UpdateIncomeItemModal.prototype.retrieveSelectedCrudItem = function(selectedItemId){
    that.crudItemRetrieverObj.retrieveCrudItemById("https://localhost:8443/ButceTakipServer/gelirKalemi/kalem/", selectedItemId, that.fillModalWithCurrentCrudItem);
  }

  UpdateIncomeItemModal.prototype.fillModalWithCurrentCrudItem = function(retrievedItem){
    that.currentCrudItemId = retrievedItem.id;
    that.modal.find('#updateIncomeItemNameTextField').val(retrievedItem.name);
  }

  UpdateIncomeItemModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/itemoperations/incomeitem/modals/UpdateIncomeItemModal.html";
  }

  UpdateIncomeItemModal.prototype.updateCrudItem = function(){
    var name = $('#updateIncomeItemNameTextField').val();
    var updatedIncomeItem = {"id":that.currentCrudItemId,"name":name};

    that.updateCrudItemActionObj.updateCrudItem("https://localhost:8443/ButceTakipServer/gelirKalemi/guncelle", updatedIncomeItem, that.saveSuccess, that.saveFail);
  }

  UpdateIncomeItemModal.prototype.getUpdateModalTitleText = function(){
    return "Gelir Kalemi Güncelle";
  }

  UpdateIncomeItemModal.prototype.getUpdateSuccessMessage = function(){
    return "Gelir kalemi başarıyla güncellendi!";
  }

  UpdateIncomeItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var incomeItemRetrieveHandlerOperation = incomeItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gelirKalemi/liste", incomeItemRetrieveHandlerOperation);
  }

}