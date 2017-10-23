var ResourceItemResultPanel = function(){

    var that = this;
    var deleteResourceItemModalObj = new DeleteResourceItemModal();
    var updateResourceItemModalObj = new UpdateResourceItemModal();

  ResourceItemResultPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemResultPanel.html", function(data){
          $("#crudItemResultTableHeaderRow").append(data);
    });
  }

  ResourceItemResultPanel.prototype.deleteCrudItemModalLoaded = function(){
    deleteResourceItemModalObj.deleteCrudItemModalLoaded();
  }

  ResourceItemResultPanel.prototype.registerForItemDeleteEvent = function(){
    deleteResourceItemModalObj.addItemDeletedListener(that);
  }

  ResourceItemResultPanel.prototype.updateCrudItemModalLoaded = function(){
    updateResourceItemModalObj.updateCrudItemModalLoaded();
  }

  ResourceItemResultPanel.prototype.registerForItemUpdateEvent = function(){
    updateResourceItemModalObj.addItemUpdatedListener(that);
  }
}
