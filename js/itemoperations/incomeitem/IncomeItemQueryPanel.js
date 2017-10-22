var IncomeItemQueryPanel = function(){

  var that = this;
  var incomeItemTableGeneratorObj = new IncomeItemTableGenerator();

  IncomeItemQueryPanel.prototype.loadCrudItemSpecificCriteriasDivSynchronously = function(){
    $.ajax({
        url: "/ButceTakip/views/itemoperations/incomeitem/IncomeItemQueryPanel.html",
        success: function (data) {
          $("#crudItemSpecificCriteriasDiv").append(data);
        },
        async: false
    });
  }

  IncomeItemQueryPanel.prototype.queryButtonClicked = function(){
    var name = $('#incomeItemNameQueryTextField').val();

    var queryParams = {"name":name};

    that.crudItemRetrieverObj.retrieveUsingCriteriasWithPagination(that.utils.getServerBaseURL() + "/gelirKalemi/sorgula", queryParams, that.currentPage, that.itemRetrieveHandlerOperation);
  }

  IncomeItemQueryPanel.prototype.performTableGeneration = function(resultData){
    incomeItemTableGeneratorObj.generateCrudItemTableFromResultData(resultData);
  }
}
