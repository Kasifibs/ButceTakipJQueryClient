var UpdateResourceItemModal = function(){

  var that = this;
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();

  UpdateResourceItemModal.prototype.retrieveSelectedCrudItem = function(selectedItemId){
    that.crudItemRetrieverObj.retrieveCrudItemById(that.utils.getServerBaseURL() + "/varlikKalemi/kalem/", selectedItemId, that.fillModalWithCurrentCrudItem);
  }

  UpdateResourceItemModal.prototype.fillModalWithCurrentCrudItem = function(retrievedItem){
    that.currentCrudItemId = retrievedItem.id;
    that.modal.find('#updateResourceItemNameTextField').val(retrievedItem.name);
  }

  UpdateResourceItemModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/itemoperations/resourceitem/modals/UpdateResourceItemModal.html";
  }

  UpdateResourceItemModal.prototype.updateCrudItem = function(){
    var name = $('#updateResourceItemNameTextField').val();
    var updatedResourceItem = {"id":that.currentCrudItemId,"name":name};

    that.updateCrudItemActionObj.updateCrudItem(that.utils.getServerBaseURL() + "/varlikKalemi/guncelle", updatedResourceItem, that.saveSuccess, that.saveFail);
  }

  UpdateResourceItemModal.prototype.getUpdateModalTitleText = function(){
    return "Varlık Kalemi Güncelle";
  }

  UpdateResourceItemModal.prototype.getUpdateSuccessMessage = function(){
    return "Varlık kalemi başarıyla güncellendi!";
  }

  UpdateResourceItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var resourceItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/varlikKalemi/liste", resourceItemRetrieveHandlerOperation);
  }

}
