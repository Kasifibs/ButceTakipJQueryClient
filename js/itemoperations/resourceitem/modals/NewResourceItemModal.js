var NewResourceItemModal = function(){

  var that = this;

  NewResourceItemModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/itemoperations/resourceitem/modals/NewResourceItemModal.html";
  }

  NewResourceItemModal.prototype.saveCrudItem = function(){
    var name = $('#addResourceItemNameTextField').val();
    var newResourceItem = {"name":name};

    that.saveCrudItemActionObj.saveCrudItem(that.utils.getServerBaseURL() + "/varlikKalemi/kaydet", newResourceItem, that.saveSuccess, that.saveFail);
  }

  NewResourceItemModal.prototype.getSaveModalTitleText = function(){
    return "Varlık Kalemi Ekle";
  }

  NewResourceItemModal.prototype.getSaveSuccessMessage = function(){
    return "Varlık kalemi başarıyla eklendi!";
  }

}
