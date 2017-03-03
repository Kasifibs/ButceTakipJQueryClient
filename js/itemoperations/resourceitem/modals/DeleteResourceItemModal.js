var DeleteResourceItemModal = function(){

  var that = this;
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();

  DeleteResourceItemModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem("https://localhost:8443/ButceTakipServer/varlikKalemi/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeleteResourceItemModal.prototype.getDeleteModalTitleText = function(){
    return "Varlık Kalemi Sil";
  }

  DeleteResourceItemModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu varlık kalemini silmek istediğinizden emin misiniz?";
  }

  DeleteResourceItemModal.prototype.getDeleteSuccessMessage = function(){
    return "Varlık kalemi başarıyla silindi!";
  }

  DeleteResourceItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var resourceItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlikKalemi/liste", resourceItemRetrieveHandlerOperation);
  }
}
