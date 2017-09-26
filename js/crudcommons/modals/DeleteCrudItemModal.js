var DeleteCrudItemModal = function(){

    var that = this;
    this.selectedItemId = 0;
    this.crudItemRetrieverObj = new CrudItemRetriever();
    this.deleteCrudItemActionObj = new DeleteCrudItemAction();
    this.utils = new Utils();

    this.deleteCrudItemModalLoaded = function(){
      $('#deleteCrudItemModalActionButton').click(that.deleteItem);

      $('#deleteCrudItemModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        that.selectedItemId = button.attr('itemId');
        var modal = $(this);
        var modalBodyText = that.getDeleteModalBodyText(that.selectedItemId);
        modal.find('#deleteModalBodyText').text(modalBodyText);
        var modalTitleText = that.getDeleteModalTitleText();
        modal.find('#deleteModalTitle').text(modalTitleText);
      })
    }

    this.deleteItem = function(){
      alert("Override this function! - DeleteCrudItemModal.deleteItem");
    }

    this.getDeleteModalTitleText = function(){
      alert("Override this function! - DeleteCrudItemModal.getDeleteModalTitleText");
    }

    this.getDeleteModalBodyText = function(itemId){
      alert("Override this function! - DeleteCrudItemModal.getDeleteModalBodyText");
    }

    this.getDeleteSuccessMessage = function(){
      alert("Override this function! - DeleteCrudItemModal.getDeleteSuccessMessage");
    }

    this.retrieveItemsToUpdateScreen = function(){
      alert("Override this function! - DeleteCrudItemModal.retrieveItemsToUpdateScreen");
    }

    this.deleteSuccess = function(){
      $("#deleteCrudItemModal").modal("hide");

      $.get("/ButceTakip/views/crudcommons/alerts/DeleteSuccessAlert.html", function(data){
          $("#resultMessageShowingDiv").append(data);
           $("#specificDeleteAlertText").append("<strong>"+that.getDeleteSuccessMessage()+"</strong>");
           $('#specificDeleteAlertText').attr('id','specificDeleteAlertText'+that.selectedItemId);
      });

      that.retrieveItemsToUpdateScreen();
    };

    this.deleteFail = function(){};
}
