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
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gelirKalemi/liste", incomeItemRetrieveHandlerOperation);
  }

  IncomeItemResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteIncomeItemModalObj.deleteCrudItemModalLoaded();
  }

  IncomeItemResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateIncomeItemModalObj.updateCrudItemModalLoaded();
  }
}
