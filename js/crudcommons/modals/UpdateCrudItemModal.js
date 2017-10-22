var UpdateCrudItemModal = function(){

  var that = this;
  this.modal;
  this.selectedItemId = 0;
  this.crudItemRetrieverObj = new CrudItemRetriever();
  this.updateCrudItemActionObj = new UpdateCrudItemAction();
  this.utils = new Utils();
  this.itemUpdatedListeners = [];

  this.updateCrudItemModalLoaded = function(){

    $("#updateCrudItemActionButton").click(that.updateCrudItem);

    $.get(that.getItemTypeSpecificFormUrl(), function(data){
        $("#crudItemUpdateModalSpecificFormDiv").append(data);
        that.performInitializationsIfNeededAfterModalLoaded();
    });

    $('#updateCrudItemModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget);
      that.selectedItemId = button.attr('itemId');
      that.retrieveSelectedCrudItem(that.selectedItemId);
      that.modal = $(this);
      var modalTitleText = that.getUpdateModalTitleText();
      that.modal.find('#updateCrudItemModalTitle').text(modalTitleText);
    })
  }

  this.performInitializationsIfNeededAfterModalLoaded = function(){
    console.log("Override this function if needed-UpdateCrudItemModal.performInitializationsIfNeededAfterModalLoaded");
  }

  this.retrieveSelectedCrudItem = function(selectedItemId){
    alert("Override this function-UpdateCrudItemModal.retrieveSelectedCrudItem");
  }

  this.getItemTypeSpecificFormUrl = function(){
    alert("Override this function-UpdateCrudItemModal.getItemTypeSpecificFormUrl");
  }

  this.updateCrudItem = function(){
    alert("Override this function-UpdateCrudItemModal.updateCrudItem");
  }

  this.getUpdateModalTitleText = function(){
    alert("Override this function-UpdateCrudItemModal.getUpdateModalTitleText");
  }

  this.getUpdateSuccessMessage = function(){
    alert("Override this function-UpdateCrudItemModal.getUpdateSuccessMessage");
  }

  this.saveSuccess = function(){
    $("#updateCrudItemModal").modal("hide");

    $.get("/ButceTakip/views/crudcommons/alerts/UpdateSuccessAlert.html", function(data){
        $("#resultMessageShowingDiv").append(data);
        $("#specificUpdateAlertText").append("<strong>"+that.getUpdateSuccessMessage()+"</strong>");
        $('#specificUpdateAlertText').attr('id','specificUpdateAlertTextForItem'+that.selectedItemId);
    });

    that.notifyItemUpdatedListeners();
  };

  this.saveFail = function(){};

  this.addItemUpdatedListener = function(newItemUpdatedListener){
    that.itemUpdatedListeners.push(newItemUpdatedListener);
  }

  this.notifyItemUpdatedListeners = function(){
    var itemUpdatedListenersSize = that.itemUpdatedListeners.length;
    for (var i = 0; i < itemUpdatedListenersSize; i++) {
      that.itemUpdatedListeners[i].itemUpdated();
    }
  }

}
