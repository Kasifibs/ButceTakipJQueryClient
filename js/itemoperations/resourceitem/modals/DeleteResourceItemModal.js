var DeleteResourceItemModal = function(){

  var that = this;

  DeleteResourceItemModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem(that.utils.getServerBaseURL() + "/varlikKalemi/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeleteResourceItemModal.prototype.getDeleteModalTitleText = function(){
    return "Varlık Kalemi Sil";
  }

  DeleteResourceItemModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu varlık kalemini silmek istediğinizden emin misiniz?";
  }

  DeleteResourceItemModal.prototype.getDeleteSuccessMessage = function(){
    return "Varlık kalemi başarıyla silindi!";
  }

}
