var ResourceItemBottomPanel = function(){

  var that = this;
  var newResourceItemModalObj = new NewResourceItemModal();

  ResourceItemBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  ResourceItemBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newResourceItemModalObj.newCrudItemModalLoaded();
  }

  ResourceItemBottomPanel.prototype.registerForItemAdditionEvent = function(){
    newResourceItemModalObj.addNewItemAddedListeners(that);
  }
}
