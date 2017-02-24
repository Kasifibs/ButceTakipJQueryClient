var ResourceItemBottomPanel = function(){

  var that = this;

  var newResourceItemModalObj = new NewResourceItemModal();

  this.resourceItemBottomPanelLoaded = function(){
    $.get("/ButceTakip/views/itemoperations/resourceitem/modals/NewResourceItemModal.html", function(data){
        $("#newResourceItemModalDiv").append(data);
        newResourceItemModalObj.newResourceItemModalLoaded();
    });
  }
}
