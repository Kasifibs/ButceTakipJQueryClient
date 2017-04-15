var DeleteIncomeModal = function(){

  var that = this;
  var incomeTableGeneratorObj = new IncomeTableGenerator();

  DeleteIncomeModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem("https://localhost:8443/ButceTakipServer/gelir/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeleteIncomeModal.prototype.getDeleteModalTitleText = function(){
    return "Gelir Sil";
  }

  DeleteIncomeModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu geliri silmek istediğinizden emin misiniz?";
  }

  DeleteIncomeModal.prototype.getDeleteSuccessMessage = function(){
    return "Gelir başarıyla silindi!";
  }

  DeleteIncomeModal.prototype.retrieveItemsToUpdateScreen = function(){
    var incomeRetrieveHandlerOperation = incomeTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gelir/liste", incomeRetrieveHandlerOperation);
  }
}
