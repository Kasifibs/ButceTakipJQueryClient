var ResourceResultPanel = function(moneyValuePreparatorObj){

  var that = this;
  var resourceTableGeneratorObj = new ResourceTableGenerator();
  var deleteResourceModalObj = new DeleteResourceModal();
  var updateResourceModalObj = new UpdateResourceModal(moneyValuePreparatorObj);

  ResourceResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/resource/ResourceResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
    var resourceRetrieveHandlerOperation = resourceTableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlik/liste", resourceRetrieveHandlerOperation);
  }

  ResourceResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteResourceModalObj.deleteCrudItemModalLoaded();
  }

  ResourceResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateResourceModalObj.updateCrudItemModalLoaded();
  }
}
