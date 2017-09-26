var DeletePeriodModal = function(){

  var that = this;
  var periodTableGeneratorObj = new PeriodTableGenerator();

  DeletePeriodModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem(that.utils.getServerBaseURL() + "/period/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
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
    this.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/period/liste", periodRetrieveHandlerOperation);
  }
}
