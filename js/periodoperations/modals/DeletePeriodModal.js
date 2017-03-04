var DeletePeriodModal = function(){

  var that = this;
  var periodTableGeneratorObj = new PeriodTableGenerator();

  DeletePeriodModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem("https://localhost:8443/ButceTakipServer/period/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeletePeriodModal.prototype.getDeleteModalTitleText = function(){
    return "Dönem Sil";
  }

  DeletePeriodModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu dönemi silmek istediğinizden emin misiniz?";
  }

  DeletePeriodModal.prototype.getDeleteSuccessMessage = function(){
    return "Dönem başarıyla silindi!";
  }

  DeletePeriodModal.prototype.retrieveItemsToUpdateScreen = function(){
    var periodRetrieveHandlerOperation = periodTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/period/liste", periodRetrieveHandlerOperation);
  }
}
