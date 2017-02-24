var NewResourceItemModal = function(){

  var that = this;

  var resourceItemRetrieverObj = new ResourceItemRetriever();
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();
  var saveResourceItemActionObj = new SaveResourceItemAction();

  this.newResourceItemModalLoaded = function(){
    $("#saveNewResourceItemButton").click(that.saveNewResourceItem);
  }

  this.saveNewResourceItem = function(){
    var name = $('#addResourceItemNameTextField').val();
    var newResourceItem = {"name":name};
    saveResourceItemActionObj.saveResourceItem(newResourceItem, that.saveSuccess, that.saveFail);
  }

  this.saveSuccess = function(){
    $("#newResourceItemModal").modal("hide");

    $.get("/ButceTakip/views/itemoperations/resourceitem/alerts/NewResourceItemSuccessAlert.html", function(data){
        $("#resultMessageShowingDiv").append(data);
    });

    var resItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateResourceItemTableFromResultData;
    resourceItemRetrieverObj.retrieveAllResourceItems(resItemRetrieveHandlerOperation);
  };

  this.saveFail = function(){};
}
