var DeleteIncomeModal = function(){

  var that = this;

  DeleteIncomeModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem(that.utils.getServerBaseURL() + "/gelir/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
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

}
