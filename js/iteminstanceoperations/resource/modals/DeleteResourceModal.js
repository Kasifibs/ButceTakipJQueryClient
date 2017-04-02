var DeleteResourceModal = function(){
  var that = this;
  var resourceTableGeneratorObj = new ResourceTableGenerator();

  DeleteResourceModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem("https://localhost:8443/ButceTakipServer/varlik/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeleteResourceModal.prototype.getDeleteModalTitleText = function(){
    return "Varlık Sil";
  }

  DeleteResourceModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu varlığı silmek istediğinizden emin misiniz?";
  }

  DeleteResourceModal.prototype.getDeleteSuccessMessage = function(){
    return "Varlık başarıyla silindi!";
  }

  DeleteResourceModal.prototype.retrieveItemsToUpdateScreen = function(){
    var resourceRetrieveHandlerOperation = resourceTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlik/liste", resourceRetrieveHandlerOperation);
  }
}
