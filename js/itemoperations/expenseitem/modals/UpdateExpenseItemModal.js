var UpdateExpenseItemModal = function(){

  var that = this;

  UpdateExpenseItemModal.prototype.retrieveSelectedCrudItem = function(selectedItemId){
    that.crudItemRetrieverObj.retrieveCrudItemById(that.utils.getServerBaseURL() + "/harcamaKalemi/kalem/", selectedItemId, that.fillModalWithCurrentCrudItem);
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

    that.updateCrudItemActionObj.updateCrudItem(that.utils.getServerBaseURL() + "/harcamaKalemi/guncelle", updatedExpenseItem, that.saveSuccess, that.saveFail);
  }

  UpdateExpenseItemModal.prototype.getUpdateModalTitleText = function(){
    return "Gider Kalemi Güncelle";
  }

  UpdateExpenseItemModal.prototype.getUpdateSuccessMessage = function(){
    return "Gider kalemi başarıyla güncellendi!";
  }

}
