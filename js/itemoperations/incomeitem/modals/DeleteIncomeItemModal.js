var DeleteIncomeItemModal = function(){

  var that = this;

  DeleteIncomeItemModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem(that.utils.getServerBaseURL() + "/gelirKalemi/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
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

}
