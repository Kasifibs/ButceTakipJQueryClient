var DeleteExpenseModal = function(){

  var that = this;
  var expenseTableGeneratorObj = new ExpenseTableGenerator();

  DeleteExpenseModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem("https://localhost:8443/ButceTakipServer/gider/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeleteExpenseModal.prototype.getDeleteModalTitleText = function(){
    return "Gider Sil";
  }

  DeleteExpenseModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu gideri silmek istediğinizden emin misiniz?";
  }

  DeleteExpenseModal.prototype.getDeleteSuccessMessage = function(){
    return "Gider başarıyla silindi!";
  }

  DeleteExpenseModal.prototype.retrieveItemsToUpdateScreen = function(){
    var expenseRetrieveHandlerOperation = expenseTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gider/liste", expenseRetrieveHandlerOperation);
  }
}
