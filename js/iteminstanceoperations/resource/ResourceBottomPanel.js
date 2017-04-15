var ResourceBottomPanel = function(moneyValuePreparator){

  var that = this;
  var newResourceModalObj = new NewResourceModal(moneyValuePreparator);

  ResourceBottomPanel.prototype.loadCrudItemSpecificCriteriasDiv = function(){
    $.get("/ButceTakip/views/iteminstanceoperations/resource/ResourceBottomPanel.html", function(data){
        $("#crudItemSpecificBottomPanelPartDiv").append(data);
    });
  }

  ResourceBottomPanel.prototype.newCrudItemModalLoaded = function(){
    newResourceModalObj.newCrudItemModalLoaded();
  }

}
