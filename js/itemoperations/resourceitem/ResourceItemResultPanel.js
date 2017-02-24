var ResourceItemResultPanel = function(){

  var that = this;

  var resourceItemRetrieverObj = new ResourceItemRetriever();
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();
  var deleteResourceItemModalObj = new DeleteResourceItemModal();
  var updateResourceItemModalObj = new UpdateResourceItemModal();

  this.resourceItemResultPanelLoaded = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/modals/DeleteResourceItemModal.html", function(data){
        $("#deleteResourceItemModalDiv").append(data);
        deleteResourceItemModalObj.deleteResourceItemModalLoaded();
    });

    $.get("/ButceTakip/views/itemoperations/resourceitem/modals/UpdateResourceItemModal.html", function(data){
        $("#updateResourceItemModalDiv").append(data);
        updateResourceItemModalObj.updateResourceItemModalLoaded();
    });

    var resItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateResourceItemTableFromResultData;
    resourceItemRetrieverObj.retrieveAllResourceItems(resItemRetrieveHandlerOperation);
  }
}
