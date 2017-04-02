var ResourceResultPanel = function(){

  var that = this;

  var that = this;
  var resourceTableGeneratorObj = new ResourceTableGenerator();
  var deleteResourceModalObj = new DeleteResourceModal();

  ResourceResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/resource/ResourceResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
    var resourceRetrieveHandlerOperation = resourceableGeneratorObj.generateCrudItemTableFromResultData;
    this.crudItemRetrieverObj.retrieveAllCrudItems("https://localhost:8443/ButceTakipServer/varlik/liste", resourceRetrieveHandlerOperation);
  }

  ResourceResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteResourceModalObj.deleteCrudItemModalLoaded();
  }

  ResourceResultPanel.prototype.updateCrudItemModalLoaded = function(){
    
  }
}
