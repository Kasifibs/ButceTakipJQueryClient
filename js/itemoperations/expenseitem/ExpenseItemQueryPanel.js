var ExpenseItemQueryPanel = function(){

  var that = this;
  var expenseItemTableGeneratorObj = new ExpenseItemTableGenerator();

  ExpenseItemQueryPanel.prototype.loadCrudItemSpecificCriteriasDivSynchronously = function(){
    $.ajax({
        url: "/ButceTakip/views/itemoperations/expenseitem/ExpenseItemQueryPanel.html",
        success: function (data) {
          $("#crudItemSpecificCriteriasDiv").append(data);
        },
        async: false
    });
  }

  ExpenseItemQueryPanel.prototype.queryButtonClicked = function(){
    var name = $('#expenseItemNameQueryTextField').val();

    var queryParams = {"name":name};

    var expenseItemRetrieveHandlerOperation = expenseItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveUsingCriterias("https://localhost:8443/ButceTakipServer/harcamaKalemi/sorgula", queryParams, expenseItemRetrieveHandlerOperation);
  }
}
