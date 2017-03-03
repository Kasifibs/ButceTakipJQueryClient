var NewExpenseItemModal = function(){

  var that = this;
  var expenseItemTableGeneratorObj = new ExpenseItemTableGenerator();

  NewExpenseItemModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/itemoperations/expenseitem/modals/NewExpenseItemModal.html";
  }

  NewExpenseItemModal.prototype.saveCrudItem = function(){
    var name = $('#addExpenseItemNameTextField').val();
    var newExpenseItem = {"name":name};

    that.saveCrudItemActionObj.saveCrudItem("https://localhost:8443/ButceTakipServer/harcamaKalemi/kaydet", newExpenseItem, that.saveSuccess, that.saveFail);
  }

  NewExpenseItemModal.prototype.getSaveModalTitleText = function(){
    return "Gider Kalemi Ekle";
  }

  NewExpenseItemModal.prototype.getSaveSuccessMessage = function(){
    return "Gider kalemi başarıyla eklendi!";
  }

  NewExpenseItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var expenseItemRetrieveHandlerOperation = expenseItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/harcamaKalemi/liste", expenseItemRetrieveHandlerOperation);
  }

}
