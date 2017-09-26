var ResourceItemResultPanel = function(){

    var that = this;
    var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();
    var deleteResourceItemModalObj = new DeleteResourceItemModal();
    var updateResourceItemModalObj = new UpdateResourceItemModal();

  ResourceItemResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });

    var resourceItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems(that.utils.getServerBaseURL() + "/varlikKalemi/liste", resourceItemRetrieveHandlerOperation);
  }

  ResourceItemResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteResourceItemModalObj.deleteCrudItemModalLoaded();
  }

  ResourceItemResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateResourceItemModalObj.updateCrudItemModalLoaded();
  }
}
