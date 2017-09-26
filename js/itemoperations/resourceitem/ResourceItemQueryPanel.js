var ResourceItemQueryPanel = function(){

  var that = this;
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();

  ResourceItemQueryPanel.prototype.loadCrudItemSpecificCriteriasDivSynchronously = function(){
    $.ajax({
        url: "/ButceTakip/views/itemoperations/resourceitem/ResourceItemQueryPanel.html",
        success: function (data) {
          $("#crudItemSpecificCriteriasDiv").append(data);
        },
        async: false
    });
  }

  ResourceItemQueryPanel.prototype.queryButtonClicked = function(){
    var name = $('#resourceItemNameQueryTextField').val();

    var queryParams = {"name":name};

    var resourceItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveUsingCriterias(that.utils.getServerBaseURL() + "/varlikKalemi/sorgula", queryParams, resourceItemRetrieveHandlerOperation);
  }
}
