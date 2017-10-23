var ResourceResultPanel = function(moneyValuePreparatorObj){

  var that = this;
  var deleteResourceModalObj = new DeleteResourceModal();
  var updateResourceModalObj = new UpdateResourceModal(moneyValuePreparatorObj);

  ResourceResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/resource/ResourceResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
  }

  ResourceResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteResourceModalObj.deleteCrudItemModalLoaded();
  }

  ResourceResultPanel.prototype.registerForItemDeleteEvent = function(){
    deleteResourceModalObj.addItemDeletedListener(that);
  }

  ResourceResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateResourceModalObj.updateCrudItemModalLoaded();
  }

  ResourceResultPanel.prototype.registerForItemUpdateEvent = function(){
    updateResourceModalObj.addItemUpdatedListener(that);
  }
}
