var DeleteExpenseItemModal = function(){

  var that = this;
  var expenseItemTableGeneratorObj = new ExpenseItemTableGenerator();

  DeleteExpenseItemModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem(that.utils.getServerBaseURL() + "/harcamaKalemi/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeleteExpenseItemModal.prototype.getDeleteModalTitleText = function(){
    return "Gider Kalemi Sil";
  }

  DeleteExpenseItemModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu gider kalemini silmek istediğinizden emin misiniz?";
  }

  DeleteExpenseItemModal.prototype.getDeleteSuccessMessage = function(){
    return "Gider kalemi başarıyla silindi!";
  }

  DeleteExpenseItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var expenseItemRetrieveHandlerOperation = expenseItemTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/harcamaKalemi/liste", expenseItemRetrieveHandlerOperation);
  }
}
