var DeleteResourceModal = function(){
  var that = this;

  DeleteResourceModal.prototype.deleteItem = function(){
    that.deleteCrudItemActionObj.deleteCrudItem(that.utils.getServerBaseURL() + "/varlik/sil/"+that.selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  DeleteResourceModal.prototype.getDeleteModalTitleText = function(){
    return "Varlık Sil";
  }

  DeleteResourceModal.prototype.getDeleteModalBodyText = function(itemId){
    return itemId + "nolu varlığı silmek istediğinizden emin misiniz?";
  }

  DeleteResourceModal.prototype.getDeleteSuccessMessage = function(){
    return "Varlık başarıyla silindi!";
  }

}
