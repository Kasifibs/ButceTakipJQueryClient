var NewResourceItemModal = function(){

  var that = this;
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();

  NewResourceItemModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/itemoperations/resourceitem/modals/NewResourceItemModal.html";
  }

  NewResourceItemModal.prototype.saveCrudItem = function(){
    var name = $('#addResourceItemNameTextField').val();
    var newResourceItem = {"name":name};

    that.saveCrudItemActionObj.saveCrudItem("https://localhost:8443/ButceTakipServer/varlikKalemi/kaydet", newResourceItem, that.saveSuccess, that.saveFail);
  }

  NewResourceItemModal.prototype.getSaveModalTitleText = function(){
    return "Varlık Kalemi Ekle";
  }

  NewResourceItemModal.prototype.getSaveSuccessMessage = function(){
    return "Varlık kalemi başarıyla eklendi!";
  }

  NewResourceItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var resourceItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlikKalemi/liste", resourceItemRetrieveHandlerOperation);
  }

}
