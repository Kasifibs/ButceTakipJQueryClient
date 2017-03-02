var DeleteIncomeItemModal = function(){

  var that = this;
  var incomeItemTableGeneratorObj = new IncomeItemTableGenerator();

  DeleteIncomeItemModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem("https://localhost:8443/ButceTakipServer/gelirKalemi/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeleteIncomeItemModal.prototype.getDeleteModalTitleText = function(){
    return "Gelir Kalemi Sil";
  }

  DeleteIncomeItemModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu gelir kalemini silmek istediğinizden emin misiniz?";
  }

  DeleteIncomeItemModal.prototype.getDeleteSuccessMessage = function(){
    return "Gelir kalemi başarıyla silindi!";
  }

  DeleteIncomeItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var incomeItemRetrieveHandlerOperation = incomeItemTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gelirKalemi/liste", incomeItemRetrieveHandlerOperation);
  }
}
