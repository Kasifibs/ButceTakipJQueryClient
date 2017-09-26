var IncomeItemResultPanel = function(){

    var that = this;
    var incomeItemTableGeneratorObj = new IncomeItemTableGenerator();
    var deleteIncomeItemModalObj = new DeleteIncomeItemModal();
    var updateIncomeItemModalObj = new UpdateIncomeItemModal();

  IncomeItemResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/incomeitem/IncomeItemResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });

    var incomeItemRetrieveHandlerOperation = incomeItemTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/gelirKalemi/liste", incomeItemRetrieveHandlerOperation);
  }

  IncomeItemResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteIncomeItemModalObj.deleteCrudItemModalLoaded();
  }

  IncomeItemResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateIncomeItemModalObj.updateCrudItemModalLoaded();
  }
}
