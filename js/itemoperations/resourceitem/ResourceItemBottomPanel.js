var ResourceItemBottomPanel = function(){

  var newResourceItemModalObj = new NewResourceItemModal();

  ResourceItemBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/ResourceItemBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  ResourceItemBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newResourceItemModalObj.newCrudItemModalLoaded();
  }
}
