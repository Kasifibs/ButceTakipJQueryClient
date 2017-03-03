var UpdateExpenseItemModal = function(){

  var that = this;
  var expenseItemTableGeneratorObj = new ExpenseItemTableGenerator();

  UpdateExpenseItemModal.prototype.retrieveSelectedCrudItem = function(selectedItemId){
    that.crudItemRetrieverObj.retrieveCrudItemById("https://localhost:8443/ButceTakipServer/harcamaKalemi/kalem/", selectedItemId, that.fillModalWithCurrentCrudItem);
  }

  UpdateExpenseItemModal.prototype.fillModalWithCurrentCrudItem = function(retrievedItem){
    that.currentCrudItemId = retrievedItem.id;
    that.modal.find('#updateExpenseItemNameTextField').val(retrievedItem.name);
  }

  UpdateExpenseItemModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/itemoperations/expenseitem/modals/UpdateExpenseItemModal.html";
  }

  UpdateExpenseItemModal.prototype.updateCrudItem = function(){
    var name = $('#updateExpenseItemNameTextField').val();
    var updatedExpenseItem = {"id":that.currentCrudItemId,"name":name};

    that.updateCrudItemActionObj.updateCrudItem("https://localhost:8443/ButceTakipServer/harcamaKalemi/guncelle", updatedExpenseItem, that.saveSuccess, that.saveFail);
  }

  UpdateExpenseItemModal.prototype.getUpdateModalTitleText = function(){
    return "Gider Kalemi Güncelle";
  }

  UpdateExpenseItemModal.prototype.getUpdateSuccessMessage = function(){
    return "Gider kalemi başarıyla güncellendi!";
  }

  UpdateExpenseItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var expenseItemRetrieveHandlerOperation = expenseItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/harcamaKalemi/liste", expenseItemRetrieveHandlerOperation);
  }

}
