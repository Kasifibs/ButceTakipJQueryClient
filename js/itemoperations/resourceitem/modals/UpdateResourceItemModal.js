var UpdateResourceItemModal = function(){

  var that = this;
  var modal;
  var currentResItemId;
  var resourceItemRetrieverObj = new ResourceItemRetriever();
  var resourceTableGeneratorObj = new ResourceItemTableGenerator();
  var updateResourceItemActionObj = new UpdateResourceItemAction();

  this.updateResourceItemModalLoaded = function(){
    $('#updateResourceItemButton').click(that.updateResourceItem);

    $('#updateResourceItemModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget);
      selectedItemId = button.attr('itemId');
      resourceItemRetrieverObj.retrieveResourceItemById(selectedItemId, that.fillModalWithCurrentResourceItem);
      modal = $(this);
    })
  }

  this.updateResourceItem = function(){
    var name = $('#updateResourceItemNameTextField').val();

    var updatedResourceItem ={
      "id":currentResItemId,
      "name":name
    }

    updateResourceItemActionObj.updateResourceItem(updatedResourceItem, that.updateSuccess, that.updateFail);
  }

  this.updateSuccess = function(){
    $("#updateResourceItemModal").modal("hide");

    $.get("/ButceTakip/views/itemoperations/resourceitem/alerts/UpdateResourceItemSuccessAlert.html", function(data){
        $("#resultMessageShowingDiv").append(data);
    });

    var resItemRetrieveHandlerOperation = resourceTableGeneratorObj.generateResourceItemTableFromResultData;
    resourceItemRetrieverObj.retrieveAllResourceItems(resItemRetrieveHandlerOperation);
  };

  this.updateFail = function(){};

  this.fillModalWithCurrentResourceItem = function(resultData){
    var retrievedResItem = resultData;
    currentResItemId = retrievedResItem.id;

    modal.find('#updateResourceItemNameTextField').val(retrievedResItem.name);
  }

}
