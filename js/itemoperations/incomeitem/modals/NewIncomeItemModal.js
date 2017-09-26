var NewIncomeItemModal = function(){

  var that = this;
  var incomeItemTableGeneratorObj = new IncomeItemTableGenerator();

  NewIncomeItemModal.prototype.getItemTypeSpecificFormUrl = function(){
    return "/ButceTakip/views/itemoperations/incomeitem/modals/NewIncomeItemModal.html";
  }

  NewIncomeItemModal.prototype.saveCrudItem = function(){
    var name = $('#addIncomeItemNameTextField').val();
    var newIncomeItem = {"name":name};

    that.saveCrudItemActionObj.saveCrudItem(that.utils.getServerBaseURL() + "/gelirKalemi/kaydet", newIncomeItem, that.saveSuccess, that.saveFail);
  }

  NewIncomeItemModal.prototype.getSaveModalTitleText = function(){
    return "Gelir Kalemi Ekle";
  }

  NewIncomeItemModal.prototype.getSaveSuccessMessage = function(){
    return "Gelir kalemi başarıyla eklendi!";
  }

  NewIncomeItemModal.prototype.retrieveItemsToUpdateScreen = function(){
    var incomeItemRetrieveHandlerOperation = incomeItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/gelirKalemi/liste", incomeItemRetrieveHandlerOperation);
  }

}
