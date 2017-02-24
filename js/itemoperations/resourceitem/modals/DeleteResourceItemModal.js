var DeleteResourceItemModal = function(){

  var that = this;
  var selectedItemId = 0;

  var deleteResourceItemActionObj = new DeleteResourceItemAction();
  var resourceItemRetrieverObj = new ResourceItemRetriever();
  var resourceItemTableGeneratorObj = new ResourceItemTableGenerator();

  this.deleteResourceItemModalLoaded = function(){
    $('#deleteResourceItemActionButton').click(that.deleteResourceItem);

    $('#deleteResourceItemModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget);
      selectedItemId = button.attr('itemId');
      var modal = $(this);
      modal.find('#deleteModalBodyText').text(selectedItemId + "nolu varlık kalemini silmek istediğinizden emin misiniz?")
    })
  }

  this.deleteResourceItem = function(){
    deleteResourceItemActionObj.deleteResourceItem(selectedItemId, that.deleteSuccess, that.deleteFail);
  }

  this.deleteSuccess = function(){
    $("#deleteResourceItemModal").modal("hide");

    $.get("/ButceTakip/views/itemoperations/resourceitem/alerts/DeleteResourceItemSuccessAlert.html", function(data){
        $("#resultMessageShowingDiv").append(data);
    });

    var resItemRetrieveHandlerOperation = resourceItemTableGeneratorObj.generateResourceItemTableFromResultData;
    resourceItemRetrieverObj.retrieveAllResourceItems(resItemRetrieveHandlerOperation);
  };

  this.deleteFail = function(){};
}
