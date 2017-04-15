var IncomeResultPanel = function(moneyValuePreparatorObj){

  var that = this;
  var incomeTableGeneratorObj = new IncomeTableGenerator();
  var deleteIncomeModalObj = new DeleteIncomeModal();
  var updateIncomeModalObj = new UpdateIncomeModal(moneyValuePreparatorObj);

  IncomeResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/income/IncomeResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
    var incomeRetrieveHandlerOperation = incomeTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/gelir/liste", incomeRetrieveHandlerOperation);
  }

  IncomeResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteIncomeModalObj.deleteCrudItemModalLoaded();
  }

  IncomeResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateIncomeModalObj.updateCrudItemModalLoaded();
  }
}
