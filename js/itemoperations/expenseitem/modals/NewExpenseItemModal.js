var NewExpenseItemModal = function(){

  var that = this;

  NewExpenseItemModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/itemoperations/expenseitem/modals/NewExpenseItemModal.html";
  }

  NewExpenseItemModal.prototype.saveCrudItem = function(){
    var name = $('#addExpenseItemNameTextField').val();
    var newExpenseItem = {"name":name};

    that.saveCrudItemActionObj.saveCrudItem(that.utils.getServerBaseURL() + "/harcamaKalemi/kaydet", newExpenseItem, that.saveSuccess, that.saveFail);
  }

  NewExpenseItemModal.prototype.getSaveModalTitleText = function(){
    return "Gider Kalemi Ekle";
  }

  NewExpenseItemModal.prototype.getSaveSuccessMessage = function(){
    return "Gider kalemi başarıyla eklendi!";
  }

}
