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

    that.crudItemRetrieverObj.retrieveUsingCriteriasWithPagination(that.utils.getServerBaseURL() + "/harcamaKalemi/sorgula", queryParams, that.currentPage, that.itemRetrieveHandlerOperation);
  }

  ExpenseItemQueryPanel.prototype.performTableGeneration = function(resultData){
    expenseItemTableGeneratorObj.generateCrudItemTableFromResultData(resultData);
  }
}
