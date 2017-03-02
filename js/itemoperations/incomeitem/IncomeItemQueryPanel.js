var IncomeItemQueryPanel = function(){

  var that = this;
  var incomeItemTableGeneratorObj = new IncomeItemTableGenerator();

  IncomeItemQueryPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/incomeitem/IncomeItemQueryPanel.html", function(data){
        $("#crudItemSpecificCriteriasDiv").append(data);
    });
  }

  IncomeItemQueryPanel.prototype.queryButtonClicked = function(){
    var name = $('#incomeItemNameQueryTextField').val();

    var queryParams = {"name":name};

    var incomeItemRetrieveHandlerOperation = incomeItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveUsingCriterias("https://localhost:8443/ButceTakipServer/gelirKalemi/sorgula", queryParams, incomeItemRetrieveHandlerOperation);
  }
}
