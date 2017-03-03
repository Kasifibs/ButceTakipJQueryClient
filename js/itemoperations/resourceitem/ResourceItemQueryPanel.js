var ResourceItemQueryPanel = function(){

  var that = this;
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();

  ResourceItemQueryPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemQueryPanel.html", function(data){
        $("#crudItemSpecificCriteriasDiv").append(data);
    });
  }

  ResourceItemQueryPanel.prototype.queryButtonClicked = function(){
    var name = $('#resourceItemNameQueryTextField').val();

    var queryParams = {"name":name};

    var resourceItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateCrudItemTableFromResultData;
    that.crudItemRetrieverObj.retrieveUsingCriterias("https://localhost:8443/ButceTakipServer/varlikKalemi/sorgula", queryParams, resourceItemRetrieveHandlerOperation);
  }
}
