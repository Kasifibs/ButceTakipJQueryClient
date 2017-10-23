var DeleteExpenseModal = function(){

  var that = this;

  DeleteExpenseModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem(that.utils.getServerBaseURL() + "/gider/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
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

}
